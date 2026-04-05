// src/utils.js

/**
 * Sanitizes a string by escaping HTML characters.
 * @param {string} str - The string to sanitize.
 * @returns {string} - The sanitized string.
 */
function sanitize(str) {
    const div = document.createElement('div');
    div.innerText = str;
    return div.innerHTML;
}

/**
 * Debounces a function to limit the number of times it can be called.
 * @param {function} func - The function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {function} - The debounced function.
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * Selects a DOM element using a selector string.
 * @param {string} selector - The selector string.
 * @returns {Element|null} - The selected element or null if not found.
 */
function selectElement(selector) {
    return document.querySelector(selector);
}

export { sanitize, debounce, selectElement };