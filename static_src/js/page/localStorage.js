// Обратимся к localStorage следующим образом
function Local() {
	this.urlGlobal = [];
	this.nameStorage = 'object';
}

Local.prototype = {
	checkUrlGlobal: function () {
		if (!(this.urlGlobal instanceof Array)) {
			this.urlGlobal = [];
		}
	},

	checkName: function (name) {
		if (name) {
			this.nameStorage = name;
		} else {
			return name = this.nameStorage;
		}
	},
	// add localStorage
	addlocalStor: function () {
		const length = arguments.length;
		console.log(this);
		this.checkUrlGlobal();
		for (let i = 0; i < length; i++) {
			this.urlGlobal.push(arguments[i]);
		}
		// Сериализуем его
		let sObj = JSON.stringify(this.urlGlobal);

		// Запишем в localStorage с ключём object
		localStorage.setItem(this.nameStorage, sObj);
	},
	// Получим наш сериализованный объект через API
	// Одновременно преобразуем к обычному объекту JavaScriptJSON.parse(localStorage.getItem("object"));
	readStorage: function (name) {
		let varLocalStorage;
		this.checkName(name);

		if (localStorage !== undefined) {
			varLocalStorage = JSON.parse(localStorage.getItem(this.nameStorage));
		}

		if (varLocalStorage !== undefined) {
			this.urlGlobal = varLocalStorage;
		}
		return this.urlGlobal;
	},

	nullStorage: function () {
		this.urlGlobal = [];
		this.addlocalStor();
	},

	optionCookie: function (options) {
		options = options || {};
		let expires = options.expires;

		if (typeof expires == "number" && expires) {
			let d = new Date();
			d.setTime(d.getTime() + expires * 1000);
			expires = options.expires = d;
		}
		if (expires && expires.toUTCString) {
			options.expires = expires.toUTCString();
			return options;
		}
	},
	// add localStorage
	addCookie: function (name, options) {
		const optCookie = this.optionCookie(options);
		this.checkName(name);

		let updatedCookie = `${this.nameStorage}=${this.urlGlobal.join(',')}`;		
		if (optCookie) {
			for (let propName in optCookie) {
		    updatedCookie += "; " + propName;
		    let propValue = optCookie[propName];
		    if (propValue !== true) {
		      updatedCookie += "=" + propValue;
		    }
		  }
		}

	  document.cookie = updatedCookie;
	},
	// возвращает cookie с именем name, если есть, если нет, то undefined
	readCookie: function (name) {
		if (navigator.cookieEnabled) {
			const nameCookie = this.checkName(name);
			const matches = document.cookie.match(new RegExp(
				"(?:^|; )" + nameCookie.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			));

			return matches ? decodeURIComponent(matches[1]) : undefined;
		} else {
			alert( 'Включите cookie для комфортной работы с этим сайтом' );
		}
	},

	nullCookie: function () {
		this.urlGlobal = [];
		this.addCookie();
	},

	deleteCookie: function (name) {
		this.addCookie(name, {
			expires: -1
		})
	}
}

export default Local;