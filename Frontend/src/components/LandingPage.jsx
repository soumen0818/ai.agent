import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Welcome to AI Agent
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Revolutionize your ticket management with cutting-edge AI solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </button>
            <button
              onClick={handleSignUp}
              className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Triage</h3>
              <p className="text-gray-400">
                Automatically prioritize and assign tickets based on AI analysis.
              </p>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">User-Friendly Interface</h3>
              <p className="text-gray-400">
                Manage tickets effortlessly with our intuitive dashboard.
              </p>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Real-Time Notifications</h3>
              <p className="text-gray-400">
                Stay updated with instant email notifications for ticket updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Sign up today and experience the future of ticket management.
          </p>
          <button
            onClick={handleSignUp}
            className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2025 AI Agent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;