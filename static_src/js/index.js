import Local from './page/localStorage.js'

const stor = new Local;
// читаем что у нас в localStorage, если передать 
// имя, то читаем соответсвующее хранилище
let ar = stor.readStorage(); // stor.readStorage('ya-ya');
let co = stor.readCookie();

// добавляем значения в localStorage
stor.addlocalStor(1, 3, 4);
stor.addCookie();

// обнулить localStorage
stor.nullStorage();
stor.nullCookie();

// присвоить другое имя localStorage
stor.nameStorage = 'ya-ya';
stor.addlocalStor('asd', 'dfg');
stor.addCookie();

// удалить cookie
// stor.deleteCookie('object');


console.log(stor.nameStorage);