import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Fifth = () => {
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSender(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sender || !message) return;

    setLoading(true);

    fetch('https://api.apispreadsheets.com/data/KGVXul9oElixwhEB/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: { sender, message } })
    })
      .then((res) => {
        if (res.status === 201) {
          alert('Message sent successfully! Thank you for your message.');
          setSender('');
          setMessage('');
        } else {
          alert('Failed to save the message.');
        }
      })
      .catch(() => {
        alert('An error occurred. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full gap-8 px-8 py-16 bg-gray-100 h-dvh font-Comfortaa"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      {/* Heading Animation */}
      <motion.h1
        className="text-4xl font-bold text-gray-800 font-gideon"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ amount: 0.5 }}
      >
        Messages
      </motion.h1>

      {/* Form Animation */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ amount: 0.5 }}
      >
        {/* Sender Input Animation */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ amount: 0.5 }}
        >
          <label htmlFor="sender" className="mb-2 text-sm font-medium text-gray-700">
            Sender Name:
          </label>
          <input
            id="sender"
            type="text"
            value={sender}
            onChange={handleSenderChange}
            placeholder="Enter your name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </motion.div>

        {/* Message Textarea Animation */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
            rows={4}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </motion.div>

        {/* Submit Button Animation */}
        <motion.button
          disabled={loading}
          type="submit"
          className="w-full px-4 py-2 text-white rounded-md bg-inv-dark hover:bg-black focus:outline-none focus:ring-2 focus:ring-inv-dark"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ amount: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Fifth;
