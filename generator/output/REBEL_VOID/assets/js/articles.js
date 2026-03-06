// Filter articles by category
document.querySelectorAll('.article-filters a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Update active state
        document.querySelector('.article-filters a.active').classList.remove('active');
        this.classList.add('active');
        
        // Filter logic would go here
        const category = this.textContent.trim();
        console.log(`Filter by: ${category}`);
        // Actual filtering would require article data attributes
    });
});

// Make article cards interactive
document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', function() {
        const link = this.querySelector('.card-link');
        if (link) {
            window.location.href = link.href;
        }
    });
    
    // Hover effects
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#00ffff';
        this.style.transform = 'scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '#ff00ff';
        this.style.transform = 'scale(1)';
    });
});