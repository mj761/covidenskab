//Scroll ned button funktion
//Få fat i button via #elem
const btn = document.getElementById('elem');
//Når brugeren klikker skal knappen scrolle ned
btn.addEventListener('click', () => window.scrollTo({
    top: 800,
    behavior: 'smooth',
}));

// form validatation 
function validateForm() {
    //Prevent default ved klik på knappen
    event.preventDefault();
    //Hvis værdien er tom, send besked 'angiv email' til class msg1
    if (document.myForm.email.value == "") {
        msg1.innerHTML = 'Please angiv en korrekt email adresse';
        document.myForm.email.focus();
        return false;
    } else { msg1.innerHTML = ''; }
    //Hvis værdien er tom, send besked 'angiv navn' til class msg2
    if (document.myForm.name.value == "") {
        msg2.innerHTML = 'Please angiv et valid navn';
        document.myForm.name.focus();
        return false;
    } else { msg2.innerHTML = ''; }
    //Hvis værdien er tom, send besked 'angiv emne' til class msg3
    if (document.myForm.kort.value == "") {
        msg3.innerHTML = 'Please skriv hvad dit emne drejer sig om';
        document.myForm.email.focus();
        return false;
    } else { msg3.innerHTML = ''; }
    //Hvis værdien er tom, send besked 'skriv i feltet' til class msg4
    if (document.myForm.message.value == "") {
        msg4.innerHTML = 'Please skriv noget i tekstfeltet';
        document.myForm.message.focus();
        return false;
    } else { msg4.innerHTML = ''; }
    //Returner "Tak for din besked! " hvis felterne er udfyldt korrekt

    confirm("Tak for din besked! ");
    //Reload window hvis felterne er udfyldt korrekt
    window.location.reload();
    //Korrekt udfyldning af form returnere true
    return (true);
}

//Valider email
function validateEmail() {
    //få fat i email value fra myForm
    var emailID = document.myForm.email.value;
    //Der skal ingå @ i email
    atpos = emailID.indexOf("@");
    //Der skal indgå . i email
    dotpos = emailID.lastIndexOf(".");
    //Hvis atpos er mindre end 1, eller dotpos - atpos er mindre end 2
    if (atpos < 1 || (dotpos - atpos < 2)) {
        //Skal en alert med "Please enter correct email ID" komme frem
        alert("Please enter correct email ID")
        //Fokus på email felt
        document.myForm.email.focus();
        //Email er udfyldt forkert, returnere false
        return false;
    }
    //Email er udfyldt korrekt, returnere true
    return (true);
}

