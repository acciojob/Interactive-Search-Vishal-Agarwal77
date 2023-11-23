//your JS code here. If required.
const searchbox=document.getElementsByClassName("search")[0];
console.log(searchbox);
searchbox.addEventListener("click",()=>{
	searchbox.classList.add("active");
})