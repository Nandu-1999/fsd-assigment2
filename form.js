var email= document.getElementById("Email");
var pwd= document.getElementById("Password1");
var phn =document.getElementById("PhoneNumber");
let regex=/^([\w\.]+)@([\w]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let error = document.getElementById("error");
function validate(){
    if(email.value.trim()==""||pwd.value.trim()==""){
        alert("fields can't be empty");
        return false;
    } else if(!isEmail(email.value)){
        alert ("Email is not valid");
        return false;
    } else if(pwd.value.length<8) {
        alert("Password should contain minimum 8 characters");
        return false;
    }else if(!phnVal(phn.value)){
        alert("invalid");
        return false; 
    } else {
        return validatePassword(pwd);
    }

}
function isEmail(email){
    return /^([\w\.]+)@([\w]+).([a-z]{2,3})(.[a-z]{2,3})?$/.test(email);
}

function validatePassword(pwd) {
    var password=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(pwd.value.match(password)) 
    { 
    return true;
    }
    else
    { 
    alert("Password should contain atleast: 8 characters,1 number,1 Uppercase and 1 Lowercase")
    return false;
    }
    }   
function phnVal(phn){
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phn);
}              