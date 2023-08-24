var firstbut = document.querySelector(".but");
var seconbut = document.querySelector(".butt");
var input = document.querySelector(".text");


document.querySelector(".but").setAttribute("disabled", "disabled");

var price = document.getElementById("price").innerText;

var priceIncrease;


function priceInc() {
    var total = priceIncrease * price;
    document.getElementById("price").innerText = total

}

seconbut.addEventListener("click", function () {
    priceIncrease = document.getElementById("text").value;

    priceIncrease++;

    document.getElementById("text").value = priceIncrease


    if (priceIncrease > 1) {
        firstbut.removeAttribute("disabled", "disabled");
        firstbut.classList.remove("disabled");

    }
    priceInc()


})
firstbut.addEventListener("click", function () {
    priceIncrease = document.getElementById("text").value;

    priceIncrease--;

    document.getElementById("text").value = priceIncrease;


    if (priceIncrease == 1) {
        firstbut.setAttribute("disabled", "disabled");

    }

    priceInc()
})


var exam =document.querySelector(".example");
var wrap =document.querySelector(".wrapper")


function popup(){
    exam.classList.add("example-add");
    wrap.classList.add("wrapper-add");

    setTimeout(() => {
         
     window.location.href="./sucess.html"
    }, 5000);
}

