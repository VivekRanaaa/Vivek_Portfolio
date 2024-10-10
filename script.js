const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

/*------------------------header-------------------*/
// JavaScript for updating the active class on the nav links based on scroll position
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  // Loop through all sections to find the one in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id"); // Get the current section id
    }
  });

  // Remove 'active' class from all nav links
  navLinks.forEach((link) => {
    link.classList.remove("active");
    // Add 'active' class to the link corresponding to the current section
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/*------------------------Experience_section_js-------------------*/
let lastScrollTop = 0; // Store the previous scroll position

document.addEventListener("scroll", function () {
  const experienceSection = document.querySelector(".experience-area");
  const experienceLine = document.querySelector(".experience-line");
  const experienceContents = document.querySelectorAll(".experience-content");

  const sectionPosition = experienceSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Current scroll position

  if (sectionPosition < screenPosition) {
    const lineHeight = 500; // Maximum height for the line
    let lineGrowth = 0;

    // Determine scroll direction
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      lineGrowth = lineHeight; // Line grows
      experienceLine.style.height = `${lineGrowth}px`;

      experienceContents.forEach((content, index) => {
        setTimeout(() => {
          const leftContent = content.querySelector(".exp-left");
          const rightContent = content.querySelector(".exp-right");

          if (leftContent) {
            leftContent.classList.add("active"); // Show left content
          }
          if (rightContent) {
            rightContent.classList.add("active"); // Show right content
          }
        }, index * 200); // Staggered animation
      });
    } else {
      // Scrolling up
      lineGrowth = Math.max(0, experienceLine.offsetHeight - 300); // Shrink line height
      experienceLine.style.height = `${lineGrowth}px`;

      experienceContents.forEach((content, index) => {
        setTimeout(() => {
          const leftContent = content.querySelector(".exp-left");
          const rightContent = content.querySelector(".exp-right");

          if (leftContent) {
            leftContent.classList.remove("active"); // Hide left content
          }
          if (rightContent) {
            rightContent.classList.remove("active"); // Hide right content
          }
        }, index * 200); // Staggered animation
      });
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Store the current scroll position
});

/*--------------------Follow-cursor-ball--------------------------------*/
const ball = document.querySelector(".ball");
const innerBall = document.querySelector(".inner-ball"); // Select the inner ball
const buttons = document.querySelectorAll("button,a"); // Select all buttons
let ballX = 0,
  ballY = 0;
let mouseX = 0,
  mouseY = 0;
let delay = 0.5; // This controls the delay factor

// Listen for mouse movement and update mouseX, mouseY
document.addEventListener("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// Function to move the ball and inner ball with delay (lerping effect)
function moveBalls() {
  ballX += (mouseX - ballX) * delay;
  ballY += (mouseY - ballY) * delay;

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  innerBall.style.left = `${ballX}px`; // Move inner ball with the outer ball
  innerBall.style.top = `${ballY}px`;

  requestAnimationFrame(moveBalls); // Keep the loop going
}

moveBalls(); // Start the movement loop

// Apply hover effect to all buttons
buttons.forEach((button) => {
  // Button hover event to increase outer ball size and change color
  button.addEventListener("mouseenter", () => {
    ball.style.width = "100px";
    ball.style.height = "100px";
    ball.style.backgroundColor = "#b21eb238"; // Change color when hovering the button
    innerBall.style.width = "20px"; // Change inner ball size
    innerBall.style.height = "20px"; // Change inner ball size
  });

  // Reset outer ball size and color when the mouse leaves the button
  button.addEventListener("mouseleave", () => {
    ball.style.width = "50px";
    ball.style.height = "50px";
    ball.style.backgroundColor = "#ff00ff5e"; // Revert to red after hovering the button
    innerBall.style.width = "20px"; // Reset inner ball size
    innerBall.style.height = "20px"; // Reset inner ball size
  });
});
/*----------------------------------back_to_top------------------------*/
// JavaScript for Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll back to top when the button is clicked
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
