document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('footer');
    if (footer) {
      const versionInfo = document.createElement('p');
      versionInfo.className = 'version-info';
      versionInfo.textContent = 'Version: 1.0.1 | Deployed: 2025-08-15';
      footer.appendChild(versionInfo);
    }
  });