"use strict";
const userForm = new UserForm();

userForm.loginFormCallback = ({login, password}) =>
    ApiConnector.login({login, password}, function(response){
        this.loginFormCallback(this.getData(this.loginForm));
    });
    if(ApiConnector.login() === true){
        location.reload();
    }else{
        alert("Error!");
    }




///Пример по деструктуризации:
let city = {
    population: 1000000,
    age: 187,
    size: {
    width: 7400,
    length: 6300
    }
};
function aboutCity({ population, age, size:{width, length}, name = "Омск" }) {
console.log(`В городе ${name} с количеством населения ${population} и возрастом ${age} лет размер центрального парка составляет ${width} x ${length} метров`);
}

aboutCity(city);
