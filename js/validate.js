function validate()
{
var email = document.myForm.emailid.value; var fname = document.myForm.fname.value; var phone = document.myForm.Phone.value;
var pass = document.myForm.psw.value; var rpass = document.myForm.re_psw.value;
var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var reg_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/; var valid_fname = /^[A-Za-z]+$/;
if (email == "" || email == "null")
{
alert("email should not be empty"); return false;
}
if(!email.match(mail))
{
alert("Enter valid email"); return false;
}
if(!fname.match(valid_fname))
{
alert("Enter valid name"); return false;
}
if(fname == "" || fname == "null")
{
alert("name should not be empty"); return false;
}
if(!pass.match(reg_pass))
{
 
alert("Enter valid password, which contains Uppercase, lowercase and special char"); return false;
}
if(!rpass.match(reg_pass))
{
alert("Enter valid retype password, which contains Uppercase, lowercase and special char"); return false;
}
if(pass == "" || pass == null || rpass == "" || rpass == null)
{
alert("password should not be empty"); return false;
}
if (!pass.match(rpass))
{
alert("password and retype password not matching"); return false;
}
if(isNaN(phone))

{
alert("Enter valid contact number"); return false;
}
if(phone == "" || phone == null || phone.length!= 10)
{
alert("Enter valid phone number of length 10"); return false;
}
}
