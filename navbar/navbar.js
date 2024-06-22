document.addEventListener('DOMContentLoaded', () => {
    const animatedDiv = document.getElementById("animatedDiv");
    const colorNav = document.getElementById("colorNav");

    const changeHeight = () => {
        const scrollVal = window.pageYOffset;
        const newHeight = Math.max(7, 15 - scrollVal * 0.1); // Reduce height by 10% of scroll position
        animatedDiv.style.height = newHeight + "vh";

        // Change navbar background color to blue when height changes
        if (newHeight <= 7) {
            animatedDiv.style.borderBottom = '1px solid red';
        } else {
            animatedDiv.style.borderBottom = '';
        }
    }

    const handleScroll = () => {
        requestAnimationFrame(changeHeight);
    };

    window.addEventListener('scroll', handleScroll);
});
