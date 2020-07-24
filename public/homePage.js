let logoutButton = new LogoutButton();
logoutButton.action = ApiConnector.logout(function(response){
    if(response == true) {
    location.reload();
    }
});