"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Zap, Github, Twitter, Linkedin } from "lucide-react";

// NAVBAR DOCK
function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex gap-8 items-center bg-gray-900/80 backdrop-blur-lg rounded-full px-8 py-3 shadow-lg border border-white/10">
        <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
        <a href="#how" className="text-gray-300 hover:text-white transition">How It Works</a>
        <a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a>
        <Button className="bg-indigo-500 hover:bg-indigo-600 rounded-full px-5 py-2">Get Started</Button>
      </div>
    </motion.nav>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white font-bold text-xl">StudyHub</h3>
          <p className="mt-3 text-sm">Collaborative workspace for students to study smarter together.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition"><Github /></a>
            <a href="#" className="hover:text-white transition"><Twitter /></a>
            <a href="#" className="hover:text-white transition"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} StudyHub. All rights reserved.
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-32 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Study Smarter. <br /> <span className="text-indigo-500">Together.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            StudyHub is your AI-powered collaborative study space. Organize, share, and learn — faster.
          </p>
          <div className="mt-8 flex gap-4">
            <Button className="bg-indigo-500 hover:bg-indigo-600 rounded-full px-6 py-3 flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="rounded-full px-6 py-3 border-gray-500 text-gray-300 hover:bg-gray-800">
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Animated Illustration Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 bg-indigo-500/10 border border-indigo-500 rounded-3xl flex items-center justify-center text-indigo-300">
            [3D Illustration / Lottie Animation Here]
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Students Love StudyHub</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: BookOpen, title: "AI Summaries", desc: "Turn hours of notes into minutes of insights." },
            { icon: Users, title: "Collaboration", desc: "Study with peers in real-time sessions." },
            { icon: Zap, title: "Exam Predictions", desc: "Get AI-powered probable exam questions." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition text-center"
            >
              <item.icon className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-20 text-center bg-gradient-to-r from-indigo-600 to-pink-500 rounded-t-[4rem]">
        <h2 className="text-4xl font-bold mb-6">Ready to Level Up Your Study Game?</h2>
        <Button className="bg-black text-white hover:bg-gray-900 rounded-full px-8 py-4 text-lg">
          Join Now
        </Button>
      </section>

      <Footer />
    </main>
  );
}
