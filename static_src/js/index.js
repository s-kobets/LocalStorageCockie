import Local from './page/localStorage.js'

const stor = Local;
// читаем что у нас в localStorage, если передать 
// имя, то читаем соответсвующее хранилище
let ar = stor.readStorage(); // stor.readStorage('ya-ya');

// добавляем значения в localStorage
stor.addlocalStor(1, 3, 4);

// обнулить localStorage
stor.nullStorage();

// присвоить другое имя localStorage
stor.nameStorage = 'ya-ya';
stor.addlocalStor('asd', 'dfg');

console.log(ar);