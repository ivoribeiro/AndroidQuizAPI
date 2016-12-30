'use strict'

// constant with the inputs declaration
const inputsDeclaration = {}

// constant with the edit input declaration
const editInputDeclaration = JSON.parse(JSON.stringify(inputsDeclaration))
editInputDeclaration.id = {required: true}

module.exports = [{
    name: 'createPlayer',
    description: 'Create a new Player',

    inputs: {
        username: {required: true},
        pin: {required: true},
        avatar: {required: true}
    },

    run(api, action, next) {
        console.log(action.params)
        action.params.pontuacao = 0
        // create a new entry on the database
        api.models.get('player')
            .create(action.params)
            .catch(error => {
                next(error)
            })
            .then(model => {
                // append the new model on the response object
                action.response.player = model

                // finish the action execution
                next()
            })
    }
}, {
    name: 'getScores',
    description: 'Get all the Players scores',

    run(api, action, next) {
        api.models.get('player')
            .find({select: ['avatar', 'username', 'pontuacao']})
            .sort('-pontuacao')
            .catch(error => {
                next(error)
            })
            .then(resources => {
                action.response.scores = resources
                next()
            })
    }
}, {
    name: 'updatePlayerScore',
    description: 'Updates the user score',

    inputs: {
        username: {required: true},
        pontuacao: {required: true}
    },

    run(api, action, next) {
        // search for the request post on the DB
        api.models.get('player')
            .update({username: action.params.username}, action.params)
            .catch(error => {
                next(error)
            })
            .then(result => {
                if (result.length == 0) {
                    return next(`There is no resource with that username`)
                }

                // append the model to the response object
                action.response.player = {
                    avatar: result[0].avatar,
                    username: result[0].username,
                    pontuacao: result[0].pontuacao
                }

                // finish the action execution
                next()
            })
    }
}]
