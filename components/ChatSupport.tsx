'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { text: 'Hello! How can we help you today?', sender: 'bot' }
  ])

  const sendMessage = () => {
    if (!message.trim()) return
    setMessages([...messages, { text: message, sender: 'user' }])
    setMessage('')
    setTimeout(() => {
      setMessages(prev => [...prev, { text: 'Thanks for reaching out! Our team will respond shortly.', sender: 'bot' }])
    }, 1000)
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-600 text-black p-4 rounded-full shadow-lg transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-gray-900 rounded-xl shadow-2xl border border-gray-700"
          >
            <div className="bg-amber-500 text-black p-3 rounded-t-xl font-bold flex justify-between">
              <span>💬 LuxeAuto Support</span>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-70">✕</button>
            </div>
            <div className="h-80 overflow-y-auto p-3 space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-2 rounded-lg ${msg.sender === 'user' ? 'bg-amber-500 text-black' : 'bg-gray-800 text-gray-300'}`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-700 flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-400 text-white"
              />
              <button onClick={sendMessage} className="bg-amber-500 text-black px-3 rounded-r-lg">Send</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatSupport