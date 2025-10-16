// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap Toast
    const cartToast = new bootstrap.Toast(document.getElementById('cartToast'));
    
    // Sample product data
    const products = [
        {
            id: 1,
            name: "Classic Denim Jacket",
            price: "$89.99",
            image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "men"
        },
        {
            id: 2,
            name: "Floral Summer Dress",
            price: "$65.99",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "women"
        },
        {
            id: 3,
            name: "Casual Linen Shirt",
            price: "$45.99",
            image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
            category: "women"
        },
        {
            id: 4,
            name: "Winter Wool Coat",
            price: "$129.99",
            image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            category: "women"
        },
        {
            id: 5,
            name: "Slim Fit Jeans",
            price: "$59.99",
            image: "https://plus.unsplash.com/premium_photo-1690820317364-3e22c2f68eb4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
            category: "men"
        },
        {
            id: 6,
            name: "Leather Crossbody Bag",
            price: "$79.99",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            category: "accessories"
        }
      
    ];

    // Sample testimonials data
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Fashion Blogger",
            text: "The quality of clothing from FASHION HUB is exceptional! I've never been more satisfied with my purchases.",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
            name: "Marcus Chen",
            role: "Style Influencer",
            text: "Fast shipping and amazing customer service. My orders always arrive in perfect condition.",
            avatar: "https://randomuser.me/api/portraits/men/54.jpg"
        },
        {
            name: "Jessica Martinez",
            role: "Fashion Designer",
            text: "As a designer, I appreciate the attention to detail and quality in every piece from FASHION HUB.",
            avatar: "https://randomuser.me/api/portraits/women/67.jpg"
        },
        {
            name: "Alex Thompson",
            role: "Loyal Customer",
            text: "The perfect blend of style and comfort. I shop here for all my fashion needs!",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
            name: "Emily Davis",
            role: "Fashion Enthusiast",
            text: "Their collection is always up-to-date with the latest trends. Love shopping here!",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        }
    ];

    // Initialize the page
    function init() {
        loadProducts();
        loadTestimonials();
        setupEventListeners();
        createParticles();
        animateCircles();
    }

    // Load products into the grid
    function loadProducts() {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = '';

        products.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });
    }

    // Create product card element
    function createProductCard(product) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        
        col.innerHTML = `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-content">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <button class="btn btn-outline-primary add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-bag me-2"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        `;

        return col;
    }

    // Load testimonials
    function loadTestimonials() {
        const testimonialTrack = document.getElementById('testimonialTrack');
        testimonialTrack.innerHTML = '';

        // Duplicate testimonials for seamless scroll
        const allTestimonials = [...testimonials, ...testimonials];
        
        allTestimonials.forEach(testimonial => {
            const testimonialCard = createTestimonialCard(testimonial);
            testimonialTrack.appendChild(testimonialCard);
        });
    }

    // Create testimonial card
    function createTestimonialCard(testimonial) {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        card.innerHTML = `
            <div class="testimonial-text">
                "${testimonial.text}"
            </div>
            <div class="testimonial-author">
                <div class="author-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}">
                </div>
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;

        return card;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Add to cart buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
                
                // Show toast notification
                cartToast.show();
                
                // Add bounce animation
                button.classList.add('animate-bounce');
                setTimeout(() => {
                    button.classList.remove('animate-bounce');
                }, 1000);
                
                // Update cart count
                updateCartCount();
            }
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('.btn-filter');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter products
                const filter = this.dataset.filter;
                filterProducts(filter);
            });
        });

        // Load more button
        const loadMoreBtn = document.querySelector('.btn-load-more');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
                setTimeout(() => {
                    // Simulate loading more products
                    this.innerHTML = '<i class="fas fa-redo me-2"></i>Load More';
                    // In a real app, you would load more products from an API
                }, 2000);
            });
        }

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
                submitButton.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                    setTimeout(() => {
                        contactForm.reset();
                        submitButton.innerHTML = originalText;
                        submitButton.disabled = false;
                    }, 2000);
                }, 2000);
            });
        }

        // Scroll events
        window.addEventListener('scroll', function() {
            updateProgressBar();
            toggleBackToTop();
            updateNavbar();
        });

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            backToTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Filter products by category
    function filterProducts(category) {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Update cart count
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            let count = parseInt(cartCount.textContent) || 0;
            count++;
            cartCount.textContent = count;
            
            // Add pulse animation
            cartCount.classList.add('animate-bounce');
            setTimeout(() => {
                cartCount.classList.remove('animate-bounce');
            }, 1000);
        }
    }

    // Update progress bar
    function updateProgressBar() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    }

    // Toggle back to top button
    function toggleBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    }

    // Update navbar on scroll
    function updateNavbar() {
        const navbar = document.querySelector('.navbar');
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Create particles for hero section
    function createParticles() {
        const particlesContainer = document.getElementById('heroParticles');
        if (!particlesContainer) return;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 6 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${Math.random() * 0.3 + 0.1})`;
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Animate circle statistics
    function animateCircles() {
        const circles = document.querySelectorAll('.circle');
        
        circles.forEach(circle => {
            const value = parseInt(circle.dataset.value);
            if (value) {
                // Animate the conic gradient
                setTimeout(() => {
                    circle.style.background = `conic-gradient(var(--primary-color) ${value}%, var(--gray-200) 0%)`;
                }, 500);
            }
        });
    }

    // Add CSS for animations
  /*  const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
        }
        
        .animate-bounce {
            animation: bounce 0.5s;
        }
    `;
    document.head.appendChild(style);*/

    // Initialize the application
    init();
});