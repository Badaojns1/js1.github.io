// Function to handle mouseover event
function onMouseOver(event) {
    console.log('Mouse over');
    // Add your mouseover event handling code here
}

// Function to handle mouseleave event
function onMouseLeave(event) {
    console.log('Mouse leave');
    // Add your mouseleave event handling code here
}

// Function to handle focus event
function onFocus(event) {
    console.log('Focus');
    // Add your focus event handling code here
}

// Function to handle blur event
function onBlur(event) {
    console.log('Blur');
    // Add your blur event handling code here
}

// Function to add tabindex attribute to images
function addTabIndex() {
    var images = document.querySelectorAll('.preview');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

// Event listener for mouseover
document.getElementById("image").addEventListener('mouseover', onMouseOver);

// Event listener for mouseleave
document.getElementById("image").addEventListener('mouseleave', onMouseLeave);

// Event listener for focus
document.getElementById("image").addEventListener('focus', onFocus);

// Event listener for blur
document.getElementById("image").addEventListener('blur', onBlur);

// Event listener for onload
window.onload = function () {
    addTabIndex();
    console.log('Page loaded');
};