import originJSONP from "jsonp"

export default function jsonp(url,data,option){//封装一个简单的jsonp
	//字符串开始拼接，如果url的第一个字符是?号，则先返回？，否则返回&，为了避免21行的加了重复的&号
	url+=(url.indexOf('?')<0 ? '?':'&') + param(data);
	return new Promise((resolve,reject)=>{
		originJSONP(url,option,(err,data)=>{//JOSNP的API
			if(!err){
				resolve(data);//如果成功，resolve（data）出去
			}else{
				reject(err)
			}
		})
	})
}

function param(data){
	let url = '';
	for(var k in data){
		let value = data[k]!==undefined?'data[k]':'';
		url+=`&${k}=${encodeURIComponent(value)}`;//ES6的语法，url拼接
	}
	//如果存在url,要把第一个字符&去掉，所以url.substring(1)，否则返回空
	return url ? url.substring(1):'';
}