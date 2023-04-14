var tag_header = document.querySelectorAll(".nav-link");
for (let i = 0; i < tag_header.length; i++) {
    var chekd = tag_header[i];
    chekd.addEventListener("click", function () {
        for (let i = 0; i < tag_header.length; i++) {
            tag_header[i].classList.remove("active");
        }
        this.classList.add("active");
    });
}