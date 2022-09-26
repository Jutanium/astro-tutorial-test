document.getElementById('toggler').addEventListener('change', (event) => {
    event.target.checked
        ? document.body.setAttribute('data-theme', 'dark')
        : document.body.removeAttribute('data-theme')
});