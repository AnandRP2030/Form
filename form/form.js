
  $("#sign-up-form").validate({
    errorClass: 'color-msg',
    rules: {

      fname:{
        required:true,
        minlength:3
      },

      lname: {
        required:true,
        minlength:3
      },

      phonenumber:{
        minlength:10,
        maxlength:10
      },


      email: {
        required : true,
        email : true
      },

      firstPassword: {
        required:true,
        minlength:6
      },
      checkbox: {
        required:true
      }

    },

  messages: {

      fname: {
          required:"Enter your first name",
          minlength:jQuery.validator.format("Atleast 3 characters required")
      },

      lname:{
        required:"Enter your last name",
        minlength:"Atleast 3 characters required",
        focusCleanup:false
      },

      email: {
        required:"provide your email address",
        email:"Email must be in the format of name@domain.com "
      },

      phonenumber: {
        minlength:"Enter 10 digits phonenumber",
        maxlength:"Don't Exceed more than 10 digits"
      },

      firstPassword: {
        required: "Enter password for secure your profile",
        minlength:" Enter atleast 6 character"
      },
      checkbox: {
        required: "Accept our Terms & conditions"
      }
     
    },

       submitHandler: function(form) {
          form.submit();
        }

});


    // confirm both password
  

      $("#submit-btn").click(function(){
        confirmPassword();
      });
      
      $("#confirmPassword").keyup(confirmPassword);
  
      function confirmPassword(){
        var firstPassword = $("#password").val();
        var secondPassword = $("#confirmPassword").val();
      
        if ( firstPassword != secondPassword ){

          $(".warning-box").text("Password not match");
          $(".warning-box").removeClass("green-color");
          $(".warning-box").addClass("red-color");

        }else{
          if ( firstPassword.length !== 0 ){
          $(".warning-box").text("Password match");
          $("warning-box").removeClass("red-color");
          $(".warning-box").addClass("green-color");

          }
        }
  
     }
  
     
     
   


