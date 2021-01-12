(async () => {
    if (self == top) return;
    let height = 0;
    setInterval(() => {
        let newHeight = document.documentElement.offsetHeight;
        if (height != newHeight) {
            height = newHeight;
            window.parent.postMessage({
                height
            }, '*');
        };
    }, 100);
})()