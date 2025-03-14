(async function() {

// wait for page to load
while ( !document.querySelector('DIV.interaction-controls  DIV[role=tablist] BUTTON[aria-label=Notes]') || !document.querySelector('DIV.notes-body:has( textarea#interaction-notes)') ) {
    await new Promise(r => requestAnimationFrame(r));
}
// wait a little longer just to be sure.
await new Promise(r => setTimeout(r, 1000));

const TicketBtn = document.querySelector('DIV.interaction-controls  DIV[role=tablist] BUTTON[aria-label=Notes]')
const TicketBody = document.querySelector('DIV.notes-body:has( textarea#interaction-notes)')

if (!TicketBtn) {
    alert("There was an error finding the button to overwrite. Please try again.");
}
if (!TicketBody) {
    alert("There was an error finding the panel to overwrite. Please try again.");
}

// confirm before page refresh because you'll lose ticket progress.
window.onbeforeunload = function(event) {
    return "Are you sure you want to refresh the page?";
};

const sidebar = document.querySelector('UL.navigation-action-bar');
let newLiBtn = document.createElement('LI');
newLiBtn.classList.add('action-item');
newLiBtn.style.overflow = 'hidden';
newLiBtn.innerHTML = `$$sidebarBtn.html$$`;
sidebar.insertBefore(newLiBtn, sidebar.querySelector('LI.spacer'));

TicketBody.style.overflow = 'hidden';
TicketBtn.innerHTML = `$$button.html$$`;
TicketBody.innerHTML = `
    <div id="NewTicketPanelBodySwitcher" style="width: 100%; height: 100%; border: none"></div>
    <textarea style="display: none; opacity: 0; pointer-events: none" id="interaction-notes" dir="auto" placeholder="Type your notes here (no personal data)..." aria-label="Notes"></textarea>
`;

const NewTicketPanelBodySwitcher = document.getElementById('NewTicketPanelBodySwitcher');

const InteractionNoteTextarea = document.getElementById('interaction-notes');
let previousInteractionNotesValue = null;
let letChangesBeTracked = true;
let checkChanges = setInterval(() => {
    if (previousInteractionNotesValue !== InteractionNoteTextarea.value) {
        previousInteractionNotesValue = InteractionNoteTextarea.value;
        
        chatUpdate(previousInteractionNotesValue);
    }
}, 250);
function updateInteractionNotes(newVal) {
    console.log('setting interaction notes to: ' + newVal);
    letChangesBeTracked = false;
    previousInteractionNotesValue = newVal;
    InteractionNoteTextarea.value = newVal;
    letChangesBeTracked = true;
}
panels = [];
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
function chatUpdate(textareaVal) {
    if (!isJsonString(textareaVal)) { // this is a new conversation that hasn't been used yet
        // create new JSON with a unique ID for this conversation
        newUid = Math.random().toString(36).substring(2, length + 2);
        let newJSON = {
            uid: newUid,
            IdentifyTab: {
                selected_id: '',
                searchQuery: '',
                results: []
            }
        }
        // create new window
        NewTicketPanelBodySwitcher.innerHTML += '<iframe id="TicketFrame_'+newUid+'" style="width: 100%; height: 100%; border: none"></iframe>';
        let thisNewIframe = document.getElementById('TicketFrame_'+newUid);
        thisNewIframe.srcdoc = `$$index.html$$`;
        panels.push(thisNewIframe);

        // update interaction notes
        updateInteractionNotes(JSON.stringify(newJSON));
    }

    // parse the JSON
    let parsedJSON = JSON.parse(textareaVal);
    console.log(parsedJSON);

    // show the right panel
    panels.array.forEach(el => el.style.display = 'none');
    document.getElementById('TicketFrame_' + parsedJSON.uid).style.display = 'block';
}

})();