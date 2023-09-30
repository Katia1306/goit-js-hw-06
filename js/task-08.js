const form = document.querySelector(".login-form");
const message = "All fields must be filled!";


form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    
    const data = {
        email: email.value,
        password: password.value
    }
   
   

  if(email.value === "" || password.value === "") {
    return alert("All fields must be filled!");
}


  console.log(data);   

event.currentTarget.reset()

    
   }
 