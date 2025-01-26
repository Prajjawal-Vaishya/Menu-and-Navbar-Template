const navbut = document.querySelectorAll(".nav_but")
const content = document.querySelectorAll(".middle .content")
navbut.forEach(element => {
    element.addEventListener("click", function() {
        navbut.forEach(button => button.children[1].removeAttribute("id","active"));
        element.children[1].setAttribute("id","active")
        content.forEach(intag => {
            intag.classList.remove("active")
            console.log(intag.classList[0],element.classList[0])
            if (intag.classList[0] == element.classList[0]) {
                intag.classList.add("active")
            }
        });
    })
});
