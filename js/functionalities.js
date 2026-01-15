// Initialize language from localStorage or default to Albanian
function initLang() {
    const savedLang = localStorage.getItem('selectedLang') || 'al';
    setLang(savedLang);
}

// Set language function
function setLang(language) {
    // Save language preference
    localStorage.setItem('selectedLang', language);

    // Update navigation items
    const homeNav = document.getElementById("homeNav");
    const aboutNav = document.getElementById("aboutNav");
    const contactNav = document.getElementById("contactNav");
    const propertiesNav = document.getElementById("propertiesNav");
    const langBtn = document.getElementById("langbtn");

    if (homeNav) homeNav.innerText = lang[language].homeNav;
    if (aboutNav) aboutNav.innerText = lang[language].aboutNav;
    if (contactNav) contactNav.innerText = lang[language].contactNav;
    if (propertiesNav) propertiesNav.innerText = lang[language].propertiesNav;
    if (langBtn) langBtn.innerHTML = lang[language].langbtn;

    // Update all elements with data-lang attribute
    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (lang[language][key]) {
            // For elements that might contain HTML (like addresses with line breaks)
            if (key.includes('Content') || key === 'addressContent' || key === 'hoursContent') {
                el.innerHTML = lang[language][key];
            } else {
                el.innerText = lang[language][key];
            }
        }
    });

    // Update select options if they exist
    const selectOptions = document.querySelectorAll('select option[data-lang]');
    selectOptions.forEach(option => {
        const key = option.getAttribute("data-lang");
        if (lang[language][key]) {
            option.innerText = lang[language][key];
        }
    });

    // Update placeholder attributes
    const inputs = document.querySelectorAll('input[data-placeholder-' + language + ']');
    inputs.forEach(input => {
        const placeholder = input.getAttribute('data-placeholder-' + language);
        if (placeholder) {
            input.placeholder = placeholder;
        }
    });
}

// Load header and footer
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            const headerElement = document.getElementById('header');
            if (headerElement) {
                headerElement.innerHTML = data;
            }

            // Setup language dropdown toggle
            const langDiv = document.querySelector('.langdiv');
            const langBtn = document.querySelector('.lang-btn');

            if (langBtn && langDiv) {
                langBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    langDiv.classList.toggle('show');
                });

                // Close dropdown when clicking outside
                window.addEventListener('click', (e) => {
                    if (!langDiv.contains(e.target)) {
                        langDiv.classList.remove('show');
                    }
                });
            }

            // Setup mobile menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navRight = document.querySelector('.navRight');

            if (menuToggle && navRight) {
                menuToggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    navRight.classList.toggle('show');
                });

                // Close mobile menu when clicking outside
                window.addEventListener('click', (e) => {
                    if (!navRight.contains(e.target) && !menuToggle.contains(e.target)) {
                        navRight.classList.remove('show');
                    }
                });

                // Close mobile menu when clicking on a nav link
                const navLinks = navRight.querySelectorAll('a');
                navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        navRight.classList.remove('show');
                    });
                });
            }

            // Initialize language after header is loaded
            initLang();

            // Load footer after header
            return fetch("footer.html");
        })
        .then(response => response.text())
        .then(data => {
            const footerElement = document.getElementById("footer-placeholder");
            if (footerElement) {
                footerElement.innerHTML = data;
            }
            // Re-apply language to footer
            const savedLang = localStorage.getItem('selectedLang') || 'al';
            setLang(savedLang);
        })
        .catch(error => {
            console.error('Error loading header/footer:', error);
        });
}

// Contact form handling
function initContactForm() {
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const successMessage = document.getElementById('successMessage');
            const errorMessage = document.getElementById('errorMessage');

            if (name && email && message && name.value && email.value && message.value) {
                // Hide error message
                if (errorMessage) {
                    errorMessage.style.display = 'none';
                }
                
                // Show success message
                if (successMessage) {
                    successMessage.style.display = 'block';
                }

                // Clear form
                name.value = '';
                email.value = '';
                const phone = document.getElementById('phone');
                if (phone) phone.value = '';
                const subject = document.getElementById('subject');
                if (subject) subject.value = 'general';
                message.value = '';

                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (successMessage) {
                        successMessage.style.display = 'none';
                    }
                }, 5000);
            } else {
                // Show error message
                const currentLang = localStorage.getItem('selectedLang') || 'al';
                const errorMsg = currentLang === 'en' 
                    ? 'Please fill in all required fields (Name, Email, Message)!' 
                    : 'Ju lutem plotësoni të gjitha fushat e kërkuara (Emri, Email, Mesazhi)!';
                
                if (errorMessage) {
                    errorMessage.innerText = errorMsg;
                    errorMessage.style.display = 'block';
                }
                
                // Hide success message
                if (successMessage) {
                    successMessage.style.display = 'none';
                }

                // Hide error after 5 seconds
                setTimeout(() => {
                    if (errorMessage) {
                        errorMessage.style.display = 'none';
                    }
                }, 5000);
            }
        });
    }
}

// Initialize property filters
function initPropertyFilters() {
    const filterBtn = document.querySelector('.btn-filter');
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            // Get filter values
            const location = document.querySelector('select:nth-of-type(1)')?.value;
            const type = document.querySelector('select:nth-of-type(2)')?.value;
            const price = document.querySelector('select:nth-of-type(3)')?.value;

            // In a real application, this would filter the properties
            console.log('Filtering properties:', { location, type, price });
            
            // For demo purposes, just show an alert
            const currentLang = localStorage.getItem('selectedLang') || 'al';
            const msg = currentLang === 'en' 
                ? 'Filtering properties...' 
                : 'Duke kërkuar prona...';
            
            // Smooth scroll to properties
            const propertiesGrid = document.querySelector('.properties-grid');
            if (propertiesGrid) {
                propertiesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

// Initialize favorite buttons
function initFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.btn-favorite');
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.classList.toggle('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fas');
                icon.classList.toggle('far');
            }
        });
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Initialize all functionality when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    initContactForm();
    initPropertyFilters();
    initFavoriteButtons();
    initViewDetailsButtons();
    initSmoothScroll();
});