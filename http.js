input = document.querySelector('input');
function startProcess (searchPhrase){
postGET = new getUniversities();
postGET.sendGet(`http://universities.hipolabs.com/search?country=${searchPhrase}`, function callBack(err, text){
if(text){
	textConvert = JSON.parse(text);
		textConvert.forEach(function (textResponse, index){
			let content = `
				<ul><li>${index} ${textResponse.name}</li></ul>
		`
		document.querySelector('#text').innerHTML += content;
		//INSERT CSS VIA JS
		document.querySelector('#text').classList.add('text')
		});
		
}else {
	if(err){
		console.log(err)
	};
}
})
};
input.addEventListener('input', e=> {
searchPhrase = e.target.value;
if(searchPhrase !=='' && isNaN(searchPhrase)=== true){
	startProcess(searchPhrase);
	dataDiv = document.querySelector('#text');
}else {
	hideElements(dataDiv);
}
function hideElements(dataDiv){
	dataDiv.classList.add('hide');
	location.reload(input);
}
});



