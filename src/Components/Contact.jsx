import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Contact() {
  const navigate=useNavigate(-1)
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! (This is just a demo form).");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12 flex flex-col justify-center items-center">
      <Link
          className='text-2xl mr-[180vh] mb-[25vh] text-zinc-400 font-semibold h-fit w-fit hover:text-[#07E2F3] flex '
          onClick={() => navigate(-1)}
        >
          <i className='ri-arrow-left-line'></i> Back
        </Link>
      <div className="max-w-2xl w-full space-y-8 ">
        <h1 className="text-4xl font-bold text-[#07E2F3]">📩 Contact Us (No Backend)-No use</h1>

        <p className="text-gray-300">
          Have feedback, questions, or feature suggestions? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-400 font-semibold">Your Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#07E2F3]"
              type="text"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400 font-semibold">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="johndoe@example.com"
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#07E2F3]"
              type="email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400 font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us what's on your mind..."
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-md text-white resize-none focus:outline-none focus:ring-2 focus:ring-[#07E2F3]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#07E2F3] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#05bed0] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
