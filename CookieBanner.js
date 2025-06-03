// Cookie banner tonen als nog niet geaccepteerd
document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const declineBtn = document.getElementById('cookie-decline');
  if (!banner || !acceptBtn || !declineBtn) return;

  // Toon banner als NIET geaccepteerd
  if (!localStorage.getItem('cookieAccepted')) {
    banner.style.display = 'block';
  }

  acceptBtn.onclick = function () {
    localStorage.setItem('cookieAccepted', 'true');
    banner.style.display = 'none';
  };

  declineBtn.onclick = function () {
    // Verwijder eventuele eerdere weigering zodat de banner blijft terugkomen
    localStorage.removeItem('cookieAccepted');
    banner.style.display = 'none';
  };
});