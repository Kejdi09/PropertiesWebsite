# HomeSpace - Real Estate Website

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A modern, responsive real estate website developed during my internship at Dominusoft. HomeSpace provides a bilingual platform for browsing properties available for rent or purchase.

## Overview

HomeSpace is a front-end web application built with vanilla HTML, CSS, and JavaScript. The website features full Albanian and English language support, responsive design, and an intuitive interface for property exploration.

## Features

- **Bilingual Interface**: Complete Albanian and English language support with dynamic switching
- **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices
- **Advanced Property Search**: Filter properties by location, type (apartment, villa, house, office), and price range
- **Property Listings**: Browse multiple properties with image previews, prices, and key specifications (bedrooms, bathrooms, size)
- **Property Details Page**: Individual pages with comprehensive property information, high-resolution images, and agent contact options
- **Favorite Properties**: Heart icon to mark and save favorite listings
- **Interactive Property Cards**: Hover effects and quick-view functionality
- **Contact System**: Integrated contact form with validation and success messaging
- **About Page**: Company story, statistics, team profiles, and core values presentation
- **Contact Information**: Complete contact details including address, phone, email, and business hours
- **Social Media Integration**: Links to social platforms in footer and contact page
- **Modern UI**: Clean design with Font Awesome icons, smooth animations, and professional typography

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
├── js/
│   ├── functions.js       # Core functionality
│   └── lang.js            # Language switching logic
└── images/
    ├── HomeSpaceLogo.png  # Company logo
    └── *.jpg              # Property images
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

- **Homepage**: View featured properties and company highlights
- **Properties Page**: Browse all listings with advanced filtering by location, property type, and price range
- **Property Details**: Click "Shiko Detajet" on any property card to view full specifications, images, and contact options
- **Language Switching**: Click the language selector (🌐) in the navigation to toggle between Albanian and English
- **Favorites**: Click the heart icon on property cards to mark favorites
- **About**: Learn about the company history, values, and team
- **Contact**: Use the contact form or find direct contact information including phone and email

## Development

### Current Implementation
- Multi-page navigation system with 5 main pages (Home, Properties, Property Details, About, Contact)
- Bilingual interface (Albanian/English) with dynamic content switching
- Responsive grid layout with mobile hamburger menu
- Advanced property filtering (location, type, price)
- Property cards with hover effects and favorite functionality
- Individual property detail pages with dynamic URL parameters
- Contact form with client-side validation
- Team profiles and company statistics
- Social media integration
- Font Awesome icons throughout

### Future Enhancements
- Backend integration with database
- User authentication and user accounts
- Save favorite properties to user profile
- Live property search with AJAX
- Image gallery with lightbox modal
- Interactive map with property locations
- Property comparison feature
- Online appointment booking
- Virtual property tours

## Author

Kejdi - [@Kejdi09](https://github.com/Kejdi09)

## License

This project was created for educational purposes during an internship at Dominusoft.