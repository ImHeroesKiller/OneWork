function analyzeWebsite() {
    const url = document.getElementById('url').value;
    if (!url) {
        alert('Please enter a website URL.');
        return;
    }
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            displayElementInfo(doc);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to fetch the website. Please check the URL.');
        });
}

function displayElementInfo(doc) {
    const elementsInfo = document.getElementById('elementsInfo');
    elementsInfo.innerHTML = '';

    const elements = doc.querySelectorAll('input, button, a');
    let infoText = '<h2>Detected Elements</h2><ul>';

    elements.forEach(element => {
        infoText += `<li>ID: ${element.id || 'N/A'}, Type: ${element.tagName}, Text/Placeholder: ${element.innerText || element.placeholder}</li>`;
    });

    infoText += '</ul>';
    elementsInfo.innerHTML = infoText;

    document.getElementById('automationSection').style.display = 'block';
}

function startAutomation() {
    const fieldId = document.getElementById('fieldId').value;
    const text = document.getElementById('text').value;
    const interval = document.getElementById('interval').value;

    if (!fieldId || !text) {
        alert('Please fill in all automation settings.');
        return;
    }

    setInterval(() => {
        fillField(fieldId, text);
    }, interval * 1000);
}

function fillField(fieldId, text) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.value = text;
    } else {
        console.error(`Field with ID ${fieldId} not found.`);
    }
}
