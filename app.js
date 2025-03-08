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
    --gen-blue: #2A60C8;
}
/* HTML: <div class="loader"></div> */
.loader {
    --c: no-repeat linear-gradient(var(--gen-orange) 0 0);
    background: 
        var(--c),var(--c),var(--c),
        var(--c),var(--c),var(--c),
        var(--c),var(--c),var(--c);
    background-size: 16px 16px;
    animation: 
        l32-1 1s infinite,
        l32-2 1s infinite;
}
@keyframes l32-1 {
    0%,100% {width:45px;height: 45px}
    35%,65% {width:65px;height: 65px}
}
  @keyframes l32-2 {
    0%,40%  {background-position: 0 0,0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,  50% 50% }
    60%,100%{background-position: 0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,0 0,  50% 50% }
}
#loadingOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
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
    color: black;
}

#IdenifySearchButton {
    padding: 10px 30px;
    background-color: white;
    color: var(--gen-orange);
    border: 1px solid var(--gen-orange);
    cursor: pointer;
}
#IdenifySearchButton:disabled {
    border-color: var(--gen-light-gray);
    color: var(--gen-light-gray);
    cursor: not-allowed;
}

#peopleReultsList .personCard {
    position: relative;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid rgb(36, 36, 36);
    box-shadow: 0px 0px 20px -10px #bfbfbf inset;
    color: black;
    margin-top: 10px;
}
#peopleReultsList .personCard h3 { margin: 0; color: #306090; cursor: pointer; }
#peopleReultsList .personCard p { margin: 0; padding-left: 10px; }
#peopleReultsList .personCard button {
    position: absolute;
    height: calc(100% - 10px);
    right: 5px;
    top: 5px;
    padding: 3px 15px;
    color: var(--gen-orange);
    border: 1px solid var(--gen-orange);
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}
</style>
</head>

<body>
    <button id="IdentifyAccordionBtn" class="accordion active">Identify</button>
    <div class="accordion-panel">
        <center>
            <h2>TD Ticket</h2>
            <input type="text" id="IdenifySearchQuery" oninput="detectSearchQueryType(this.value, this.nextElementSibling.firstElementChild)" onenter="IdenifySearchButton" placeholder="Search Query..." style="width: 80%; max-width: 230px;">
            <p style="color: gray;">Searching as <span>...</span></p>
            <br>
            <button disabled id="IdenifySearchButton" onclick="conductIdenitySearch(_('IdenifySearchQuery'))">Search</button>
        </center>
        <br>
        <div id="peopleReultsList"></div>
        
    </div>

    <button id="AssistAccordionBtn" class="accordion">Assist</button>
    <div class="accordion-panel">
        <p>This is where we would have all the inpout fields where people can take their notes and select their KB.</p>
    </div>

    <button id="ReviewAccordionBtn" class="accordion">Review</button>
    <div class="accordion-panel">
        <p>This is where the analyst can review the ticket before submitting.</p>
    </div>

    <div id="loadingOverlay" style="display: none;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
            <div class="loader"></div>
        </div>
        <div id="loadingOverlay_closePopupBtn" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;">
            <button style="transform: translateY(80px); padding: 10px; border-radius: 5px; border: 1px solid var(--gen-orange); background-color: #d8d8d8; color: var(--gen-orange); cursor: pointer;" onclick="try{currentPopupWindow.close()}catch(e){}">Close Popup Window</button>
        </div>
    </div>

    <script>
let AccordianSections = Array.from(document.getElementsByClassName("accordion"));
const _ = (el) => document.getElementById(el);
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
// register input onenter
Array.from(document.querySelectorAll('*[onenter]')).forEach((el) => {
    el.addEventListener("keyup", (e) => {
        console.log(e.keyCode);
        
        if (e.keyCode === 13) {
            _(el.getAttribute('onenter')).click();
        }
    });
})

function detectSearchQueryType(inVal, outputSpan) {
    inVal = inVal.trim().toLowerCase();
    if (inVal == '') {
        outputSpan.innerText = '...';
        _('IdenifySearchButton').disabled = true;
        _('IdenifySearchQuery').setAttribute('Q-type', 'X');
    }
    // if inVal is an I-number
    else if (inVal.length == 9 && !isNaN(inVal)) {
        outputSpan.innerText = 'I-Number';
        _('IdenifySearchButton').disabled = false;
        _('IdenifySearchQuery').setAttribute('Q-type', 'I#');
    }
    // if inVal starts with + and has only numbers, parenthesis, hyphens, and spaces
    else if (inVal.startsWith('+') && inVal.match(/^[+0-9()-\\s]*$/)) {
        outputSpan.innerText = 'Phone Number';
        _('IdenifySearchButton').disabled = false;
        _('IdenifySearchQuery').setAttribute('Q-type', 'PHONE');
    }
    // if inval is a name
    else {
        outputSpan.innerText = 'Name';
        _('IdenifySearchButton').disabled = false;
        _('IdenifySearchQuery').setAttribute('Q-type', 'NAME');
    }
}
function showLoader(yesOrNo) {
    _('loadingOverlay').style.display = yesOrNo ? null : 'none';
}

async function conductIdenitySearch(el) {
    let q = el.value;
    let t = el.getAttribute('Q-type');
    if (q.trim() == '' || t == 'X') return;

    showLoader(true);

    await new Promise(r => setTimeout(r, 500));
    
    showLoader(false);

    exampleResults = [
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM']
    ];

    // display Results
    const peopleReultsList = _('peopleReultsList');
    peopleReultsList.innerHTML = '';
    exampleResults.forEach((result) => {
        let personCard = document.createElement('div');
        personCard.className = 'personCard';
        personCard.innerHTML = \`
            <h3 onclick="openPersonDetails('\`+result[0]+\`')">\`+result[1]+\`</h3>
            <p>\`+result[2]+\`</p>
            <p>\`+result[3]+\`</p>
            <button onclick="selectPersonAndStartTicket('\`+result[0]+\`')"><div style="width: 30px; height: 100%; display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="var(--gen-orange)"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"/></svg></div></button>
        \`;
        peopleReultsList.appendChild(personCard);
    });
}
let currentPopupWindow = null;
async function openPersonDetails(U_identifier) {
    const popupWidth = 800;
    const popupHeight = 760;
    const left = (screen.width - popupWidth) / 2;
    const top = (screen.height - popupHeight) / 2;
    currentPopupWindow = window.open('https://td.byui.edu/TDNext/Apps/People/PersonDet.aspx?U=' + U_identifier, 'PersonDetails', 'width='+popupWidth+',height='+popupHeight+',top='+top+',left='+left);
}

function selectPersonAndStartTicket(U_identifier) {
    alert('Person selected: ' + U_identifier);
    _('AssistAccordionBtn').setActive();
}
</script>
</body>

</html>`;