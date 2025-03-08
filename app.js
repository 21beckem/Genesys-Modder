const TicketBtn = document.querySelector('DIV.interaction-controls  DIV[role=tablist] BUTTON[aria-label=Notes]')
const TicketBody = document.querySelector('DIV.notes-body:has( textarea#interaction-notes)')

if (!TicketBtn) {
    alert("There was an error finding the button to overwrite. Please try again.");
}
if (!TicketBody) {
    alert("There was an error finding the panel to overwrite. Please try again.");
}

TicketBtn.innerHTML = `<div style="width: 60%; height: 60%;" title="" class="app-img icon ember-view">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"/></svg>
</div>
<gux-tooltip placement="bottom" id="gux-tooltip-k38ybk46n8" class="" role="tooltip" hydrated="" data-placement="bottom" style="left: 800.875px; top: 117px; visibility: visible;">
    <span aria-hidden="true">Ticket</span>
</gux-tooltip>`;
TicketBody.innerHTML = `<iframe id="iframeForNewTicketPanel" style="width: 100%; height: 100%; border: none"></iframe>`;

document.getElementById('iframeForNewTicketPanel').srcdoc = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genesys Ticketer Panel</title>
    <style>
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
}
:root {
    --accordion-transition: none;
    --gen-orange: #FF451A;
    --gen-dark-gray: #33383D;
    --gen-light-gray: #98A7B8;
}
.accordion {
    background-color: var(--gen-dark-gray);
    color: var(--gen-light-gray);
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    height: 55px;
}

.accordion.active, .accordion:hover {
    color: white;
}

.accordion:after {
    content: '\\002B';
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
}

.active:after {
    content: "\\2212";
}

.accordion-panel {
    padding: 0 18px;
    background-color: white;
    height: 0;
    overflow: hidden;
    transition: var(--accordion-transition);
}

input[type="text"] {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgb(36, 36, 36);
    box-shadow: 0px 0px 20px -10px #bfbfbf inset;
}
</style>
</head>

<body>
    <button class="accordion active">Identify</button>
    <div class="accordion-panel">
        <center>
            <h2>TD Ticket</h2>
            <input type="text" oninput="detectSearchQueryType(this.value, this.nextElementSibling.firstElementChild)" placeholder="Search Query..." style="width: 80%; max-width: 230px;">
            <p style="color: gray;">Searching as <span>...</span></p>
        </center>
    </div>

    <button class="accordion">Assist</button>
    <div class="accordion-panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
    </div>

    <button class="accordion">Review</button>
    <div class="accordion-panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.</p>
    </div>

    <script>
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
// on doument resize, re-set height property without transition
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--accordion-transition', 'none');
    document.querySelector('.accordion.active + .accordion-panel').style.height = (document.body.scrollHeight - 165) + "px";
    document.documentElement.style.setProperty('--accordion-transition', 'height 0.5s ease');
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
    else if (inVal.startsWith('+') && inVal.match(/^[+0-9()-\\s]*$/)) {
        outputSpan.innerText = 'Phone Number';
    }
    // if inval is a name
    else {
        outputSpan.innerText = 'Name';
    }
}
</script>
</body>

</html>`;