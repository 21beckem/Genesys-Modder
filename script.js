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
    else if (inVal.startsWith('+') && inVal.match(/^[+0-9()-\s]*$/)) {
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
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['020bfd25-06c8-ee11-9f01-c89665346b33', 'Michael Becker', 'bec24007@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM'],
        ['bae72298-d6bb-ec11-997e-c89665346b33', 'Aleah Clyde', 'cly22001@byui.edu', 'BYUI', '', 'OnCampusStudent', 'Yes', 'User', '', 'Sat 2/10/24 4:18 AM']
    ];

    // display Results
    const peopleReultsList = _('peopleReultsList');
    peopleReultsList.innerHTML = '';
    exampleResults.forEach((result) => {
        let personCard = document.createElement('div');
        personCard.className = 'personCard';
        personCard.innerHTML = `
            <h3 onclick="openPersonDetails('`+result[0]+`')">`+result[1]+`</h3>
            <p>`+result[2]+`</p>
            <p>`+result[3]+`</p>
            <button onclick="selectPersonAndStartTicket('`+result[0]+`')"><div style="width: 30px; height: 100%; display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="var(--gen-orange)"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 64C28.7 64 0 92.7 0 128l0 64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6l0-64c0-35.3-28.7-64-64-64L64 64zm64 112l0 160c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16l-288 0c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32l320 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-320 0c-17.7 0-32-14.3-32-32l0-192z"/></svg></div></button>
        `;
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
    _('AssistAccordionBtn').setActive();
}