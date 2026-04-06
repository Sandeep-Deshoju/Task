const testimonials = [
    { role: "Project Manager", name: "Dora Bridges" },
    { role: "Operations Manager", name: "Sima Patel" }
];

let currentIndex = 0;

function updateTestimonial(index) {
    const roleEl = document.querySelector('.author-info .role');
    const nameEl = document.querySelector('.author-info .name');
    const dots = document.querySelectorAll('.dot');

    roleEl.textContent = testimonials[index].role;
    nameEl.textContent = testimonials[index].name;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
});


function toggleChat() {
  let chat = document.getElementById("chatBox");

  if (chat.style.display === "block") {
    chat.style.display = "none";
  } else {
    chat.style.display = "block";
  }
}
