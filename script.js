
    const slides = document.querySelectorAll('.slide');
let index = 0;

function fadeContent() {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
        slide.querySelector('.text').style.opacity = i === index ? '1' : '0';
    });

    index = (index + 1) % slides.length;
}

setInterval(fadeContent, 4000); 

//theme//
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Under Construction Overlay
const overlay = document.getElementById('under-construction-overlay');
const continueBtn = document.getElementById('continue-button');

function hideOverlay() {
  overlay.style.display = 'none';
}

continueBtn.addEventListener('click', hideOverlay);

// Auto hide after 5 seconds if user doesn't click
setTimeout(hideOverlay, 3000);

// projects



  
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  });

  document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.closest('.article-content');
      content.classList.toggle('expanded');

      button.textContent = content.classList.contains('expanded') 
        ? "Show Less" 
        : "Read More";
    });
  });

  let currentIndex = 0;
  const articles = document.querySelectorAll('.article-card');

  function slideArticles(direction) {
    articles[currentIndex].style.display = "none";
    currentIndex = (currentIndex + direction + articles.length) % articles.length;
    articles[currentIndex].style.display = "block";
  }

  // Initial display setup
  articles.forEach((card, index) => {
    card.style.display = index === 0 ? "block" : "none";
  });



  document.addEventListener('DOMContentLoaded', () => {
    // Activity toggle
    const toggleBtn = document.getElementById('toggleBtn');
    const extraActivities = document.getElementById('extraActivities');

    if (toggleBtn && extraActivities) {
      let isVisible = false;
      toggleBtn.addEventListener('click', () => {
        isVisible = !isVisible;
        extraActivities.style.display = isVisible ? 'block' : 'none';
        toggleBtn.textContent = isVisible ? 'Show less' : 'Learn more';
      });
    }

    // WhatsApp Chat Popup
    const popup = document.getElementById('whatsappPopup');
    const icon = document.getElementById('whatsappIcon');

    if (popup && icon) {
      // Show popup after page load
      popup.style.display = 'flex';

      // Expose toggleChat globally if needed in inline HTML
      window.toggleChat = function () {
        if (popup.style.display === 'none') {
          popup.style.display = 'flex';
          icon.style.display = 'none';
        } else {
          popup.style.display = 'none';
          icon.style.display = 'flex';
        }
      };
    }

    // Expose sendWhatsAppMessage globally if needed in inline HTML
    window.sendWhatsAppMessage = function () {
      const messageInput = document.getElementById('whatsappMessage');
      if (messageInput) {
        const message = messageInput.value.trim();
        if (message !== "") {
          const phoneNumber = "256786023858";
          const encodedMessage = encodeURIComponent("Hello, I'm interested in your services: " + message);
          const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
          window.open(whatsappURL, '_blank');
        }
      }
    };
  });


  
  //JavaScript 
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        const preloader = document.getElementById("preloader");
        const mainContent = document.getElementById("main-content");

        preloader.style.display = "none";
        mainContent.classList.add("visible");
        document.body.style.overflow = "auto";
      }, 5000); // Adjust time as needed
    });