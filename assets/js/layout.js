window.HTMLLabLayout = (() => {
  const rootPath = document.body.dataset.root || "";
  const pages = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "materi", label: "Materi", href: "materi.html" },
    { id: "quiz", label: "Quiz", href: "quiz.html" },
    { id: "debugging", label: "Debugging", href: "debugging.html" },
    { id: "recall", label: "Recall", href: "recall.html" },
    { id: "editor", label: "Editor", href: "editor.html" },
    { id: "projects", label: "Project", href: "projects.html" },
    { id: "progress", label: "Progress", href: "progress.html" }
  ];

  const renderNav = () => {
    const target = document.getElementById("appNav");
    if (!target) return;
    const active = document.body.dataset.page || "home";
    target.innerHTML = `
      <nav class="navbar navbar-expand-lg app-navbar sticky-top">
        <div class="container">
          <a class="navbar-brand" href="${rootPath}index.html" aria-label="HTML Beginner Lab">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 72 72" role="img" focusable="false">
                <rect x="8" y="12" width="56" height="52" rx="10" fill="#ffd7b7" opacity="0.8" />
                <rect x="8" y="8" width="56" height="52" rx="10" fill="#ffffff" />
                <path d="M8 18C8 12.48 12.48 8 18 8H54C59.52 8 64 12.48 64 18V24H8V18Z" fill="#1b2733" />
                <circle cx="18" cy="16" r="3.1" fill="#ff4b22" />
                <circle cx="27" cy="16" r="3.1" fill="#ffc21a" />
                <circle cx="36" cy="16" r="3.1" fill="#f7f9fc" />
                <path d="M29 36L21 44L29 52" fill="none" stroke="#ff4b0b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M43 36L51 44L43 52" fill="none" stroke="#ff4b0b" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M39.5 33L32.5 55" fill="none" stroke="#ff4b0b" stroke-width="6" stroke-linecap="round" />
              </svg>
            </span>
            <span class="brand-text">
              <strong>HTML Beginner Lab</strong>
              <small>Belajar dari nol</small>
            </span>
          </a>

          <div class="nav-actions d-flex align-items-center gap-2 order-lg-3">
            <button class="icon-btn" type="button" id="darkModeToggle" aria-label="Aktifkan mode gelap">
              <i class="bi bi-moon-stars-fill"></i>
            </button>
            <button class="navbar-toggler icon-btn" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Buka menu">
              <i class="bi bi-list"></i>
            </button>
          </div>

          <div class="collapse navbar-collapse order-lg-2" id="mainNav">
            <ul class="navbar-nav ms-lg-auto gap-lg-1">
              ${pages
                .map(
                  (page) => `
                    <li class="nav-item">
                      <a class="nav-link ${active === page.id ? "active" : ""}" href="${rootPath}${page.href}">${page.label}</a>
                    </li>`
                )
                .join("")}
            </ul>
          </div>
        </div>
      </nav>`;
  };

  const renderFooter = () => {
    const target = document.getElementById("appFooter");
    if (!target) return;
    target.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="d-flex flex-column flex-lg-row justify-content-between gap-2">
            <span>HTML Beginner Lab - project belajar HTML interaktif.</span>
            <span>Style belajar terinspirasi dari <a href="https://miftahulanam95.github.io/Belajar-Laravel/" target="_blank" rel="noopener noreferrer">Belajar Laravel</a></span>
          </div>
        </div>
      </footer>`;
  };

  const renderToast = () => {
    const target = document.getElementById("appToast");
    if (!target) return;
    target.innerHTML = `
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast app-toast" id="appToastElement" role="status" aria-live="polite" aria-atomic="true">
          <div class="toast-body d-flex align-items-center gap-2">
            <i class="bi bi-check-circle-fill"></i>
            <span id="toastMessage">Tersimpan.</span>
          </div>
        </div>
      </div>`;
  };

  const init = () => {
    renderNav();
    renderFooter();
    renderToast();
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", window.HTMLLabLayout.init);
