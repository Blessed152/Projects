class getUniversities {
	constructor(){
		this.getData = new XMLHttpRequest();
	}
};

getUniversities.prototype.sendGet = function (URL, callBack){
	this.getData.open('GET', URL, true);
	let that = this;
	this.getData.onload = function (){
		if(that.getData.status === 200){
				callBack(null, that.getData.responseText)
		}
	}
	this.getData.send();
};

