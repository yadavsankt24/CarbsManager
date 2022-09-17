import nvbr from "./components/nvbr.js";
import auth from "./auth.js";
let container = document.getElementById("nvbr_container");
container.innerHTML = nvbr();
auth()
let imageLink = [
    "https://t4.ftcdn.net/jpg/01/97/99/09/360_F_197990963_sjL87u6EAOYC5mSml9XpDP1R6C7ztiJc.jpg", "https://media.gettyimages.com/photos/friends-enjoying-lunch-picture-id533579878?s=612x612", "https://www.honestbrandreviews.com/wp-content/uploads/2022/07/Carb-Manager-Review-9.jpg", "https://media.gettyimages.com/photos/preparing-ketogenic-diet-food-in-kitchen-picture-id1195697678?s=612x612", "https://i.dietdoctor.com/wp-content/uploads/2018/05/DD_vegetarian_keto_16-9.jpg?auto=compress%2Cformat&w=400&h=225&fit=crop", "https://c.ndtvimg.com/2019-03/vgd7842_low-carb-diet-for-weight-loss_625x300_06_March_19.jpg"
];
let image = document.querySelector("#crauser");
let left_btn = document.querySelector('#left_btn');
let right_btn = document.querySelector('#right_btn');
let count = 0;
right_btn.addEventListener("click", function () {
    count++;
    if (count === imageLink.length) {
        count = 0;
    }
    image.setAttribute("src", imageLink[count]);
});
left_btn.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = imageLink.length - 1;
    }
    image.setAttribute("src", imageLink[count]);
});


document.querySelector("#signup").addEventListener("click", function () {
    window.location.href = "signup.html";
});
document.querySelector("#signup1").addEventListener("click", function () {
    window.location.href = "signup.html";
});
document.querySelector("#view").addEventListener("click", function () {
    window.location.href = "recipe.html";
});
document.querySelector("#viewAll").addEventListener("click", function () {
    window.location.href = "view.html";
});
document.querySelector("#premium").addEventListener("click", function () {
    window.location.href = "premium1.html";
});
document.querySelector("#giftCards").addEventListener("click", function () {
    window.location.href = 'features.html'
});
document.querySelector("#support").addEventListener("click", function () {
    window.location.href = "support.html";
});
document.querySelector("#Term").addEventListener("click", function () {
    window.location.href = "account_help.html";
});
document.querySelector("#Documents").addEventListener("click", function () {
    window.location.href = "documents.html";
});
document.querySelector("#Contact").addEventListener("click", function () {
    window.location.href = "contact.html";
});
document.querySelector("#setGoal").addEventListener("click", function () {
    window.location.href = "set_goal.html"
});
