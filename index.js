const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const scrollRevealOption = {
    distance: "50px",
    origin: "buttom",
    duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
    intrval: 500,
});
ScrollReveal().reveal(".about__container img", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".service__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__header", {
    ...scrollRevealOption,
    delay: 300,
});
ScrollReveal().reveal(".service__container .section__header", {
    ...scrollRevealOption,
    delay: 500,
    duration: 600,
    interval: 500,
});
const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

ScrollReveal().reveal(".blog__content .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
    ...scrollRevealOption,
    delay: 400,
})
ScrollReveal().reveal(".blog__content p", {
    ...scrollRevealOption,
    delay: 800,
})
ScrollReveal().reveal(".blog__content .blog__btn", {
    ...scrollRevealOption,
    delay: 1200,
})

// ------------------------instagram-nodes---------------------------
const instagram = document.querySelector(".instagram__flex");
Array.from(instagram.children).forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    instagram.appendChild(duplicateNode);
});
// ------------------------instagram-nodes---------------------------


var insta_swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});





// const scrollWrapper = document.querySelector('.scroll-wrapper');
// const instagramFlex = document.querySelector('.instagram__flex');
// let isDown = false;
// let startX;
// let scrollLeft;
// let lastMoveX;
// let velocity = 0;
// let momentumID;

// // Start dragging
// scrollWrapper.addEventListener('mousedown', (e) => {
//     isDown = true;
//     instagramFlex.style.cursor = 'grabbing';
//     startX = e.pageX - scrollWrapper.offsetLeft;
//     scrollLeft = scrollWrapper.scrollLeft;
//     lastMoveX = startX;
//     velocity = 0; // Reset velocity on new drag
//     instagramFlex.style.animationPlayState = 'paused';
//     clearInterval(momentumID);
// });

// // Stop dragging
// scrollWrapper.addEventListener('mouseleave', () => {
//     if (isDown) {
//         applyMomentum();
//     }
//     isDown = false;
//     instagramFlex.style.cursor = 'grab';
// });

// scrollWrapper.addEventListener('mouseup', () => {
//     if (isDown) {
//         applyMomentum();
//     }
//     isDown = false;
//     instagramFlex.style.cursor = 'grab';
// });

// // Handle mouse movement during drag
// scrollWrapper.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - scrollWrapper.offsetLeft;
//     const walk = (x - startX) * 2; // Adjust the scroll speed if needed
//     scrollWrapper.scrollLeft = scrollLeft - walk;
//     velocity = (x - lastMoveX) * 2; // Calculate velocity
//     lastMoveX = x;
// });

// // Apply momentum after dragging
// function applyMomentum() {
//     clearInterval(momentumID); // Clear any previous momentum intervals
//     let lastScrollLeft = scrollWrapper.scrollLeft;
//     let lastTime = Date.now();

//     momentumID = setInterval(() => {
//         const now = Date.now();
//         const timeElapsed = now - lastTime;
//         lastTime = now;

//         // Apply friction to velocity
//         velocity *= 0.95;
//         if (Math.abs(velocity) < 0.1) {
//             clearInterval(momentumID);
//             instagramFlex.style.animationPlayState = 'running'; // Resume animation
//             return;
//         }

//         scrollWrapper.scrollLeft += velocity;
//     }, 16); // Approximately 60 FPS
// }


const scrollWrapper = document.querySelector('.scroll-wrapper');
const instagramFlex = document.querySelector('.instagram__flex');
let isDown = false;
let startX;
let scrollLeft;
let lastMoveX;
let velocity = 0;
let momentumID;

// Handle mouse and touch start
function startInteraction(e) {
    isDown = true;
    instagramFlex.style.cursor = 'grabbing';
    const pageX = e.pageX || e.touches[0].pageX;
    startX = pageX - scrollWrapper.offsetLeft;
    scrollLeft = scrollWrapper.scrollLeft;
    lastMoveX = startX;
    velocity = 0; // Reset velocity on new drag
    instagramFlex.style.animationPlayState = 'paused';
    clearInterval(momentumID);
}

// Handle mouse and touch end
function endInteraction() {
    if (isDown) {
        applyMomentum();
    }
    isDown = false;
    instagramFlex.style.cursor = 'grab';
}

// Handle mouse and touch movement
function moveInteraction(e) {
    if (!isDown) return;
    e.preventDefault();
    const pageX = e.pageX || e.touches[0].pageX;
    const x = pageX - scrollWrapper.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed if needed
    scrollWrapper.scrollLeft = scrollLeft - walk;
    velocity = (x - lastMoveX) * 0.5; // Calculate velocity and scale it down
    lastMoveX = x;
}

// Add event listeners for mouse interactions
scrollWrapper.addEventListener('mousedown', startInteraction);
scrollWrapper.addEventListener('mouseleave', endInteraction);
scrollWrapper.addEventListener('mouseup', endInteraction);
scrollWrapper.addEventListener('mousemove', moveInteraction);

// Add event listeners for touch interactions
scrollWrapper.addEventListener('touchstart', startInteraction, { passive: true });
scrollWrapper.addEventListener('touchend', endInteraction);
scrollWrapper.addEventListener('touchmove', moveInteraction, { passive: false });

// Apply momentum after dragging
function applyMomentum() {
    clearInterval(momentumID); // Clear any previous momentum intervals
    momentumID = setInterval(() => {
        scrollWrapper.scrollLeft -= velocity;
        velocity *= 0.95; // Apply friction to velocity
        if (Math.abs(velocity) < 0.1) {
            clearInterval(momentumID);
            instagramFlex.style.animationPlayState = 'running'; // Resume animation
        }
    }, 16); // Approximately 60 FPS
}
