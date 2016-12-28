exports.default = {
    attributes: {
        username: {
            type: 'string',
            unique: true
        },
        pin: {
            type: 'integer',
            required: true
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