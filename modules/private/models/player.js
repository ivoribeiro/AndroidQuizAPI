exports.default = {
    attributes: {
        username: {
            type: 'string',
            unique: true
        },
        avatar: {
            type: 'string',
            required: true
        },
        pontuacao: {
            type: 'integer',
            required: true
        }
    }
}