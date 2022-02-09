let nums = document.querySelectorAll("#count");
let section = document.querySelector(".stats");
let progressSpans = document.querySelectorAll(".the-progress span");
let progressSection = document.querySelector(".our-skills");
let started = false;


window.onscroll = function() {
    if(window.scrollY >= section.offsetTop - 500) {
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }; // Count numbers on scroll

    if(window.scrollY >= progressSection.offsetTop - 300) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }; // Fill Prgoress On Scroll
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    },5)
}

