let popup = document.getElementById("purchase"); //gets the access from element id, purchase
//calls the function for popup
function opencart() {
    popup.classList.add("shop");
}

function closecart() {
    popup.classList.remove("shop");
}

//for image sliding
var images = ['images/homepage/slider2.png', 'images/homepage/slider3.png', 'images/homepage/slider4.png', 'images/homepage/slider1.png'];
     
var x = 0;
var imgs = document.getElementById('slidingimg');
setInterval(slider, 4000);//changes the image every 4 seconds

function slider() { //javascript for background slider

  if (x < images.length)
    {
    x = x + 1;
    }

  else
    {
    x = 1;
    }

  imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}

//for newsletter
//calls the function for subscribing alert
function Subscribe() {
    const sub = document.getElementById("subs").value.trim();

    if (sub=== ""){
        alert("please type something");
        return false;
    }
        alert("Subscribed successfully");
        return true;
}
//for review button
//calls the function for review sending
function Send() {
    const sendd = document.getElementById("sends").value.trim();
    
    if (sendd=== ""){
        alert("please type something");
        return false;
    }
        alert("Review sent successfully");
        return true;
}
//for form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const feedback = document.getElementById("message").value.trim();

  if (name=== ""){ //checks whether the field needed is empty or not and alerts
      alert("please enter your name");
      return false;
  }
  
  if (email=== ""){
      alert("please enter your email");
      return false;
  }

  if (phone=== ""){
      alert("please enter your phone number");
      return false;
  }

  if (feedback=== ""){
      alert("please enter your feedback");
      return false;
  }
  
  alert("Feedback sent successfully!");//checks whether every field is filled or not and alerts
  return true;  
}