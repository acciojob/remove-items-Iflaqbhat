//your JS code here. If required.
document.getElementById("colorSelect").nextElementSibling.onclick = function() {
    const colorSelect = document.getElementById("colorSelect");
    const selectedIndex = colorSelect.selectedIndex;

    // Display the selected color in the console
    if (selectedIndex !== -1) {
        const selectedColor = colorSelect.options[selectedIndex].text;
        console.log(`Selected Color: ${selectedColor}`);

        // Remove the selected option
        colorSelect.remove(selectedIndex);
    }
};
