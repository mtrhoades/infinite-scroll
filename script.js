// 1. load images
const root = document.querySelector('#root');
const url = "https://randomfox.ca//images//";
const fileType = ".jpg";

const getRandomNumber = () => {
    return Math.floor(Math.random()*100)+1;
}

const loadImages = (numImages = 20) => {
    i = 0;
    while (i < numImages) {
        let img = document.createElement('img');
        img.src = `${url}${getRandomNumber()}${fileType}`;
        root.appendChild(img);
        i++;
    }
}

loadImages();




// 2. load more images when scrolling to bottom of page
window.addEventListener("scroll", () => {
    // console logs
    console.log("");
    console.log("scrollHeight", document.documentElement.scrollHeight);
    console.log("scrollY", window.scrollY);
    console.log("innerHeight", window.innerHeight);
    
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadImages();
    }
    });
    
    // NOTES:
    // scrollHeight = scrollY + innerHeight
    // scrollHeight is the full height of the page
    // innerHeight is what is currently visible on screen
    // scroll Y is how far we have scrolled down from the top of the screen 