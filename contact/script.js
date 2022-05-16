'use strict'

let name = document.getElementById('name')
let email = document.getElementById('email')
let number = document.getElementById('number')
let address = document.getElementById('Address')
let btn = document.getElementById('adm')
let ErrorName = document.getElementById('errorN')
let ErrorMail = document.getElementById('errorE')
let ErrorNumber = document.getElementById('errorNum')
let ErrorAdress = document.getElementById('ErrorAdd')
let errorP = document.getElementById('Errorss')
let Thank = document.getElementById('Thanks')

console.log(email.value);

let info = []


function  validation() {

    let regexM = /^[a-zA-Z0-9]+@+[a-zA-Z]+\.[a-zA-Z]{1,4}/
    let emails = email.value
    let regexN = /^[a-zA-Z]/ 
    let names = name.value
    let regexNU = /^01[0125][0-9]{8}/
    let numbers = number.value

    if (regexM.test(emails) == true && regexN.test(names) == true && regexNU.test(numbers) == true ){
        return true
    }else{
        return false
    }
    
}

btn.addEventListener('click', ()=>{

    let emailss = email.value
    let namess = name.value
    let numberss = number.value

   if(validation() == true){
    info.push(numberss)
    info.push(namess)
    info.push(emailss)
   Thank.style.opacity = 1
   }else if(emailss.value == '' || namess == '' ||numberss.value == '' ){
    errorP.innerHTML = 'Enter the all Required filed Please'
    errorP.style.textAlign = 'center'
    errorP.style.color = 'white'
    errorP.style.transform = 'translatey(2px)'
    errorP.style.opacity = 1
    errorP.focus()
   } else{
       ErrorName.innerHTML = 'enter your Name right'
       ErrorName.style.color = 'white'
       ErrorName.style.transform = 'translatey(6px)'
       ErrorName.style.opacity = 1
       ErrorMail.innerHTML = 'enter your Mail right'
       ErrorMail.style.color = 'white'
       ErrorMail.style.transform = 'translatey(6px)'
       ErrorMail.style.opacity = 1
       ErrorNumber.innerHTML = 'enter your Number right'
       ErrorNumber.style.color = 'white'
       ErrorNumber.style.transform = 'translatey(6px)'
       ErrorNumber.style.opacity = 1
       ErrorAdress.innerHTML = 'enter your Adress right'
       ErrorAdress.style.color = 'white'
       ErrorAdress.style.transform = 'translatey(6px)'
       ErrorAdress.style.opacity = 1
   }
    

})
