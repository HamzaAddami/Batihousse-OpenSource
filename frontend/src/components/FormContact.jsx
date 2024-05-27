import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; 
import toast,{Toaster} from "react-hot-toast";

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/messages', formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="bg-bg1 pt-16 lg:pt-32">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-auto max-w-screen-xl px-4 py-16 max-sm:pt-0 max-sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12"
               data-aos="fade-right"
               data-aos-duration="1200">
            <p className="max-w-xl lg:text-6xl max-sm:text-2xl font-bold text-primary" id="font-family">
              Contactez-Nous
            </p>
            <div className="mt-8 text-gray-400">
              <p>
                Envoyer Nous Votre Messages.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"
               data-aos="fade-left"
               data-aos-duration="1200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-secondary"
                >
                  <span className="font-bold text-white text-xl relative z-10 group-hover:text-secondary duration-500">Envoyer</span>
                  <span className="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:-translate-x-full h-full"></span>
                  <span className="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-x-full h-full"></span>
                  <span className="absolute top-0 left-0 w-full bg-secondary duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                  <span className="absolute delay-300 top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContact;
