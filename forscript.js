document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("loginForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
  
        var validEmail = "clarence@yahoo.com";
        var validPassword = "chickenjoy";

        if (email === "" || password === "") {
          alert("Please enter both the email address and password to proceed.");
        } else if (email === validEmail && password === validPassword) {
          alert("Login successful! You will now be redirected to the dashboard.");
          window.location.href = "dashboards.html";
        } else {
          alert(
            "Oh no! The email address or password you entered is incorrect. Please verify your credentials and try again."
          );
        }
        
      });
  });


  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("login")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
  
  
        if (email === "" || password === "") {
            alert("Congratulations! You have successfully logged in. You will now be redirected to the registration page.");
            window.location.href = "register.html";
        } else if (email === validEmail && password === validPassword) {
          alert("Login successful! You will now be redirected to the dashboard.");
          window.location.href = "dashboards.html";
        } else {
          alert(
            "Oh no! The email address or password you entered is incorrect. Please verify your credentials and try again."
          );
        }
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("login")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        localStorage.setItem("username", username);

  
        alert("Success! You're now logged in and ready to explore to the registration page.");
        window.location.href = "register.html";
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("signupForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confirmpassword = document.getElementById("confirmpassword").value;
        localStorage.setItem("username", username);
        if (
          email === "" ||
          username === "" ||
          password === "" ||
          confirmpassword === ""
        ) {
          alert("Please make sure to complete all the required fields.");
          return;
        }
  
        if (password !== confirmpassword) {
          alert("Uh-oh! The passwords you entered don't match. Please ensure that they are the same for both fields.");
          return;
        }
  
        alert("Congratulations! Your signup is complete! You will now be redirected to the registration page.");
        window.location.href = "register.html";
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("signup")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        localStorage.setItem("username", username);

  
        alert("Congratulations! Your signup is complete! You will now be redirected to the registration page.");
        window.location.href = "register.html";
      });
  });


  




  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("registration")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        var firstName = document.getElementById("rfirstName").value;
        var middleName = document.getElementById("rmiddleName").value;
        var lastName = document.getElementById("rlastName").value;
        var address = document.getElementById("rAddress").value;
        var address2 = document.getElementById("rAddress2").value;
        var district = document.getElementById("rDistrict").value;
        var city = document.getElementById("rCity").value;
        var state = document.getElementById("chooseProvince").value;
        var zip = document.getElementById("rZip").value;
        var agreeTerms = document.getElementById("checkBox").checked;
  
        if (
          !firstName ||
          !middleName ||
          !lastName ||
          !address ||
          !address2 ||
          !district ||
          !city ||
          !state ||
          !zip
        ) {
          alert("Please make sure to complete all the necessary fields.");
          return;
        }
  
        if (!agreeTerms) {
          alert("In order to proceed, we kindly ask you to agree to the Terms and Conditions and Privacy Policy.");
          return;
        }
  
        alert("Success! Your registration is complete. Welcome aboard! Prepare to embark on an exciting journey as we guide you to your personalized dashboard.");
        window.location.href = "dashboards.html";
      });
  });
  


  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("recover")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        var email = document.getElementById("floatingInput").value;

  

  
        if (email === "") {
          alert("Please enter your email address.");
        } else if (email === email) {
          alert("The verification code is in your inbox in your email account. Please open your inbox and enter the 6-digit code we sent you. Once entered, click 'Verify' to complete the verification process.");
        }
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("digitcode")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        var digit = document.getElementById("floatingInput").value;

  

  
        if (digit === "") {
          alert("Please enter your email address.");
        } else if (digit === digit) {
          alert("Verification complete! Your account has been successfully verified. Please proceed to set a new password to secure your account.");
        }
      });
  });

  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("newpassword")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        var password = document.getElementById("password").value;
        var confirmpassword = document.getElementById("confirmpassword").value;
 
        if (
          password === "" ||
          confirmpassword === ""
        ) {
          alert("Please make sure to complete all the required fields.");
          return;
        }
  
        if (password !== confirmpassword) {
          alert("Uh-oh! The passwords you entered don't match. Please ensure that they are the same for both fields.");
          return;
        }
  
        alert("Congratulations! You will now be redirected to the Log in page.");
        window.location.href = "login.html";
      });
  });


