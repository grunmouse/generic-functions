


/**
 * Возвращает обобщённую функцию, которая выбирает реализацию функции по набору имён ключей в переданной мапе
 * @param funcs - мапа с функциями, ключи которых заданы как строка из имён принимаемых ей параметров в алфавитном порядке, разделённая запятыми
 * @param num - массив имён по умолчанию для параметров, переданных не в мапе
 */
function genericA(funcs, num){
	var f = function(...args){
		var map, l = args.length;
		if(typeof args[l-1] == "object"){
			map = args.pop();
			++l;
		}
		else{
			map = {};
		}
		for(let i=0; i<l; ++i){
			map[num[i]] = args[i];
		}
		let name = Object.keys(map).sort().join(',');
		let fun = funcs[name];
		return fun(map);
	}
	f.funcs = funcs;
	f.set = function(name, func){
		if(Array.isArray(name)){
			name = name.sort().join(',');
		}
		funcs[name] = func;
	}
	
	return f;
}

module.exports = {
	genericA
};