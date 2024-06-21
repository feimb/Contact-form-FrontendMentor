const submitBtn = document.getElementById("submit-button");
// first Name
const firstNameInput = document.getElementById("first-name");
const firstNameRequired = document.querySelector(".first-name--required");
// last name
const lastNameInput = document.getElementById("last-name");
const lastNameRequired = document.querySelector(".last-name--required");
// email
const emailInput = document.getElementById("email-input");
const emailRquired = document.querySelector(".email--required");
// radio
const radioInput1 = document.getElementById("General-Enquiry");
const radioInput2 = document.getElementById("Support-Request");
const radioRequired = document.querySelector(".query--required");
// message
const messageInput = document.getElementById("message-input");
const messageRequired = document.querySelector(".message--required");
// consent
const consentInput = document.getElementById("consent");
const consentRequired = document.querySelector(".consent--required");
// message sent
const messageSent = document.querySelector(".message-sent")
function removeInactive(input, inputRequired){
  if(input.value.trim() == "" ){
    inputRequired.classList.remove("inactive");
  }
}
submitBtn.addEventListener("click", function(event){
  event.preventDefault();
  console.log(messageInput.length)
  if(firstNameInput.value !== "" 
    && 
    lastNameInput.value !== "" 
    && 
    emailInput.value !== "" 
    && 
    messageInput.value !== ""
    && 
    radioInput1.checked == true || radioInput2.checked == true
    &&
    consentInput.checked == true
  ){
    messageSent.classList.add("la-otra-posicion")
    setTimeout(function(){
      messageSent.classList.remove("la-otra-posicion")
    }, 1500)
  }
  console.log(firstNameInput.value)
  // firstNameInput
  removeInactive(firstNameInput, firstNameRequired);
  // lastNameInput
  removeInactive(lastNameInput, lastNameRequired);
  // email
  removeInactive(emailInput, emailRquired);
  //radio
  if(radioInput1.checked == false && radioInput2.checked == false){
    radioRequired.classList.remove("inactive");
  }
  // message
  removeInactive(messageInput, messageRequired)
  // consent 
  if(consentInput.checked == false){
    consentRequired.classList.remove("inactive");
  }
});
