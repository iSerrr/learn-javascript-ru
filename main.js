document.addEventListener('click', (event) => {
    if (event.target.dataset.close = undefined) return;
    event.target.closest('div').hidden = true;
});

