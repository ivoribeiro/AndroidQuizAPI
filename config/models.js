'use strict'
exports.production = {
	models:api => {
		return {
			adapters:{
				'mongodb':'sails-mongo'
			},
			connections:{
                mongodb: {
                    database: 'androidquiz' // or omit if not relevant
                }
			},
			defaults:{
				migrate:'safe'
			},
			defaultConnection:'mongodb'
		}
	}
}
