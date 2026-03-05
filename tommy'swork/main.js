document.querySelectorAll(".clickable").forEach(function(img) {

    img.addEventListener("click", function() {

        const text = img.nextElementSibling;

        if (text.style.display === "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }

    });

});