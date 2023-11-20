document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    let slideIndex = 0;

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // إضافة نقاط لكل شريحة
    for (let i = 0; i < slider.children.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', function() {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }

    function nextSlide() {
        if (slideIndex < slider.children.length - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        updateSlider();
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = slider.children.length - 1;
        }
        updateSlider();
    }

    function goToSlide(index) {
        slideIndex = index;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -slideIndex * 100;
        slider.style.transform = `translateX(${translateValue}%)`;

        // تحديث حالة النقاط
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active-dot', index === slideIndex);
        });
    }

    function autoSlide() {
        nextSlide();
        setTimeout(autoSlide, 2200); // التحرك كل 10 ثوانٍ
    }

    // Uncomment the line below to enable automatic sliding
    autoSlide();
});
