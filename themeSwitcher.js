window.addEventListener('load', function() {
    const themeStylesheet = document.getElementById('themeStylesheet');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeStylesheet.href = 'website_darkMode.css';
    } else {
        themeStylesheet.href = 'website_lightMode.css';
    }

    // Optional: Listen for changes in the user's preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            themeStylesheet.href = 'website_darkMode.css';
        } else {
            themeStylesheet.href = 'website_lightMode.css';
        }
    });
});
