let a = document.getElementsByClassName("font-size");
let arr = Array.from(a);

let div = document.querySelector(".book__content");

for(let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function(event) {
        event.preventDefault();

        arr.forEach((el) => {
            el.classList.remove("font-size_active");
        })

        this.classList.add("font-size_active");
        
        let size = this.dataset.size;

        div.classList.remove("font-size_small", "font-size_big");

        if(size === "big") {
            div.classList.add("font-size_big");
        } else if(size === "small") {
            div.classList.add("font-size_small");
        }
    })
}
