function inputSubmit() {

let registersationForm =[]

let textElements = document.getElementsByClassName('field')
let nameField = textElements[0];
let emailField = textElements[1];
let messageField = textElements[2];

let errors = [];

if(nameField.value.length === 0){
   errors.push("Please enter your name")}
if(emailField.value.length === 0){
    errors.push("Please enter your email")}
if(messageField.value.length === 0){
    errors.push("Please enter your message")}
   
let errorBox = document.getElementsByClassName('user-errors')[0]
let successBox = document.getElementsByClassName('user-success')[0]

errorBox.style.display = "none"
errorBox.innerHTML = ""


successBox.style.display = "none"
successBox.innerHTML = ""


if(errors.length > 0){
    errorBox.style.display = "block";
    errorBox.innerHTML = errors.join("<br/>")
} else{
    successBox.style.display = "block";
     successBox.innerHTML = "Thank you for submitting the form, Vimal will contact you soon"
}








}