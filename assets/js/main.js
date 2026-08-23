(function () {
  "use strict";

  const price = new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: SITE_CONFIG.currency,
    maximumFractionDigits: 0
  }).format(SITE_CONFIG.servicePrice);

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  }

  function setContactLinks() {
    document.querySelectorAll("[data-support-email]").forEach((node) => {
      node.textContent = SITE_CONFIG.supportEmail;
      node.href = `mailto:${SITE_CONFIG.supportEmail}`;
    });

    document.querySelectorAll("[data-support-phone]").forEach((node) => {
      node.textContent = SITE_CONFIG.supportPhone;
      node.href = SITE_CONFIG.whatsappUrl;
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    });

    document.querySelectorAll("[data-instagram]").forEach((node) => {
      node.href = SITE_CONFIG.instagramUrl;
      node.textContent = "Instagram: @bookmytestireland";
    });
  }

  function initFloatingSocialButtons() {
    const holder = document.createElement("div");
    holder.className = "floating-socials";
    holder.innerHTML = `
      <a class="social-floating-button instagram-floating" href="${SITE_CONFIG.instagramUrl}" target="_blank" rel="noopener noreferrer" aria-label="Visit BookMyTestIreland on Instagram">
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 2a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm4.9-2.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/>
        </svg>
      </a>
      <a class="social-floating-button whatsapp-floating" href="${SITE_CONFIG.whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Contact BookMyTestIreland on WhatsApp">
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M12.04 2A9.85 9.85 0 0 0 2.2 11.84c0 1.73.45 3.42 1.32 4.91L2 22l5.38-1.42a9.85 9.85 0 0 0 4.66 1.18h.01a9.88 9.88 0 0 0 0-19.76Zm0 17.76h-.01a7.82 7.82 0 0 1-3.99-1.09l-.29-.17-3.19.84.85-3.1-.19-.32a7.78 7.78 0 1 1 6.82 3.84Zm4.28-5.84c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.52.12-.16.23-.6.75-.74.9-.14.16-.27.17-.51.06-.23-.12-.99-.36-1.89-1.16-.7-.62-1.17-1.39-1.31-1.63-.14-.23-.01-.36.1-.48.11-.1.23-.27.35-.4.12-.14.16-.23.23-.39.08-.16.04-.29-.02-.41-.06-.12-.52-1.25-.72-1.71-.19-.45-.38-.39-.52-.4h-.45c-.16 0-.41.06-.62.29-.21.23-.82.8-.82 1.95s.84 2.26.95 2.42c.12.16 1.65 2.52 4 3.53.56.24.99.38 1.33.49.56.18 1.07.15 1.47.09.45-.07 1.38-.56 1.57-1.11.2-.54.2-1.01.14-1.11-.06-.1-.21-.16-.45-.28Z"/>
        </svg>
      </a>
    `;
    document.body.appendChild(holder);
  }

  function initPaymentButtons() {
    document.querySelectorAll("[data-payment-button]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const message = document.querySelector("[data-payment-message]");
        if (!SITE_CONFIG.razorpayPaymentUrl) {
          if (message) {
            message.textContent = "Secure online payment will be available shortly.";
            message.hidden = false;
            message.focus();
          } else {
            window.alert("Secure online payment will be available shortly.");
          }
          return;
        }
        window.location.assign(SITE_CONFIG.razorpayPaymentUrl);
      });
    });
  }

  function initMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#primary-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("is-open", !isOpen);
    });
  }

  function initHomepagePreloader() {
    const preloader = document.getElementById("page-preloader");
    if (!preloader) return;

    const hidePreloader = () => {
      window.setTimeout(() => {
        preloader.classList.add("hide");
        document.body.classList.remove("preloading");

        window.setTimeout(() => {
          preloader.remove();
        }, 400);
      }, 700);
    };

    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader, { once: true });
    }
  }

  function initYear() {
    setText("[data-current-year]", String(new Date().getFullYear()));
  }

  setText("[data-price]", price);
  setContactLinks();
  initPaymentButtons();
  initMenu();
  initHomepagePreloader();
  initFloatingSocialButtons();
  initYear();
})();
