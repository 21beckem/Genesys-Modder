HTMLCollection.prototype.forEach = Array.from(this).forEach;
let TdTicketFrames = [];
let knownInteractions = [];
let selectedInteraction = '';
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

// add sidebar and ticket button
const sidebar = document.querySelector('UL.navigation-action-bar');
let newLiBtn = document.createElement('LI');
newLiBtn.classList.add('action-item');
newLiBtn.style.overflow = 'hidden';
newLiBtn.innerHTML = `$$sidebarBtn.html$$`;
sidebar.insertBefore(newLiBtn, sidebar.querySelector('LI.spacer'));
TicketBtn.innerHTML = `$$button.html$$`;

// add ticket panel parent DIV
TicketBody.style.overflow = 'hidden';
const InteractionNoteTextarea = document.getElementById('interaction-notes');
const NewTicketPanelBodySwitcher = document.createElement('DIV');
NewTicketPanelBodySwitcher.id = 'NewTicketPanelBodySwitcher';
NewTicketPanelBodySwitcher.style.cssText = 'width: 100%; height: 100%; border: none';
TicketBody.children.forEach((child) => {
    if (child != InteractionNoteTextarea) {
        child.remove();
    }
})
TicketBody.insertBefore(NewTicketPanelBodySwitcher, InteractionNoteTextarea);

/////////////////////////////////////////////////////////
//        Start Detecting Interaction Changes          //
/////////////////////////////////////////////////////////

// wait for interactions to load
while ( !document.querySelectorAll('.interactions.chat-container .interactions') ) {
    await new Promise(r => requestAnimationFrame(r));
}
// wait a little longer just to be sure.
await new Promise(r => setTimeout(r, 2000));

const interactionsList = document.querySelector('.interactions.chat-container .interactions');
interactionsList.countInteractions = () => {
    count = 0;
    interactionsList.children.forEach((child) => {
        count += (interactionsList.children[0].className.includes('no-interactions')) ? 0 : 1;
    });
    return count;
}

if (interactionsList.countInteractions() > 0) {
    // create ticket panels for those now
    compareInteractionListToTickets();
}

// make an observer to detect new interactions
let previousAmountOfInteractions = interactionsList.countInteractions();
const InteractionsObserver = new MutationObserver((mutationsList, observer) => {
    let newInteractions = interactionsList.countInteractions();
    if (newInteractions != previousAmountOfInteractions) {
        // A child node has been added or removed.
        previousAmountOfInteractions = newInteractions;
        setTimeout(compareInteractionListToTickets, 200);
    } else {
        // if not, still compare selected interaction
        compareSelectedInteraction();
    }

});
InteractionsObserver.observe(interactionsList, { attributes: false, childList: true, subtree: false, characterData: false });

function compareSelectedInteraction() {
    interactionsList.children.forEach((child) => {
        if (child.className.includes('selected') && child.id != selectedInteraction) {
            alert('New Selected Interaction: ' + child.id);
            selectedInteraction = child.id;
        }
    });
}

function compareInteractionListToTickets() {
    let tempKnownInteractions = [...knownInteractions];
    let newKnownInteractions = [];
    interactionsList.children.forEach((child) => {
        if (child.className.includes('no-interactions')) return;
        newKnownInteractions.push(child.id);

        if (tempKnownInteractions.includes(child.id)) {
            tempKnownInteractions.splice(tempKnownInteractions.indexOf(child.id), 1);
        } else {
            alert('New interaction: ' + child.id);
            selectedInteraction = child.id;
            knownInteractions.push(child.id);
        }
        
        if (child.className.includes('selected') && child.id != selectedInteraction) {
            alert('New Selected Interaction: ' + child.id);
            selectedInteraction = child.id;
        }
    });
    if (tempKnownInteractions.length > 0) {
        alert('Removed interaction: ' + tempKnownInteractions.join(', '));
    }
    knownInteractions = newKnownInteractions;
}

})();