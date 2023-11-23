//your JS code here. If required.
const searchbox=document.getElementsByClassName("search")[0];
const searchinput=document.getElementsByClassName("input")[0];
console.log(searchbox);
searchbox.addEventListener("click",()=>{
	searchbox.classList.toggle("active");
	if(searchbox.classList.contains("active")){
		searchinput.focus();
	}
})
// searchbox.classList.remove("active");