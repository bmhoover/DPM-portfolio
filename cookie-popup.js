document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.getElementById('cookie-popup');
    const cookieOverlay = document.getElementById('cookie-popup-overlay');
    const acceptButton = document.getElementById('accept-cookies');

    // Show the popup when the page loads if the user hasn't accepted cookies
    if (document.cookie.indexOf('cookies_accepted=true') === -1) {
        cookiePopup.style.display = 'block';
        cookieOverlay.style.display = 'block';
    }

    // Hide the popup and set the cookie when the accept button is clicked
    acceptButton.addEventListener('click', function () {
        cookiePopup.style.display = 'none';
        cookieOverlay.style.display = 'none';

        // Set a cookie to remember the user's consent
        document.cookie = "cookies_accepted=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";

        // Redirect to the homepage
        window.location.href = "index.html";  // This will redirect to the homepage
    });

    // Check if the user has already accepted cookies and hide the popup
    if (document.cookie.indexOf('cookies_accepted=true') !== -1) {
        cookiePopup.style.display = 'none';
        cookieOverlay.style.display = 'none';
    }
});
