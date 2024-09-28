let userName=document.querySelector('#username');
let password=document.querySelector('#password');
let password2=document.querySelector('#password2');
let submit=document.querySelector('#submit');

submit.onclick = function(){
    const userNameValue= userName.value.trim();
    const passwordValue= password.value.trim();
    const password2Value= password2.value.trim();



    if(userNameValue === ""){
        errors( userName , "username requierd");
    }else{
        sucess(userName);
    }


    if(passwordValue === ""){
        errors( password , "password requierd");
    } else if (passwordValue.length <= 8) {
        errors(password, "Password must be more then 8 characters")
    }else{
        sucess(password);
    }



    if(password2Value === ""){
        errors( password2 , "Pleas confirm password");
    } else if (password2Value !== passwordValue) {
        errors(password2, "Incorrect password")
    }else{
        sucess(password2);
    }
    
}


const errors=function(element,message){
    const inputControl=element.parentElement;
    errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    element.classList.add("err");
    element.classList.remove("suc");

}

const sucess=function(element){
    const inputControl = element.parentElement;
    errorDisplay = inputControl.querySelector('error');
    errorDisplay.innerText="";
    element.classList.remove('err');
    element.classList.add('suc');
    
}