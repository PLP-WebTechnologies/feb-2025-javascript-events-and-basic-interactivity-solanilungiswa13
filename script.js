// Button click to change text and color
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
colorBtn.textContent = 'Clicked!';
colorBtn.style.backgroundColor = colorBtn.style.backgroundColor === 'blue' ? 'gray' : 'blue';
});

// Image gallery
const slides = document.getElementById('slides');
const imgs = slides.querySelectorAll('img');
let currentSlide = 0;

document.getElementById('next').addEventListener('click', () => {
currentSlide = (currentSlide + 1) % imgs.length;
slides.style.transform = `translateX(-${currentSlide * 300}px)`;
});

document.getElementById('prev').addEventListener('click', () => {
currentSlide = (currentSlide - 1 + imgs.length) % imgs.length;
slides.style.transform = `translateX(-${currentSlide * 300}px)`;
});

// Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
header.addEventListener('click', () => {
const content = header.nextElementSibling;
if (content.style.display === 'block') {
content.style.display = 'none';
} else {
content.style.display = 'block';
}
});
});

// Form validation
const form = document.getElementById('myForm');
const formError = document.getElementById('formError');

form.addEventListener('submit', (e) => {
e.preventDefault();
const email = form.email.value;
const password = form.password.value;
let errors = [];

// Simple email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
errors.push('Invalid email format.');
}

if (password.length < 8) {
errors.push('Password must be at least 8 characters.');
}

if (errors.length > 0) {
formError.textContent = errors.join(' ');
} else {
formError.textContent = 'Form submitted successfully!';
}
});