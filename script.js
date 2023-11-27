/**
 * Handles the click event when the cell is clicked.
 * @param {Event} event - The click event.
 */
function handleClick(event) {
    cell.focus();
}

/**
 * Handles the input event when the cell content is changed.
 * @param {Event} event - The input event.
 */
function handleInput(event) {
    // You can access the cell's content with cell.textContent
    console.log('Cell content changed:', cell.textContent);
}

/**
 * Handles the blur event when the cell loses focus.
 * @param {Event} event - The blur event.
 */
function handleBlur(event) {
    // Perform any necessary actions when the cell loses focus
}

const cell = document.querySelector('.cell');

// Event listener to detect when the cell is clicked
cell.addEventListener('click', handleClick);

// Event listener to detect when the cell content is changed
cell.addEventListener('input', handleInput);

// Event listener to detect when the cell loses focus
cell.addEventListener('blur', handleBlur);
