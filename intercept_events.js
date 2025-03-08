let previousInteractionNotesValue = null;
let checkChanges = setInterval(() => {
    if (previousInteractionNotesValue !== document.getElementById('interaction-notes').value) {
        previousInteractionNotesValue = document.getElementById('interaction-notes').value;
        alert('change detected!');
    }
}, 250);

// Use the function above to detect changes in the interaction notes.
// Store all the information for the ticket in a json which can be stringified and put in the interaction-notes.

// change the function above to detect if the interaction contain text that can be parsed as json.
    // if not, that means it's a new conversation so create a blank ticket JSON
    // if it is, then parse the json and update the ticket fields

// When any changes are made to the ticket fields, update the interaction-notes JSON.

// somehow need to make sure that I don't create a loop by updating the interaction-notes JSON which will regenerate the ticket fields, which would update the JSON, etc.