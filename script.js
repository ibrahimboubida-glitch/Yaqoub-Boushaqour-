// رسالة ترحيبية تفاعلية تظهر في وحدة التحكم (Console) عند فتح الموقع
console.log("Welcome to WestGate Website - Created Successfully!");

// تأثير بسيط لتغيير نص الترحيب في الشريط المتحرك تلقائياً
document.addEventListener("DOMContentLoaded", () => {
    const tickerSpan = document.querySelector(".ticker span");
    const messages = [
        "✈️ أهلاً بك في عالم WestGate للسفر والهجرة وتسهيل الفيزا 🌍",
        "💡 نصائح حصرية لرحلات ذكية وتسهيل الإجراءات",
        "🚪 افتح باباً لمستقبلك الجديد معنا"
    ];
    
    let index = 0;
    setInterval(() => {
        index = (index + 1) % messages.length;
        tickerSpan.style.opacity = 0;
        setTimeout(() => {
            tickerSpan.textContent = messages[index];
            tickerSpan.style.opacity = 1;
        }, 300);
    }, 4000);
});

