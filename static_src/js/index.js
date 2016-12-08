import Local from './page/localStorage.js'

const stor = new Local;

// присвоить другое имя localStorage
// на подобии курсора для плагина
stor.checkName('ya-ya');

// добавляем значения в localStorage
stor.addlocalStor(1, 3, 4);
stor.addCookie(1, 3, 4);

// обнулить localStorage
stor.nullStorage();
stor.nullCookie();

// читаем что у нас в localStorage, если передать 
// имя, то читаем соответсвующее хранилище
let ar = stor.readStorage('ya-ya'); // stor.readStorage('ya-ya');
let co = stor.readCookie('ya-ya');

console.log(ar, stor.nameStorage, stor.urlGlobal);
// добавляем значения в localStorage
stor.addlocalStor(5, 6, 7);
stor.addCookie(5, 6, 7);

// удалить cookie
// stor.deleteCookie('object');