document.addEventListener("DOMContentLoaded", () => {
    // تحديد جميع بطاقات العدادات
    const ebatc1_cards = document.querySelectorAll(".ebatc1-orb-card");

    // إعدادات المراقب (يعمل عندما يظهر 30% من العنصر في الشاشة)
    const ebatc1_observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3
    };

    // إنشاء المراقب
    const ebatc1_statsObserver = new IntersectionObserver((ebatc1_entries, ebatc1_observer) => {
        ebatc1_entries.forEach(ebatc1_entry => {
            if (ebatc1_entry.isIntersecting) {
                const ebatc1_card = ebatc1_entry.target;
                
                // 1. تشغيل أنيميشن الدائرة الملونة
                ebatc1_card.classList.add("ebatc1-is-animated");

                // 2. تشغيل أنيميشن الأرقام
                const ebatc1_valueEl = ebatc1_card.querySelector(".ebatc1-orb-value");
                const ebatc1_targetNum = parseInt(ebatc1_valueEl.getAttribute("data-ebatc1-target"));
                
                ebatc1_animateCounter(ebatc1_valueEl, 0, ebatc1_targetNum, 1500);

                // إيقاف مراقبة هذا العنصر بعد تشغيله مرة واحدة
                ebatc1_observer.unobserve(ebatc1_card);
            }
        });
    }, ebatc1_observerOptions);

    // تفعيل المراقبة لكل بطاقة
    ebatc1_cards.forEach(ebatc1_card => {
        ebatc1_statsObserver.observe(ebatc1_card);
    });

    // دالة عد الأرقام بسلاسة باستخدام requestAnimationFrame
    function ebatc1_animateCounter(ebatc1_element, ebatc1_start, ebatc1_end, ebatc1_duration) {
        let ebatc1_startTime = null;

        const ebatc1_step = (ebatc1_currentTime) => {
            if (!ebatc1_startTime) ebatc1_startTime = ebatc1_currentTime;
            const ebatc1_progressTime = Math.min((ebatc1_currentTime - ebatc1_startTime) / ebatc1_duration, 1);
            
            // حساب الرقم الحالي وإضافته للنص
            ebatc1_element.textContent = Math.floor(ebatc1_progressTime * (ebatc1_end - ebatc1_start) + ebatc1_start);
            
            // الاستمرار حتى ينتهي الوقت
            if (ebatc1_progressTime < 1) {
                window.requestAnimationFrame(ebatc1_step);
            } else {
                ebatc1_element.textContent ="+" + ebatc1_end; // ضمان الوصول للرقم الدقيق النهائي
            }
        };
        
        window.requestAnimationFrame(ebatc1_step);
    }
});