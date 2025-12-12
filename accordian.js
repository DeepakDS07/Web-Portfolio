document.querySelectorAll(".accordion-header").forEach(btn => {
    btn.addEventListener("click", () => {
        const body = btn.nextElementSibling;
        btn.classList.toggle("active");

        if (body.style.maxHeight) {
            body.style.maxHeight = null;
        } else {
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });
});
