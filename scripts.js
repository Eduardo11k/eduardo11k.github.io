<script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support my work on Ko-fi', '#18448f', 'W7W719GL7S');kofiwidget2.draw();</script> 
document.addEventListener('DOMContentLoaded', function() {
    // GSAP animations
    gsap.from("header h1", {duration: 1, y: -50, opacity: 0, ease: "bounce"});
    gsap.from("header p", {duration: 1, y: 50, opacity: 0, ease: "power2.inOut", delay: 0.5});
    gsap.from("header a", {duration: 1, scale: 0, opacity: 0, ease: "back.out(1.7)", delay: 1});

    // Dark mode toggle
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
});
