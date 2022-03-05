import { classList, weaponsList, passiveList } from './names.js';

const initApp = () => {
    document.getElementById("submitForm").addEventListener("submit", (event) => {
        event.preventDefault();
        clearSuggestions();
        let results = generateNames();
        const classS = results[0],
            leftWeaponArray = results[1],
            rightWeaponArray = results[2],
            passiveArray = results[3];
        displayNames(classS,leftWeaponArray,rightWeaponArray,passiveArray);
    });
}

document.addEventListener("DOMContentLoaded", initApp);

const clearSuggestions = () => {
    const display1 = document.getElementById("classSuggestion");
    if (!display1.classList.contains("hidden")) display1.classList.toggle("hidden");
    const list = document.querySelector('.classSuggestion ol');
    list.innerHTML = "";

    const display2 = document.getElementById("leftWeaponSuggestion");
    if (!display2.classList.contains("hidden")) display2.classList.toggle("hidden");
    const list2 = document.querySelector('.leftWeaponSuggestion ol');
    list2.innerHTML = "";

    const display3 = document.getElementById("rightWeaponSuggestion");
    if (!display3.classList.contains("hidden")) display3.classList.toggle("hidden");
    const list3 = document.querySelector('.rightWeaponSuggestion ol');
    list3.innerHTML = "";

    const display4 = document.getElementById("passiveSuggestion");
    if (!display4.classList.contains("hidden")) display4.classList.toggle("hidden");
    const list4 = document.querySelector('.passiveSuggestion ol');
    list4.innerHTML = "";

    const display5 = document.getElementById("guide");
    if (display5.classList.contains("hidden")) display5.classList.toggle("hidden");
}

const generateNames = () => {
    const randomClassArr = [];
    for (let i = 0; i < 2;) {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomClassArr.includes(randomNumber)) continue;
        randomClassArr.push(randomNumber);
        i++;
    }
    const classSuggestion = classList[randomClassArr[0]];

    const randomLeftWeaponArr = [];
    for (let i = 0; i < 4;) {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomLeftWeaponArr.includes(randomNumber)) continue;
        randomLeftWeaponArr.push(randomNumber);
        i++;
    }
    const leftWeaponSuggestion1 = weaponsList[randomLeftWeaponArr[0]];
    const leftWeaponSuggestion2 = weaponsList[randomLeftWeaponArr[1]];
    const leftWeaponSuggestion3 = weaponsList[randomLeftWeaponArr[2]];

    const randomRightWeaponArr = [];
    for (let i = 0; i < 4;) {
        const randomNumber = Math.floor(Math.random() * 19);
        if (randomRightWeaponArr.includes(randomNumber)) continue;
        randomRightWeaponArr.push(randomNumber);
        i++;
    }
    const rightWeaponSuggestion1 = weaponsList[randomRightWeaponArr[0]];
    const rightWeaponSuggestion2 = weaponsList[randomRightWeaponArr[1]];
    const rightWeaponSuggestion3 = weaponsList[randomRightWeaponArr[2]];

    const randomPassive = [];
    for (let i = 0; i < 5;) {
        const randomNumber = Math.floor(Math.random() * 23);
        if (randomPassive.includes(randomNumber)) continue;
        randomPassive.push(randomNumber);
        i++;
    }
    const randomPassive1 = passiveList[randomPassive[0]];
    const randomPassive2 = passiveList[randomPassive[1]];
    const randomPassive3 = passiveList[randomPassive[2]];
    const randomPassive4 = passiveList[randomPassive[3]];
    const randomPassive5 = passiveList[randomPassive[4]];

    return [classSuggestion, [leftWeaponSuggestion1,leftWeaponSuggestion2,leftWeaponSuggestion3], [rightWeaponSuggestion1,rightWeaponSuggestion2,rightWeaponSuggestion3], [randomPassive1,randomPassive2,randomPassive3,randomPassive4,randomPassive5]];
}

const displayNames = (classS,leftWeaponArray,rightWeaponArray,passiveArray) => {
    const clist = document.querySelector('.classSuggestion ol');
    clist.innerHTML += `<a href="https://eldenring.wiki.fextralife.com/${classS}"> <img src="img/${classS}.png"> <br> ${classS} </a>`;
    const display1 = document.getElementById("classSuggestion");
    if (display1.classList.contains("hidden")) display1.classList.toggle("hidden");

    const lwlist = document.querySelector('.leftWeaponSuggestion ol');
    lwlist.innerHTML += `Left hand:`;
    leftWeaponArray.forEach(weapon => {
        lwlist.innerHTML += `<ul>
            <li>${weapon}</li> 
            </ul>`;
    });
    const display2 = document.getElementById("leftWeaponSuggestion");
    if (display2.classList.contains("hidden")) display2.classList.toggle("hidden");

    const rwlist = document.querySelector('.rightWeaponSuggestion ol');
    rwlist.innerHTML += `Right hand:`;
    rightWeaponArray.forEach(weapon => {
        rwlist.innerHTML += `<ul>
            <li>${weapon}</li> 
            </ul>`;
    });
    const display3 = document.getElementById("rightWeaponSuggestion");
    if (display3.classList.contains("hidden")) display3.classList.toggle("hidden");

    const plist = document.querySelector('.passiveSuggestion ol');
    plist.innerHTML += `Pick your passives:`;
    passiveArray.forEach(passive => {
        plist.innerHTML += `<ul>
            <li>${passive}</li> 
            </ul>`;
    });
    const display4 = document.getElementById("passiveSuggestion");
    if (display4.classList.contains("hidden")) display4.classList.toggle("hidden");

    const display5 = document.getElementById("guide");
    if (!display5.classList.contains("hidden")) display5.classList.toggle("hidden");
}