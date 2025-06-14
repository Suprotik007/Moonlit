Moonlit
A modern, fully responsive hotel booking platform designed to provide users with a seamless and engaging experience for discovering and booking hotel rooms. The platform combines interactive design, robust functionality, and secure authentication to ensure an enjoyable and trustworthy experience for all users.

Project Purpose
This project aims to deliver a visually appealing, recruiter-friendly hotel booking website that allows users to:

Discover and filter hotel rooms

Book and manage reservations

Post and view authentic user reviews

Benefit from special offers and promotions

Enjoy a secure and intuitive user experience across all devices

Live URL
Clinet : [ https://moolit.netlify.app/ ]
Server : [ https://cozy-room-server.vercel.app/ ]

Key Features
Homepage Design

Interactive banner with slider, heading, description, and CTA button

Map integration showing hotel location (using react-leaflet)

Featured rooms section with top-rated rooms and “Book Now” buttons

User reviews carousel, sorted by latest

Two extra attractive sections (e.g., amenities, partners)

Popup/modal for special offers and promotions

User Authentication

Email/password registration and login with validation

Social login (Google)

Secure JWT authentication for protected routes

Toast/sweet alert notifications for actions

Navigation Bar

Links to Rooms, My Bookings, and authentication pages

My Bookings accessible only to authenticated users

Rooms Page

Displays all rooms from the database in card/table format

Server-side filtering by price range

Clickable cards redirect to room details

Room Details Page

Comprehensive room info, list of reviews, and booking button

Booking modal with date picker, room summary, and confirm action

Only available rooms can be booked; booked rooms become unavailable

My Bookings Page

Shows current user’s bookings in a table

Cancel booking (with 1-day-before restriction; uses Moment.js for date comparison)

Update booking date

Post reviews for booked rooms only

Review System

Users can review only rooms they have booked

Reviews include username (read-only), rating (1-5), comment, and timestamp

Reviews displayed on room details and homepage (latest first)

Access Control

Non-logged-in users cannot book or review rooms

Private routes protected by JWT

404 Page

Custom error page with engaging image/gif and “Back to Home” button

Responsive Design

Mobile, tablet, and desktop friendly

Pleasing color contrast, proper alignment, and spacing

Clean, recruiter-attractive UI (no “gobindo” design)

NPM Packages Used
react-router-dom – Routing

firebase – Authentication

framer-motion – Animations

react-leaflet – Map display

moment – Date calculations and comparisons

react-toastify or sweetalert2 – Notifications

axios – HTTP requests

dotenv – Environment variable management

Security
Firebase configuration keys are stored in environment variables (.env).

MongoDB credentials are secured with environment variables on the server.



