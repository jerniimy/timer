let firstWrapper = document.querySelector('#firstWrapper');
let secondWrapper = document.querySelector('#secondWrapper');
let thirdWrapper = document.querySelector('#thirdWrapper');
function switchToFirstCard() {
    secondWrapper.classList.remove("active");
    thirdWrapper.classList.remove("active");
    firstWrapper.classList.add("active");
};
function switchToSecondCard() {
    firstWrapper.classList.remove("active");
    thirdWrapper.classList.remove("active");
    secondWrapper.classList.add("active");
};
function switchToThirdCard() {
    secondWrapper.classList.remove("active");
    firstWrapper.classList.remove("active");
    thirdWrapper.classList.add("active");
};
