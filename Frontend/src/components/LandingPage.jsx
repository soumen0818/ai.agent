import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Triage",
    desc: "Automatically prioritize and assign tickets based on AI analysis.",
    icon: (
      <svg className="w-10 h-10 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12V4l9 5-9 5-9-5 9-5z" />
      </svg>
    ),
  },
  {
    title: "User-Friendly Interface",
    desc: "Manage tickets effortlessly with our intuitive dashboard.",
    icon: (
      <svg className="w-10 h-10 text-purple-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Real-Time Notifications",
    desc: "Stay updated with instant email notifications for ticket updates.",
    icon: (
      <svg className="w-10 h-10 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => navigate("/login");
  const handleSignUp = () => navigate("/signup");

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center py-24 relative z-10"
        >
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Welcome to AI Agent
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg md:text-2xl mb-10 text-gray-200"
          >
            Revolutionize your ticket management with cutting-edge AI solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex justify-center gap-6"
          >
            <button
              onClick={handleGetStarted}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </button>
            <button
              onClick={handleSignUp}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Sign Up
            </button>
          </motion.div>
        </motion.div>
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-700 opacity-30 rounded-full blur-3xl z-0"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl z-0"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </header>

      {/* Features Section */}
      <section className="py-20 flex-1">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-14"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.7 }}
                className="bg-gray-800 shadow-xl rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                {feature.icon}
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-16"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Sign up today and experience the future of ticket management.
          </p>
          <button
            onClick={handleSignUp}
            className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition-all duration-300"
          >
            Sign Up Now
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2025 AI Agent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;