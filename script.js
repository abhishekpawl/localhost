document.getElementById('port-btn').addEventListener('click', () => {
    var port = document.getElementById('port').value;

    if (port) {
        window.open(`http://127.0.0.1:${port}`);
    }
})