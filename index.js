
//Event for the navigation bar
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {

    const form = {
        name : '',
        email : '',
        people : '',
        contact : '',
        checkin : '',
        checkout : ''
    };

    const myForm = document.getElementById("form-info");

    myForm.addEventListener("submit", function(event)
        {
            event.preventDefault();

            form.name = document.getElementById("name").value;
            console.log('name : '+form.name);
            form.email = document.getElementById("email").value;
            console.log('email : '+form.email);
            form.people = document.getElementById("people").value;
            form.contact = document.getElementById('contact').value;
            console.log('contact no :'+form.contact);
            console.log('Number of people : '+form.people);
            form.checkin = document.getElementById("checkin").value;
            console.log('CheckIn : '+form.checkin);
            form.checkout = document.getElementById("checkout").value;
            console.log('CheckOut : '+form.checkout);

            console.log(JSON.stringify(form));


            // alert(`You booking is confirmed`);
        });
    });

//Function to send the email

function sendEmail()
{
   var name = document.getElementById('name').value;
   var email = document.getElementById('email').value;
   var contact = document.getElementById('contact').value;
   var people = document.getElementById('people').value;
   var checkin = document.getElementById('checkin').value;
   var checkout= document.getElementById('checkout').value;

   var body = 'Booking mail : <br/><br/> Name : '+name+'<br> Email : '+email+'<br/> Contact number : '+contact+
              '<br/> Number of People : '+people+'<br/> Checkin : '+checkin+'<br/> Checkout : '+checkout;

    Email.send({
        SecureToken : 'ac857ae7-d8a4-4c4c-ba6f-5ad5c07dcba7 ',
        To : 'gamingsanctom99@gmail.com',
        From : "ashish23jordson@gmail.com",
        Subject : "New booking",
        Body : body
    }).then(
        swal("Good job!", "You booking has been confirmed", "success")
    );

}

//Function to validate the form

function validateForm()
{
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const people = document.getElementById('people').value;
    const checkin = document.getElementById('checkin').value;
    const checkout= document.getElementById('checkout').value;

    if(name === '' || email === '' || contact === '' || people === '' || checkin === '' || checkout === ''){
        swal("Error", "All fields must be filled....", "warning");
    }
    else{
        sendEmail();
    }
}

