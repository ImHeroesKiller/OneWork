document.addEventListener("DOMContentLoaded", function() {
    displayElementInfo();
});

function displayElementInfo() {
    const elements = document.querySelectorAll("input, button, a");
    let infoText = "Element IDs and their descriptions:\n";

    elements.forEach(element => {
        infoText += `ID: ${element.id}, Type: ${element.tagName}, Description: ${element.innerText || element.placeholder}\n`;
    });

    document.getElementById("info").innerText = infoText;
}

function clickButton(buttonId) {
    alert(`Button with ID ${buttonId} clicked`);
}

function clickLink(linkId) {
    alert(`Link with ID ${linkId} clicked`);
}

function fillField(fieldId, text) {
    document.getElementById(fieldId).value = text;
}
