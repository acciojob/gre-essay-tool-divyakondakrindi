const input = document.getElementById('evaluatedText');
const h3 = document.getElementById('wordCount');
var content = "";
input.addEventListener('input',()=>{
	
	content = input.value.trim();
	if(content==""){
		h3.innerHTML="0";
	}else{
		h3.innerHTML = content.split(/\s+/ig).length;
	}
	
	
	
})