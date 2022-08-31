let htmlElement = document.documentElement,
res = document.querySelector(".res");

htmlElement.addEventListener("mouseup", function () {

    var selectedPart = window.getSelection().toString();

    if (selectedPart !== "") {
        res.innerHTML = selectedPart;
    }

})