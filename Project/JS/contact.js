var fname = document.getElementById("fname");
var femail = document.getElementById("femail");
var phone = document.getElementById("phone");
var pass = document.getElementById("pass");
var error = document.querySelectorAll(".error");
var valid = document.querySelectorAll(".valid");
console.log(valid);
var formMain = document.getElementById("formMain");

formMain.addEventListener("submit", function (event) {
  event.preventDefault();
  var errorName = "Enter Valid Name !!";
  var errEmail = "Enter valid Email {@__.com}";
  var errPhone = "Enter Valid Phone !!";
  var errPass = "Password at Least 8 chars";
  var validData = "Valid Data";

  var regName = /^([\w]{3,})+\s+([\w]{3,})/i;
  if (!regName.test(fname.value)) {
    alert(errorName);
    // error[0].innerHTML = errorName;
    return;
  } else {
    // valid[0].innerHTML = validData;
  }
  var regEmail = /\w+@\w+.(com|eg)/gi;
  if (!regEmail.test(femail.value)) {
    alert(errEmail);
    // error[1].innerHTML = errEmail;
    return;
  } else {
    // valid[1].innerHTML = validData;
  }
  var regPhone = /(012|010|011|015)\d{8}/gi;
  if (!regPhone.test(phone.value)) {
    alert(errPhone);
    // error[2].innerHTML = errPhone;
    return;
  } else {
    // valid[2].innerHTML = validData;
  }
  if (pass.value.length < 8) {
    alert(errPass);
    // error[3].innerHTML = errPass;
    return;
  } else {
    // valid[3].innerHTML = validData;
  }
  // alert("Valid Data");
  formMain.submit();
  open("../index.html", "_blank");
});
