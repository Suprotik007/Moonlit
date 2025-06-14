🏨 Hotel Booking Platform
A modern, fully responsive hotel booking platform that provides users with a seamless, intuitive experience for discovering and booking hotel rooms. This project merges interactive design, robust backend functionality, and secure user authentication to create an engaging and trustworthy environment across all devices.

🔗 Live Demo: [Add your deployed project link here]

✨ Features at a Glance
🔍 Search & Filter hotel rooms easily

🗓️ Book & manage reservations with ease

⭐ Post & view verified user reviews

💸 Get access to exclusive deals & promotions

🔐 Secure & intuitive user experience with JWT auth

📱 Fully responsive design across devices

🏁 Project Purpose
This project was developed to demonstrate:

Professional UI/UX design with React

Authentication via Firebase & secure routes

Real-world booking logic and user review systems

Recruiter-ready full-stack implementation

🖼 Homepage
🎯 Interactive hero section with slider, heading, and CTA

🗺️ Hotel location map using react-leaflet

🌟 Featured rooms with “Book Now” actions

💬 Reviews carousel (latest first)

🧾 Additional sections: Amenities & Trusted Partners

🎁 Special offers popup/modal

🔐 Authentication & Security
🔑 Email/password registration with strong validation (upper, lower, 6+ chars)

☁️ Social login via Google or GitHub

🛡️ JWT-based auth for protecting user routes

🔔 Toast / SweetAlert2 notifications for all user actions

🧭 Navigation
🔗 Easy access to: Rooms, My Bookings, and Login/Register

👤 My Bookings only visible to authenticated users

🏘 Rooms Page
📋 Displays all rooms in cards or table format

💰 Filter rooms by price range (server-side)

🖱️ Clickable cards redirect to detailed room pages

🛏 Room Details Page
📝 Room description, image gallery, and list of user reviews

✅ Booking modal with room summary and date picker

❌ Booked rooms become unavailable automatically

📅 My Bookings Page
🧾 View current user’s bookings in a responsive table

🔄 Update or cancel bookings (restrictions apply)

Cancellations allowed only 1+ days in advance

✍️ Post reviews for booked rooms only

⭐ Review System
🗣 Users can post reviews only for rooms they've booked

📊 Reviews include:

Username (auto-filled)

1–5 star rating

Comment

Timestamp

📍 Displayed on room details and homepage (latest first)

🧭 Access Control
❌ Non-logged-in users cannot book or leave reviews

🔐 JWT tokens stored securely and used for all protected API requests

❌ Custom 404 Page
🚫 Friendly error screen with engaging image/GIF and a “Back to Home” button

📱 Responsive Design
✅ Mobile-first layout

🧠 Clean alignment, spacing, and color contrast

👀 Modern UI/UX to impress recruiters (no “gobindo” designs)

🧰 Tech Stack & NPM Packages
Area	Technology
Frontend	React, React Router DOM, Framer Motion
Backend	Express.js, MongoDB, JWT
Auth	Firebase Auth (Email/Password + OAuth)
Maps	React-Leaflet
Notifications	React-Toastify / SweetAlert2
Forms & Validation	Custom + Firebase validation
Dates	Moment.js
HTTP Requests	Axios
SEO	react-helmet-async
Config	dotenv

🔒 Security
🛡 Firebase keys stored in .env (never pushed to GitHub)

🧪 MongoDB credentials also stored securely via environment variables

🔐 JWT stored and sent via headers for secure API calls
