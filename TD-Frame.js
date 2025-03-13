(function() {
    const getElementsByText = (str, tag) => {
        tag = (tag) ? tag : 'button';
        return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
    }
    window.addEventListener("message", async function(event) {
        const { action, inputPlaceholder, requestId, valueToSet } = event.data;
        let response = { requestId, success: true };

        // try {
        switch (action) {
            case 'getInput':
                response.data = document.querySelector('input[placeholder="'+inputPlaceholder+'"]').value;
                break;
            case 'click':
                getElementsByText(inputPlaceholder, valueToSet)[0].click();
                response.data = true;
                break;
            case 'setInput':
                document.querySelector('input[placeholder="'+inputPlaceholder+'"]').value = String(valueToSet);
                response.data = true;
                break;
            case 'waitForLoad':
                while ( document.querySelector('.k-loading-mask, .loading-mask') ) {
                    await new Promise(r => requestAnimationFrame(r));
                }
                response.data = true;
                break;
            default:
                response.success = false;
                response.error = 'Unknown action';
        }
        // } catch (error) {
        //     response.success = false;
        //     response.error = error.message;
        // }

        window.parent.postMessage(response, "*");
    });

    console.log('Iframe messaging script injected and running.');
})();

// Inject above code into iframe with TD
//////////////////////////////////////////////////////////////////////////////////////
// <iframe src="link-to-TD-ticket" height="400" width="400" id="myFrame"></iframe>


// example use running from parent window
const myFrame = document.querySelector('iframe');
await sendMessageToIframe(myFrame, 'setInput', 'Enter Requestor I-Number', '099346149');
await sendMessageToIframe(myFrame, 'click', 'Search');
console.log('Searching for requestor with I-Number: 099346149.');
await sendMessageToIframe(myFrame, 'waitForLoad', '');
console.log('Finished waiting for the page to finish loading.');

//////////////////////////////////////////////////////////////////////////////////////
// include below code in parent window to use with example code above
function sendMessageToIframe(iframe, action, inputPlaceholder, valueToSet=null) {
    return new Promise((resolve, reject) => {
        const requestId = Math.random().toString(36).substr(2, 9);

        let handleMessage = (event) => {
            if (!event.data || event.data.requestId !== requestId) return;

            window.removeEventListener("message", handleMessage);
            event.data.success ? resolve(event.data.data) : reject(event.data.error);
        }

        window.addEventListener("message", handleMessage);
        if (valueToSet != null) valueToSet = String(valueToSet);
        iframe.contentWindow.postMessage({ action, inputPlaceholder, requestId, valueToSet }, "*");
    });
}