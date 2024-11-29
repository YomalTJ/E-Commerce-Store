E-commerce Application

Overview
This is a full-featured e-commerce web application built with React, Redux Toolkit, React Bootstrap, Formik, and Yup for form validation and state management.

Features
•	User Authentication (Login/Register)
•	Product Listing with Search and Category Filtering
•	Shopping Cart Functionality
•	Responsive Design
•	State Persistence

Authentication
•	User registration and login
•	Form validation using Yup
•	Redux-based authentication state management

Product Management
•	Dynamic product listing
•	Search functionality
•	Category filtering
•	Add to cart feature

Cart Functionality
•	Add/Remove products
•	Quantity adjustment
•	Total price calculation
•	Clear cart option

Installation Steps

1. Clone the repository
git clone https://github.com/YomalTJ/E-Commerce-Store.git

2. Install dependencies
npm install

3. Start the development server
npm run dev

Technology Stack
•	React
•	Redux Toolkit
•	React Bootstrap
•	Formik
•	Yup
•	Redux Persist

Configuration
•	Authentication state managed in `authSlice.js`
•	Product state in `productSlice.js`
•	Cart state in `cartSlice.js`

Key Design Decisions
•	Used Redux Toolkit for simplified state management
•	Implemented form validation with Yup
•	Used Redux Persist for maintaining user session and cart state
•	Responsive design with React Bootstrap

Available Scripts
•	`npm run dev`: Start development server
•	`npm run build`: Create production build
•	`npm run preview`: Preview production build
