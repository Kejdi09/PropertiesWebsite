# HomeSpace - Real Estate Website

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A modern, responsive real estate website developed during my internship at Dominusoft. HomeSpace provides a bilingual platform for browsing properties available for rent or purchase.

## Overview

HomeSpace is a front-end web application built with vanilla HTML, CSS, and JavaScript. The website features full Albanian and English language support, responsive design, and an intuitive interface for property exploration.

## Features

- **Bilingual Interface**: Complete Albanian and English language support with dynamic switching
- **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices
- **Property Listings**: Browse and filter featured properties with detailed information
- **Property Details**: Individual pages with comprehensive property specifications
- **Contact System**: Integrated contact form for user inquiries
- **Modern UI**: Clean design with smooth animations and transitions

## Technology Stack

- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript (ES6+)
- Font Awesome
- Google Fonts (Poppins, Roboto)

## Project Structure

```
PropertiesWebsite/
├── index.html              # Homepage
├── pronat.html            # Properties listing page
├── property_details.html  # Individual property details
├── about.html             # About page
├── contact.html           # Contact page
├── header.html            # Header component
├── footer.html            # Footer component
├── css/
│   └── style.css          # Main stylesheet
└── js/
    ├── functions.js       # Core functionality
    └── lang.js            # Language switching logic
```

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Kejdi09/PropertiesWebsite.git
   ```

2. Navigate to the project directory
   ```bash
   cd PropertiesWebsite
   ```

3. Open with a local server or directly in browser
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. Visit `http://localhost:8000` in your browser

## Usage

- Navigate to "Pronat" to view available properties
- Use the language selector to toggle between Albanian and English
- Click on property cards to view detailed information
- Use the contact form for inquiries

## Development

### Current Implementation
- Multi-page navigation system
- Bilingual interface (AL/EN)
- Responsive grid layout
- Property cards with interactive elements
- Form validation
- Mobile navigation menu

### Future Enhancements
- Property search and filtering
- Backend integration
- User authentication
- Advanced filtering (price, location, type)
- Image gallery with lightbox
- Map integration

## Author

Kejdi - [@Kejdi09](https://github.com/Kejdi09)

## License

This project was created for educational purposes during an internship at Dominusoft.