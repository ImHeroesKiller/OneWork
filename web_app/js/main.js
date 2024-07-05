function getMousePosition() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    document.getElementById('position').innerText = `Current mouse position: (${x}, ${y})`;
}

function clickAtPosition() {
    const x = document.getElementById('x').value;
    const y = document.getElementById('y').value;
    alert(`Simulating click at (${x}, ${y})`);
}

function writeText() {
    const text = document.getElementById('text').value;
    alert(`Simulating writing text: ${text}`);
}

