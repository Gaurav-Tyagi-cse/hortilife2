
    // JavaScript to add the 'show' class when the element is in view
    window.addEventListener('scroll', function () {
        const items = document.querySelectorAll('.category-item');
        const windowHeight = window.innerHeight;

        items.forEach(function (item) {
            const rect = item.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.8) {
                item.classList.add('show');
            }
        });
    });



    // footer js
    // Trigger initial check in case the page loads with scroll already near the section
    window.dispatchEvent(new Event('scroll'));

        // Wait for the DOM to be fully loaded
        document.addEventListener("DOMContentLoaded", () => {
            const footerColumns = document.querySelectorAll('.footer-col');
            
            // Apply animations to each column with a slight delay
            footerColumns.forEach((col, index) => {
                setTimeout(() => {
                    col.classList.add('fade-in-up');
                }, index * 300);  // Delay each column's animation by 300ms
            });
        });
        