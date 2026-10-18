let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// إظهار الشريحة المحددة
function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // إخفاء كل الشرائح وتغيير النقاط النشطة
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// التحكم بالأسهم
prevBtn.addEventListener('click', () => {
    showSlide(currentSlideIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentSlideIndex + 1);
});

// التحكم بالنقاط
function currentSlide(index) {
    showSlide(index);
}

// التمرير الأوتوماتيكي للسلايدر كل 5 ثوانٍ
setInterval(() => {
    showSlide(currentSlideIndex + 1);
}, 5000);
