let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/earth-image-by-nasa.jpg') {
        myImage.setAttribute('src', 'images/another-earth-image-by-nasa.jpg');
    } else {
        myImage.setAttribute('src', 'images/earth-image-by-nasa.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Earth, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Earth, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}