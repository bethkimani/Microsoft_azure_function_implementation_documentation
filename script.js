
document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isActive = content.classList.contains('active');

            // Close all accordion contents
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.classList.remove('active');
            });

            // Toggle the clicked accordion content
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });
});