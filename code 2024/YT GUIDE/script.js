// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tab functionality
document.querySelectorAll('.tab-links').forEach(tab => {
    tab.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        document.querySelectorAll('.tab-links').forEach(link => {
            link.classList.remove('active-link');
        });
        this.classList.add('active-link');

        document.querySelectorAll('.tab-contents').forEach(content => {
            content.classList.remove('active-tab');
            if (content.id === target) {
                content.classList.add('active-tab');
            }
        });
    });
});

// Function to animate skill bars
function animateSkillBars() {
    let skillBars = document.querySelectorAll('.skill-bar-inner');
    skillBars.forEach(skillBar => {
        let percent = skillBar.getAttribute('data-percent');
        skillBar.style.width = percent + '%'; // Set width as percentage
    });
}

// Intersection Observer to trigger animation
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 }); // Adjust threshold as needed

// Observing each skill section
document.querySelectorAll('.skill').forEach(skill => {
    skillObserver.observe(skill);
});

