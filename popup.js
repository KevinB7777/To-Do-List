let newString = "";

if(localStorage.getItem('savedArray')){
       	var val = localStorage.getItem('savedArray').trim();
       	if(val !== ''){
			newString += " ";
			newString += val;
			if(newString.length != 3){
				newString += "\n";
			}
			else{
				newString = "";
			}
			document.getElementById("display").value = newString;
       	}
}

document.getElementById("submit").addEventListener("click", returnText);
document.getElementById("pleaseWork").addEventListener("keypress", (event) => {
	if(event.key == 'Enter'){
		returnText();
	}
});
document.getElementById("clear").addEventListener("click", emptyArray);
document.getElementById("display").addEventListener("input", updateArray)
function emptyArray() {
	document.getElementById("display").value = "";
	document.getElementById("pleaseWork").value = "";
	newString = "";
	localStorage.setItem("savedArray",JSON.stringify(newString));	
}

function returnText() {

	let string = document.getElementById("pleaseWork").value;
	newString += "\n";
	newString += " - ";
	newString += string;
	newString += "\n";
	document.getElementById("display").value = newString;
	document.getElementById("pleaseWork").value = "";
	localStorage.setItem("savedArray", newString);
}

function updateArray() {
	newString = document.getElementById("display").value;
	localStorage.setItem("savedArray", document.getElementById("display").value);
}



