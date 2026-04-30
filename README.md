# Nova Bloom

Nova Bloom is a React + Firebase food ordering web app with two primary experiences:

- **Customer frontend** for browsing menu items, adding to cart, managing favorites, and placing orders.
- **Admin dashboard** for managing menu items, viewing users, and tracking/updating order statuses.

The project is built with Create React App, React Router v6, Firebase (Auth, Firestore, Storage), Ant Design, Bootstrap, and Sass.

## Features

### Customer Experience

- User registration, login, and password reset
- Profile view and profile updates (name/address)
- Menu browsing with search by name/category
- Add/remove quantity from cart
- Favorites management
- Place order with delivery details from profile
- View recent orders and order statuses

### Admin Experience

- Admin-only protected dashboard routes
- View all users
- Add menu items (including image upload)
- Update and delete menu items
- View all recent orders
- Update order status (`Preparing`, `Ready to Deliver`, `Delivered`)

## Tech Stack

- **Frontend:** React 18, React Router DOM 6
- **UI:** Ant Design, Bootstrap 5, Sass
- **Backend Services:** Firebase Authentication, Firestore, Firebase Storage, Firebase Analytics
- **Build Tooling:** Create React App (`react-scripts`)

## Project Structure

```text
src/
  components/        # Shared UI and route guards
  config/            # Firebase and global helpers
  contexts/          # Auth and cart state management
  pages/
    Auth/            # Login, register, forgot password
    Frontend/        # Customer-facing pages
    Dashboard/       # Admin-facing pages
```

## Environment Variables

Create a `.env` file in the project root based on `.env.sample`:

```env
REACT_APP_FIREBASE_API_KEY=""
REACT_APP_FIREBASE_AUTH_DOMAIN=""
REACT_APP_FIREBASE_PROJECT_ID=""
REACT_APP_FIREBASE_STORAGE_BUCKET=""
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=""
REACT_APP_FIREBASE_APP_ID=""
REACT_APP_FIREBASE_MEASUREMENT_ID=""
```

## Firebase Collections Used

- `users`: user profile and role data (`customer` / `admin`)
- `menuItems`: all menu items shown in frontend and dashboard
- `favorites`: customer favorite items
- `orderPlaced`: customer orders and status tracking

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm
- A Firebase project with Auth, Firestore, and Storage enabled

### Installation

```bash
npm install
```

### Run in Development

```bash
npm start
```

App runs at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Route Overview

- `/` - Customer frontend
- `/menu` - Menu
- `/order` - Cart / order placement
- `/recent` - Customer recent orders
- `/favorites` - Favorite items
- `/profile` - Customer profile
- `/auth/*` - Authentication pages
- `/dashboard/*` - Admin-only dashboard

## Deployment

This project includes Firebase Hosting configuration in `firebase.json` with SPA rewrites.

Typical deployment flow:

1. Build the app (`npm run build`)
2. Deploy using Firebase CLI (`firebase deploy`)

## Notes

- Role-based access is enforced in routing through `PrivateRoutes`.
- Cart state is maintained in React context.
- Toast-style notifications are powered by Ant Design message API via global helpers.

---
