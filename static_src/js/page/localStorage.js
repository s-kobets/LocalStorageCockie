// Обратимся к localStorage следующим образом
let Glob = {
	_urlGlobal: {},
	// add localStorage
	addlocalStor: function () {
		// Сериализуем его
		let sObj = JSON.stringify(this._urlGlobal);

		// Запишем в localStorage с ключём object
		localStorage.setItem('object', sObj);
	},
	// Получим наш сериализованный объект через API
	// Одновременно преобразуем к обычному объекту JavaScriptJSON.parse(localStorage.getItem("object"));
	inicial: function () {
		let varLocalStorage;

		if ( localStorage !== undefined) {
			varLocalStorage = JSON.parse(localStorage.getItem('object'));
		}

		if ( varLocalStorage !== undefined) {
			this._urlGlobal = varLocalStorage;
		}
	}
}

export default Glob;