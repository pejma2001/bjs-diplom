"use strict";
const userForm = new UserForm();

userForm.loginFormCallback = ({login, password}) =>
    ApiConnector.login({login, password}, fn = (response) => console.log(response));
    if(response === true){
        location.reload();
    }else{
        alert(response);
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
