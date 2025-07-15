import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaQuestionCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaDiscord,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const faqs = [
  {
    question: "How do I create a new project?",
    answer: "Go to the Projects section and click the 'New Project' button. Fill in the details and save.",
  },
  {
    question: "How can I assign tasks to team members?",
    answer: "Navigate to Tasks, create a new task, and select a team member from the 'Assign To' dropdown.",
  },
  {
    question: "Can I integrate with other tools?",
    answer: "Currently, integrations are in development. Stay tuned for updates in the upcoming releases.",
  },
  {
    question: "How do I reset my password?",
    answer: "Go to Settings → Account → Change Password. If you've forgotten it, use the 'Forgot Password' option on the login screen.",
  },
];
export const Help_Support = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-[#0B1D51] text-[#91C8E4] px-8 py-10">
      <motion.div
        className="max-w-4xl mx-auto bg-zinc-900 p-8 rounded-xl shadow-lg border border-purple-800"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-purple-400 mb-6 flex items-center gap-2">
          <FaQuestionCircle /> Help & Support
        </h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="bg-zinc-800 rounded-lg p-4 border border-zinc-700"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left font-medium"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-sm text-gray-300"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-zinc-800 p-4 rounded border border-zinc-700">
              <FaEnvelope className="text-purple-400 text-xl mb-2" />
              <p>Email us</p>
              <p className="text-purple-300">support@chatifyapp.com</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded border border-zinc-700">
              <FaPhoneAlt className="text-purple-400 text-xl mb-2" />
              <p>Call us</p>
              <p className="text-purple-300">+1 (555) 123-4567</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded border border-zinc-700">
              <FaDiscord className="text-purple-400 text-xl mb-2" />
              <p>Join Discord</p>
              <p className="text-purple-300">discord.gg/chatify</p>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
