const submit = document.querySelector('.notify');
const email= document.querySelector('.email');
const error = document.querySelector('.error')
const expresion = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

console.log(error)
console.log(email)
submit.addEventListener('click' ,()=>{

    emailValido(email.value, email, error);
})

function emailValido (valueInput, divInput, divError){
    if (expresion.test(valueInput)== true)
    {
        sinerror(divInput, divError);
    }else{
        mostrarerror( divInput, divError);
    }
}

function sinerror(divInput, divError){
    divInput.style.border ='1px solid hsl(0, 0%, 59%)';
    divError.style.display = 'none';
}

function mostrarerror(divinput, divError){
    divinput.style.border = '1px solid hsl(354, 100%, 66%)';
    divError.style.display = 'block';
}