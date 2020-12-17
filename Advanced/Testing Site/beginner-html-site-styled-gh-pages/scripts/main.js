let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute("src", "images/ffvii.png");
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }

}