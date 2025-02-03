function firstNonRepeatedChar(str) {
 // Write your code here
	
   let rst =   str.split("").filter((ch,i,arr)=>arr.indexOf(ch)==arr.lastIndexOf(ch)).join("");
	return	rst.length>0?rst:null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
