# 🎯 PLP Task Manager

A modern, fully-featured task management application built with React, Tailwind CSS, and Vite. This project demonstrates advanced React concepts including component architecture, state management, custom hooks, context API, and external API integration.

## 🌟 Features

### ✅ Task Management

- ➕ Add new tasks with a simple, intuitive interface
- ✔️ Mark tasks as completed or active
- 🗑️ Delete tasks you no longer need
- 🔍 Filter tasks by status (All, Active, Completed)
- 💾 Automatic localStorage persistence - your tasks are saved between sessions
- 📊 Real-time task counter showing remaining tasks

### 🎨 User Interface

- 🌓 **Dark/Light Theme Switcher** - Toggle between themes with smooth transitions
- 📱 **Fully Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🎭 **Beautiful Animations** - Smooth fade-in and slide-in effects
- 🎯 **Modern UI Components** - Reusable Button and Card components
- 🧭 **Sticky Navigation** - Easy access to all sections

### 🌐 API Integration

- 📡 Fetches real-time data from JSONPlaceholder API
- 🔄 Loading states with animated spinners
- ❌ Comprehensive error handling
- 🔎 **Search Functionality** - Filter posts by title or content
- 📄 **Pagination** - Navigate through pages of results
- 🎴 **Card-based Layout** - Posts displayed in a clean grid

### ⚛️ Technical Highlights

- **React Hooks**: useState, useEffect, useContext
- **Custom Hooks**: useLocalStorage for task persistence, useFetch for API calls
- **Context API**: ThemeContext for global theme management
- **Component Architecture**: Modular, reusable components
- **Tailwind CSS**: Utility-first styling with custom animations
- **PropTypes**: Type checking for component props

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Git for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Taiwosamuel8364.git
   cd react-js-jsx-and-css-mastering-front-end-development-Taiwosamuel8364
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This will install:

   - React 18.2.0
   - React DOM 18.2.0
   - React Router DOM 6.20.0
   - PropTypes 15.8.1
   - Vite 5.0.8
   - Tailwind CSS 3.4.0
   - And all development dependencies

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will automatically open in your default browser at `http://localhost:3000`

4. **Build for production** (optional)

   ```bash
   npm run build
   ```

   This creates an optimized production build in the `dist` folder.

5. **Preview production build** (optional)
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
react-js-jsx-and-css-mastering-front-end-development-Taiwosamuel8364/
├── public/                      # Static assets
├── src/
│   ├── components/              # React components
│   │   ├── APIDataDisplay.jsx   # API data fetching and display
│   │   ├── Button.jsx           # Reusable button component
│   │   ├── Card.jsx             # Reusable card component
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── Navbar.jsx           # Navigation bar with theme toggle
│   │   └── TaskManager.jsx      # Task management component
│   ├── context/                 # React Context
│   │   └── ThemeContext.jsx     # Theme management context
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # App-specific styles
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles with Tailwind
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                    # This file
```

## 🎯 Component Overview

### Core Components

#### `<Button />`

A versatile button component with multiple variants and sizes.

```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

**Props:** variant, size, disabled, onClick, children

#### `<Card />`

A container component for displaying content in a boxed layout with optional title and hover effects.

#### `<TaskManager />`

Complete task management system with localStorage persistence, filtering, and task operations.

#### `<APIDataDisplay />`

Fetches and displays posts from JSONPlaceholder API with search, pagination, loading and error states.

#### `<Navbar />`

Navigation bar with theme switcher and responsive design.

#### `<Footer />`

Footer with links, social media icons, and copyright information.

### Context & Hooks

- **ThemeContext**: Provides theme management across the application
- **useLocalStorageTasks** (Custom Hook): Manages tasks with automatic localStorage synchronization
- **useFetch** (Custom Hook): Handles API requests with loading and error states

## 🌐 API Integration

This application integrates with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch and display posts with full search and pagination support.

## 🚀 Deployment

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

## 🔗 Live Demo

**Deployed Application URL:** [Add your deployment URL here]

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - useState, useEffect, useContext
- **Context API** - Global state management
- **LocalStorage API** - Client-side data persistence
- **Fetch API** - HTTP requests
- **JSONPlaceholder** - Fake REST API

## 📚 Learning Outcomes

This project demonstrates:

1. ✅ Creating a React application with Vite
2. ✅ Building reusable components with props
3. ✅ Managing state with hooks (useState, useEffect, useContext)
4. ✅ Creating and using custom hooks
5. ✅ Implementing Context API for global state
6. ✅ Integrating external APIs with error handling
7. ✅ Styling with Tailwind CSS
8. ✅ Implementing dark/light theme switching
9. ✅ Creating responsive layouts
10. ✅ Adding animations and transitions
11. ✅ Using localStorage for data persistence
12. ✅ Implementing search and pagination features

## 👨‍💻 Author

**Samuel Taiwo**

- GitHub: [@Taiwosamuel8364](https://github.com/Taiwosamuel8364)
- PLP Academy Student
- Deplyed url: https://react-js-jsx-and-css-mastering-front-end-uean.onrender.com

## 🙏 Acknowledgments

- **PLP Academy** - For providing the learning opportunity
- **React Team** - For the amazing framework
- **Tailwind Labs** - For Tailwind CSS
- **JSONPlaceholder** - For the free API service

## 📝 Assignment Requirements Checklist

- ✅ **Task 1: Project Setup**
  - ✅ React app created with Vite
  - ✅ Tailwind CSS installed and configured
- ✅ **Task 2: Component Architecture**
  - ✅ Button component with variants
  - ✅ Card component for content display
  - ✅ Navbar and Footer components
- ✅ **Task 3: State Management and Hooks**
  - ✅ TaskManager with full functionality
  - ✅ useState, useEffect, useContext
  - ✅ Custom hooks for localStorage
- ✅ **Task 4: API Integration**
  - ✅ JSONPlaceholder API integration
  - ✅ Loading and error states
  - ✅ Search and pagination
- ✅ **Task 5: Styling with Tailwind CSS**
  - ✅ Responsive design
  - ✅ Dark/light theme switcher
  - ✅ Custom animations

---

Made with ❤️ for PLP Academy Week 3 Assignment
