function scrollToElement(elementSelector, instance = 0) {
    elementSelector.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.querySelector('.nav-logo a');

    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = logoLink.getAttribute('href');
            document.body.classList.add('page-exit');
            setTimeout(() => {
                window.location.href = destination;
            }, 300);
        });
    }

    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");

    link1.addEventListener('click', () => {
        scrollToElement('Skills');
    });

    link2.addEventListener('click', () => {
        // Scroll to the second element with "header" class
        scrollToElement('Projects');
    });

    link3.addEventListener('click', () => {
        scrollToElement('link3');
    });
});

function openInfoDialog(dialogId) {
    var dialog = document.getElementById(dialogId);
    dialog.style.display = 'block';
    document.body.classList.add('dialog-open');
}

  function closeInfoDialog(dialogId) {
    var dialog = document.getElementById(dialogId);
    dialog.style.display = 'none';
    document.body.classList.remove('dialog-open');
}