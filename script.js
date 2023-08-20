document.addEventListener('DOMContentLoaded', function() {
    const emailButton = document.getElementById('emailButton');
    const aboutButton = document.getElementById('aboutButton');
    const myEmail = 'garrasterjr@gmail.com';

    emailButton.addEventListener('click', () => {
        const mailtoLink = `mailto:${myEmail}`;
        window.location.href = mailtoLink;
    });
    aboutButton.addEventListener('click', () => {
        window.location.href = 'sobre.html';
    });
});