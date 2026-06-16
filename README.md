# Ascendia Web

Frontend application for Ascendia - A modern web application built with React and TypeScript for user management and authentication.

## 🚀 Tech Stack

- **React 19.2.6** - UI library
- **TypeScript 6.0.2** - Type-safe JavaScript
- **Vite 8.0.12** - Build tool and dev server
- **React Router DOM 7.17.0** - Client-side routing
- **Axios 1.17.0** - HTTP client for API requests
- **React Icons 5.6.0** - Icon library
- **React Toastify 11.1.0** - Toast notifications

## ✨ Features

- **Authentication System** - JWT-based login with secure session management
- **User Management** - Create and manage users with role-based access
- **Company Management** - Multi-tenant company support
- **Role Management** - Role-based access control (RBAC)
- **Multi-language Support** - Internationalization (i18n) with English and Spanish
- **Responsive Design** - Mobile-first approach for all screen sizes
- **Form Validation** - Client-side validation with comprehensive error messages
- **Toast Notifications** - User feedback for actions and errors
- **Docker Support** - Containerized deployment with multi-stage builds

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header/         # Application header with language switcher
│   └── UserCreate/     # User creation form component
├── pages/              # Page components
│   ├── login/          # Login page
│   └── User/           # User management pages
├── services/           # API service layer
│   ├── AuthService.ts  # Authentication API calls
│   ├── UserService.ts  # User management API calls
│   ├── Company.service.ts # Company API calls
│   └── Roles.service.ts   # Role API calls
├── hooks/              # Custom React hooks
│   └── useUserCreate.ts # User creation state management
├── i18n/               # Internationalization
│   ├── en.json         # English translations
│   └── es.json         # Spanish translations
├── interface/          # TypeScript interfaces
│   ├── user.interface.ts
│   ├── Company.interface.ts
│   ├── Role.interface.ts
│   └── Permission.interface.ts
├── constants/          # Application constants
│   ├── General.constants.ts
│   ├── header.constants.ts
│   └── user.constants.ts
├── validators/         # Form validation logic
├── utils/              # Utility functions
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🛠️ Installation

### Prerequisites

- Node.js 22 or higher
- npm or yarn package manager

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
VITE_URL_API=http://your-api-url
```

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🐳 Docker Deployment

Build the Docker image:

```bash
docker build -t ascendia-web .
```

Run the container:

```bash
docker run -p 80:80 ascendia-web
```

The application uses a multi-stage Docker build:
- **Stage 1**: Node.js Alpine for building the application
- **Stage 2**: Nginx Alpine for serving the static files

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_URL_API` | Base URL for the backend API | Yes |

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 🌐 API Integration

The application integrates with a RESTful API for:
- Authentication (`/auth/login`)
- User management (`/users`)
- Company management (`/companies`)
- Role management (`/roles`)

## 🎨 UI/UX Features

- Clean, modern interface design
- Language switcher in header (English/Spanish)
- Form validation with real-time feedback
- Toast notifications for user actions
- Responsive layout for mobile, tablet, and desktop

## 📄 License

This project is private and proprietary.

## 👥 Support

For support and questions, please contact the development team.