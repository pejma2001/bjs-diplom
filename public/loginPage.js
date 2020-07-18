"use strict";
const userForm = new UserForm();
try{
userForm.loginFormCallback = function log (data){
    ApiConnector.login({login, password}, callback);
    loginFormCallback();
    location.reload();

}
}
catch (err){
    alert(err);
}