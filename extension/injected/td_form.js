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

    console.log('TD-Form script injected and running.');
})();