class Person {
	constructor(name){
		this.name = name;
	}
	insertName = function (){
	return this.name;
	}
}

showName (Person, 'Muchuu');
function showName (Person, mrMuchuu){
	creator = new Person(mrMuchuu);
//INSERT NAME //
document.querySelector('#developerName').textContent = creator.insertName();
}