// Обратимся к localStorage следующим образом
class Local {
	constructor(...props) {
		if (props.length > 0) {
			this.nameStorage = props[0];
		}
	}

	checkUrlGlobal() {
		if (!(this.urlGlobal instanceof Array)) {
			this.urlGlobal = [];
		}
	}

	checkName(name) {
		if (name) {
			return this.nameStorage = name;
		} else {
			return this.nameStorage = 'default';
		}
	}
	// add localStorage
	addlocalStor() {
		const length = arguments.length;
		this.checkUrlGlobal();
		// this.checkName();
		for (let i = 0; i < length; i++) {
			this.urlGlobal.push(arguments[i]);
		}
		// Сериализуем его
		let sObj = JSON.stringify(this.urlGlobal);

		// Запишем в localStorage с ключём object
		localStorage.setItem(this.nameStorage, sObj);
	}
	// Получим наш сериализованный объект через API
	// Одновременно преобразуем к обычному объекту JavaScriptJSON.parse(localStorage.getItem("object"));
	readStorage(name) {
		let varLocalStorage;
		this.checkName(name);

		if (localStorage !== undefined) {
			varLocalStorage = JSON.parse(localStorage.getItem(this.nameStorage));
		}

		if (varLocalStorage !== undefined) {
			this.urlGlobal = varLocalStorage;
		}
		return this.urlGlobal;
	}

	nullStorage() {
		this.urlGlobal = [];
		this.addlocalStor();
	}

	optionCookie(options) {
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
	}

	addCookie(options) {
		const optCookie = this.optionCookie(options);

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
	}

	// возвращает cookie с именем name, если есть, если нет, то undefined
	readCookie(name) {
		if (navigator.cookieEnabled) {
			const nameCookie = this.checkName(name);
			const matches = document.cookie.match(new RegExp(
				"(?:^|; )" + nameCookie.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			));

			return matches ? decodeURIComponent(matches[1]) : undefined;
		} else {
			alert( 'Включите cookie для комфортной работы с этим сайтом' );
		}
	}

	nullCookie() {
		this.urlGlobal = [];
		this.addCookie();
	}

	deleteCookie(name) {
		this.addCookie(name, {
			expires: -1
		});
	}
}

export default Local;
