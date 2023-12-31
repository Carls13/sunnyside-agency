const triangle = document.getElementById('triangle');
const burger = document.getElementById('burger-menu');
const headerOptions = document.getElementById('header-options');
const contact = document.getElementById('contact');

burger.addEventListener('click', () => {
    triangle.classList.toggle('show-menu');
    headerOptions.classList.toggle('show-menu');
});

contact.addEventListener('click', () => {
    window.location.href = 'https://carlosshb.com/contact';
});