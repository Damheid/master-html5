addEventListener("message", onMessage, false);

function onMessage(e) {
    let a = e.data.opt1;
    let b = e.data.opt1;

    let sum = a + b;
    postMessage(sum);
}