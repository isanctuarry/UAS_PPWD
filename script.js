// Gallery Modal

const galleryImages = document.querySelectorAll('.gallery-grid img');
const modal = document.createElement('div');
modal.className = 'image-modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <img class="modal-image" src="" alt="">
    </div>
`;
document.body.appendChild(modal);

const modalImage = modal.querySelector('.modal-image');
const closeModal = modal.querySelector('.close-modal');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src;
        modal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
});

// Scroll Reveal

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < triggerBottom) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    setTimeout(revealOnScroll, 120);
});


