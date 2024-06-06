const body = document.querySelector('body');
const form = document.querySelector('form');
const email = document.querySelector('.emailClass');
const password = document.querySelector('.passwordClass');
const submit = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const showError = document.querySelector('#showError');

    let email1 = 'ankit.deep257184@gmail.com';
    let password1 = '12345';
    let email2 = 'xyz@gmail.com';
    let password2 = 'asdf';
    
    let emailVal = String(email.value);
    let passwordVal = String(password.value);

    //checking for the user one
    if (emailVal === email1 && passwordVal === password1) {
        alert(`Your form is successfully submitted!`);
        console.log(`User one form is submitted successfully`);
        location.reload();
    }  
    // checking for user two
    else if (emailVal === email2 && passwordVal === password2) {
        alert(`Your form is successfully submitted!`);
        console.log(`User two form is submitted successfully`);
        location.reload();
    } 
    // if both the conditions are wrong
    else {
        console.log(`Either email or password is wrong`);
        showError.innerHTML = '* Incorrect Email or Password *';
        showError.style.color = 'red';

        function alertCall() {
            setTimeout(() => {
                alert(`Please try again.`);
                email.value = '';
                password.value = '';
                showError.innerHTML = '';
            }, 1000);
        }
        alertCall();
    }
})