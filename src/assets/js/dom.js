export function hasClass(el,className){
	let reg = new RegExp('(|\\s)'+className +'(\\s|$)');
	return reg.test(el.className);
}
export function addClass(el,className){
	if(hasClass(el,className)){
		return
	}
	let newClass = el.className.split(' ');//以空格分割
	newClass.push(className);
	el.className = newClass.join(' ');
}