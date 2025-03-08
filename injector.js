const TicketBtn = document.querySelector('DIV.interaction-controls  DIV[role=tablist] BUTTON[aria-label=Notes]')
const TicketBody = document.querySelector('DIV.notes-body:has( textarea#interaction-notes)')

if (!TicketBtn) {
    alert("There was an error finding the button to overwrite. Please try again.");
}
if (!TicketBody) {
    alert("There was an error finding the panel to overwrite. Please try again.");
}

TicketBtn.innerHTML = `$$button.html$$`;
TicketBody.innerHTML = `<iframe id="iframeForNewTicketPanel" style="width: 100%; height: 100%; border: none"></iframe>`;

document.getElementById('iframeForNewTicketPanel').srcdoc = `$$index.html$$`;