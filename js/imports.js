const nameElement = document.querySelector('.anchor');

const displayNames = (namesToDisplay, element) => {
    let i = 0;
    setInterval(() => {
        element.innerText = namesToDisplay[i];
        i++;
        if (i == namesToDisplay.length) {
            i = 0;
        }
    }, 1000);
}

displayNames(userNames, nameElement)

alert("Welcome " + userName)