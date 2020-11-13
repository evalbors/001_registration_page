function validation() {

    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (email.match(pattern))
    {
      form.classList.add('valid');
      form.classList.remove('invalid');
      text.innerHTML = "Your e-mail is valid";
      text.style.color = "#5BE472";
      document.querySelector('#success-icon').style.display = 'block';
      document.querySelector('#error-icon').style.display = 'none';
  
  
    }
    else 
    {
      form.classList.remove('valid');
      form.classList.add('invalid');
      text.innerHTML = "Please enter valid e-mail";
      text.style.color = "#dc3545";
      document.querySelector('#error-icon').style.display = 'block';
      document.querySelector('#success-icon').style.display = 'none';
  
  
    }
  
  }

/*   if (email == "")
  {
    form.classList.remove('invalid');
    form.classList.remove('valid');
    text.innerHTML = "E-mail is required";
    text.style.color = "#00ff00";
    document.querySelector('#error-icon').style.display = 'block';
    document.querySelector('#success-icon').style.display = 'none';
  } */
  
  