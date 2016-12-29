'use strict'
exports.production = {
	models:api => {
		return {
			adapters:{
				'mongodb':'sails-mongo'
			},
			connections:{
				mongodb:{
					adapter:'mongodb',
					url:'mongodb://androiquiz:0.0.0.0:27017'
				}
			},
			defaults:{
				migrate:'safe'
			},
			defaultConnection:'mongodb'
		}
	}
}
