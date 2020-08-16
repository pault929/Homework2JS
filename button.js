
var criteria = prompt("Do you want the computer to use its own password criteria");
var userPass = prompt("How long do you want your password to be - range of 8 and 128 characters");
if(criteria){
    alert("Great we will set up your Password for you");
}
else{
    alert("Please answer the following questions");
}




var generateBtn = document.getElementById("password"); 
  
/* Function to generate combination of password */ 
function generateP() { 
    var pass = ''; 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
            'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
      
    for (i = 1; i <= 8; i++) { 
        var char = Math.floor(Math.random() 
                    * str.length + 1); 
          
        pass += str.charAt(char) 
    } 
      
    return pass; 
} 

function gen_Pass() { 
    generateBtn.innerHTML = generateP(); 
} 