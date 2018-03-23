addEventListener("connect", onConnect, false);

function onConnect(e) {
    let port = e.ports[0];

    port.addEventListener("message", function (e) {
        let a = e.data.opt1;
        let b = e.data.opt1;

        let sum = a + b;
        postMessage(sum);
    }, false);

    port.start();
}