window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-ready");

  const currentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";

  document.querySelectorAll(".navbar a").forEach((link) => {
    const linkPage = link.getAttribute("href")?.split("#")[0].toLowerCase();

    if (linkPage && linkPage === currentPage) {
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#") || link.target === "_blank") {
        return;
      }

      const nextUrl = new URL(href, window.location.href);

      if (nextUrl.origin !== window.location.origin || nextUrl.pathname === window.location.pathname && nextUrl.hash) {
        return;
      }

      event.preventDefault();
      document.body.classList.add("page-leaving");
      window.setTimeout(() => {
        window.location.href = nextUrl.href;
      }, 180);
    });
  });
});
