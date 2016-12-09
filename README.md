# Описание

	Пример использования в index.html

# Install

	npm i

# Start

	npm run start

# Build

	npm run build

# Methods

	name = String

	@ присвоить другое имя localStorage // на подобии курсора для плагина
		Local.checkName(name); 

	@ добавляем значения в localStorage, Cookie
		Local.addlocalStor(arguments);
		Local.addCookie(arguments);

	@ обнулить localStorage, Cookie
		Local.nullStorage();
		Local.nullCookie();

	@ читаем что у нас в localStorage, если передать // имя, то читаем соответсвующее хранилище
		Local.readStorage(name);
		Local.readCookie(name);