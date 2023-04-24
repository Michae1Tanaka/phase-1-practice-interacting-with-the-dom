//fix counter

//Global Variables
let counter = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const likeButton = document.getElementById("heart");
const likeList = document.querySelector(".likes");
const pauseButton = document.getElementById("pause");
const commentForm = document.getElementById("comment-form");
const commentSection = document.querySelector("h3");
const commentSubmitButton = document.getElementById('submit')
let numberOfLikes;

//one liner callbacks
//increments count
const increment = () => counter.innerText++;
//decrements count
const decrement = () => counter.innerText--;
//for every second, count incrementscd
const timer = setInterval(increment, 1000);

//Event Listeners

//for every click of the plus button the counter will increment
plusButton.addEventListener("click", increment);
//for every click of the minus button the counter will decrement
minusButton.addEventListener("click", decrement);
//for every press of the like button it will create a list that is attached to the html and count the times a number was liked.
likeButton.addEventListener("click", likeCounter);
//when pressed will change from pasued/resume and depending on which is there things will happen.
pauseButton.addEventListener("click", pauseButtonEventHandler);
//adds comments from user input onto the page.
commentForm.addEventListener("submit", submitCommentHandler);

//Multi-line Callbacks

//counter callback that adds the number liked and the times liked to the likedList html element
function likeCounter(e) {
  let foundLi = document.getElementById(counter.innerText);
    console.log(foundLi)
  if (foundLi) {
    numberOfLikes++
    foundLi.innerText = `${foundLi.id} has been liked ${numberOfLikes} times`;
  } else {
    let likeLi = document.createElement("li");
    likeList.appendChild(likeLi);
    likeLi.setAttribute("id", counter.innerText);
    numberOfLikes = 1
    likeLi.innerText = `${counter.innerText} has been liked ${numberOfLikes} times`;
    console.log(likeLi);
  }
}

//if counter is ongoing, pauses counter and removes events from other buttons.
//if counter is stopped, continues counter and adds events back to other buttons.
function pauseButtonEventHandler(e) {
  if (pauseButton.innerText === "pause") {
    pauseButton.innerText = "resume";
    clearInterval(timer);
    plusButton.disabled = true
    likeButton.disabled = true
    minusButton.disabled = true;
    commentSubmitButton.disabled = true
  } else {
    pauseButton.innerText = "pause";
    setInterval(increment, 1000);
    plusButton.disabled = false
    likeButton.disabled = false
    plusButton.disabled = false
    minusButton.disabled = false
    commentSubmitButton.disabled = false
  }
}

//adds comments to the commentSection html element based on user input.
function submitCommentHandler(e) {
  e.preventDefault();
  console.log(e);
  const comment = document.createElement("p");
  commentSection.appendChild(comment);
  comment.innerText = e.target[0].value;
  commentForm.reset();
}
