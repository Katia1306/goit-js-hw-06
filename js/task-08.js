const form = document.querySelector(".login-form");

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    
    const data = {
        email: email.value,
        password: password.value
   }


   
    console.log(data);
   // console.log(password);
    
    event.currentTarget.reset()
}