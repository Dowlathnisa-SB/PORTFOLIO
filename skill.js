// script.js
document.addEventListener("DOMContentLoaded", function() {
    const skills = [
        { name: "Communication", percent: 85 },
        { name: "Leadership", percent: 80 },
        { name: "Time Management", percent: 90 },
        { name: "Adaptability", percent: 89 }
    ];

    const progressContainers = document.querySelectorAll('.progress-container');
    
    function setProgress(container, percent) {
        const progressCircle = container.querySelector('.progress');
        const progressText = container.querySelector('.progress-text');
        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;

        const offset = circumference - (percent / 100 * circumference);
        progressCircle.style.strokeDashoffset = offset;
        progressText.textContent = `${percent}%`;
    }

    progressContainers.forEach((container, index) => {
        let progress = 0;
        const targetPercent = skills[index].percent;
        const interval = setInterval(() => {
            if (progress <= targetPercent) {
                setProgress(container, progress);
                progress++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    });
});
