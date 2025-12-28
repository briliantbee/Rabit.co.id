export default (() => {
const carousel = document.getElementById('carousel');
    if (!carousel) return;

    const slides = Array.from(carousel.children);
    const indicators = Array.from(document.getElementById('indicators').children);
    let idx = 0;
    const total = slides.length;
    let autoplay = null;

    const update = (i) => {
        carousel.style.transform = 'translateX(' + (-i * 100) + '%)';
        slides.forEach((s, si) => s.setAttribute('aria-hidden', si === i ? 'false' : 'true'));
        indicators.forEach((dot, di) => {
            dot.classList.toggle('bg-white/60', di === i);
            dot.classList.toggle('bg-white/40', di !== i);
            dot.setAttribute('aria-selected', di === i ? 'true' : 'false');
        });
    };

    const next = () => { idx = (idx + 1) % total; update(idx); };
    const prev = () => { idx = (idx - 1 + total) % total; update(idx); };

    indicators.forEach((dot, i) => dot.addEventListener('click', () => {
        idx = i;
        update(idx);
        resetAutoplay();
    }));

    const startAutoplay = () => { if (!autoplay) autoplay = setInterval(next, 2000); };
    const stopAutoplay = () => { clearInterval(autoplay); autoplay = null; };
    const resetAutoplay = () => { stopAutoplay(); startAutoplay(); };

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    update(idx);
    startAutoplay();
})();
