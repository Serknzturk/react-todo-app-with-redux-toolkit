const IdManagerClass = require('./IdManager.js');
let dbMock = require('./dbMock.js');

class DbManager{
	constructor(){
		IdManagerClass.setIds(dbMock);
	}

	addItem(item){
		item = this.validateWithSchema(item);
		dbMock.push(item);
	}

	getItems(){
		return dbMock;
	}


	//Normally this should throw some errors, but to keep it simple, I will add placeholders
	validateWithSchema(item){
		const schema = {
			title: item.hasOwnProperty('title') ? item.title : 'Should Throw No Title Error',
			checked: item.hasOwnProperty('checked') ? item.checked : false
		}

		if(item.hasOwnProperty('id')){
			schema.id = item.id;
		}else{
			schema.id = IdManagerClass.generateId();
		}

		return schema;
	}
}

module.exports = DbManager;