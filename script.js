let AccordianSections = Array.from(document.getElementsByClassName("accordion"));
AccordianSections.forEach((el) => {
    if (el.classList.contains("active")) {
        el.nextElementSibling.style.height = (document.body.scrollHeight - 165) + "px";
    }
    el.open = (yesOrNo) => {
        if (yesOrNo) {
            el.classList.add("active");
            el.nextElementSibling.style.height = (document.body.scrollHeight - 165) + "px";
        } else {
            el.classList.remove("active");
            el.nextElementSibling.style.height = null;
        }
    };
    el.setActive = () => {
        AccordianSections.forEach((e) => e.open(false));
        el.open(true);
    }
    el.addEventListener("click", el.setActive );
});
// set transition AFTER opening the first section
document.documentElement.style.setProperty('--accordion-transition', 'height 0.5s ease');
// on doument resize, re-set height property
window.addEventListener('resize', () => {
    document.querySelector('.accordion.active + .accordion-panel').style.height = (document.body.scrollHeight - 165) + "px";
});

function detectSearchQueryType(inVal, outputSpan) {
    inVal = inVal.trim().toLowerCase();
    if (inVal == '') {
        outputSpan.innerText = '...';
    }
    // if inVal is an I-number
    else if (inVal.length == 9 && !isNaN(inVal)) {
        outputSpan.innerText = 'I-Number';
    }
    // if inVal starts with + and has only numbers, parenthesis, hyphens, and spaces
    else if (inVal.startsWith('+') && inVal.match(/^[+0-9()-\s]*$/)) {
        outputSpan.innerText = 'Phone Number';
    }
    // if inval is a name
    else {
        outputSpan.innerText = 'Name';
    }
}