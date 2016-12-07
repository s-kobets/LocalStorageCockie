// Обратимся к localStorage следующим образом
let Local = {
	_urlGlobal: [],
	nameStorage: 'object',
	// add localStorage
	addlocalStor: function () {
		const length = arguments.length;
		for (let i = 0; i < length; i++) {
			this._urlGlobal.push(arguments[i]);
		}

		// Сериализуем его
		let sObj = JSON.stringify(this._urlGlobal);

		// Запишем в localStorage с ключём object
		localStorage.setItem(this.nameStorage, sObj);
	},
	// Получим наш сериализованный объект через API
	// Одновременно преобразуем к обычному объекту JavaScriptJSON.parse(localStorage.getItem("object"));
	readStorage: function (name) {
		let varLocalStorage;
		if (name) {
			this.nameStorage = name;
		}

		if (localStorage !== undefined) {
			varLocalStorage = JSON.parse(localStorage.getItem(this.nameStorage));
		}

		if (varLocalStorage !== undefined) {
			this._urlGlobal = varLocalStorage;
		}
		return this._urlGlobal;
	},

	nullStorage: function () {
		this._urlGlobal = [];
		this.addlocalStor();
	}
}

export default Local;