import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskManager from "./components/TaskManager";
import APIDataDisplay from "./components/APIDataDisplay";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 w-full">
        {/* Welcome Section */}
        <section id="home" className="mb-12 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to PLP Task Manager
            </h1>
            <p className="text-lg opacity-90">
              A modern, responsive task management application built with React,
              Tailwind CSS, and Vite. Manage your tasks efficiently with a
              beautiful interface that adapts to your preferences.
            </p>
          </div>
        </section>

        {/* Task Manager Section */}
        <section id="tasks" className="mb-12 animate-slide-in">
          <TaskManager />
        </section>

        {/* API Data Section */}
        <section id="api-data" className="mb-12 animate-slide-in">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Posts from API</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Browse posts fetched from JSONPlaceholder API with search and
              pagination features.
            </p>
          </div>
          <APIDataDisplay />
        </section>

        {/* About Section */}
        <section id="about" className="mb-12 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
            <h2 className="text-3xl font-bold mb-4">About This Project</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                This project was built as part of the PLP Academy Week 3
                assignment, demonstrating proficiency in modern React
                development practices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Features
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Reusable React components</li>
                    <li>State management with hooks</li>
                    <li>LocalStorage persistence</li>
                    <li>API integration with error handling</li>
                    <li>Dark/Light theme switcher</li>
                    <li>Fully responsive design</li>
                    <li>Search and pagination</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Technologies Used
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>React 18</li>
                    <li>Vite</li>
                    <li>Tailwind CSS</li>
                    <li>React Hooks (useState, useEffect, useContext)</li>
                    <li>Custom Hooks</li>
                    <li>JSONPlaceholder API</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
