const topToolbar = document.querySelector(".top-toolbar");
const container = document.querySelector(".container");
const faqs = document.querySelectorAll(".faq");

topToolbar.addEventListener("click", () => {
    if(topToolbar.classList.contains("active")) {
        topToolbar.classList.remove("active");
        container.classList.remove("active");
        faqs.forEach(faq => {
            faq.classList.remove("active");
        })
    } else {
        topToolbar.classList.add("active");
        container.classList.add("active");
        faqs.forEach(faq => {
            faq.classList.add("active");
        })
    }
})