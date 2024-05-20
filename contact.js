function sendMail(){
    let parms = {
        name :document.getElementById("name").value,
        email :document.getElementById("email").value,
        subject :document.getElementById("subject").value,
        message :document.getElementById("message").value,
    }

    emailjs.send("service_yt02xi4","template_x2x60y6",parms).then(alert("Email Sent!!!"))
} 
