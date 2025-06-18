document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Experience timeline data
    const experiences = [
        {
            year: '2023-Present',
            title: 'Senior Developer',
            company: 'Tech Corp',
            description: 'Leading web development projects and mentoring junior developers.'
        },
        {
            year: '2020-2023',
            title: 'Full Stack Developer',
            company: 'Digital Solutions',
            description: 'Developed and maintained web applications using modern technologies.'
        }
    ];

    // Populate timeline
    const timeline = document.querySelector('.timeline');
    experiences.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.classList.add('experience-item');
        expElement.innerHTML = `
            <h3>${exp.title}</h3>
            <h4>${exp.company}</h4>
            <p class="year">${exp.year}</p>
            <p>${exp.description}</p>
        `;
        timeline.appendChild(expElement);
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (Demo only)');
        contactForm.reset();
    });
});