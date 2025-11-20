import React, { useState } from "react";
import linkedin from "../assets/social/linkedin.png";
import instagram from "../assets/social/ig.png";
import github from "../assets/social/github.png";
import tiktok from "../assets/social/tiktok.png";
import youtube from "../assets/social/youtube.png";
import line from "../assets/line_2_purple.png";
import { MdArrowOutward } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mnnwoqqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center pb-8">
          <span className="text-center text-4xl bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent font-bold md:text-5xl">
            Contact Me
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* SOCIALS */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4 bg-transparent p-4 rounded-xl border border-purple-600/50 shadow-purple-600 shadow-md">
            <div>
              <p className="flex items-center gap-x-3 text-lg">
                <span className="w-[30px] h-[2px] bg-purple-600"></span>Connect
                With Me
              </p>
            </div>

            <div className="flex flex-col gap-y-4">
              {[
                {
                  href: "https://www.linkedin.com/in/dionwangsa/",
                  img: linkedin,
                  title: "Let's Connect",
                  subtitle: "on LinkedIn",
                  hover: "hover:from-blue-500 hover:to-gray-400",
                },
                {
                  href: "https://www.instagram.com/dionwangsa/",
                  img: instagram,
                  title: "Follow Me",
                  subtitle: "on Instagram",
                  hover:
                    "hover:from-[#5342d6] hover:via-[#ec2148] hover:to-[#fec053]",
                },
                {
                  href: "https://github.com/dionwsaja",
                  img: github,
                  title: "Github",
                  subtitle: "@dionwsaja",
                  hover: "hover:from-gray-900 hover:to-gray-400",
                },
                {
                  href: "https://www.tiktok.com/@dionwan6?_t=ZS-8zC7UVBphoI&_r=1",
                  img: tiktok,
                  title: "Follow Me",
                  subtitle: "on TikTok",
                  hover:
                    "hover:from-gray-900 hover:via-[#00f7ef] hover:to-[#ff004f]",
                },
                {
                  href: "https://www.youtube.com/@dionwangsa",
                  img: youtube,
                  title: "Subscribe",
                  subtitle: "on YouTube",
                  hover: "hover:from-red-500 hover:to-gray-400",
                },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center bg-gradient-to-r from-gray-500 to-gray-400 rounded-lg px-6 py-3 gap-x-4 transition duration-150 ${link.hover}`}
                >
                  <img
                    src={link.img}
                    alt={`${link.title} icon`}
                    className="w-12 sm:w-14"
                  />
                  <div>
                    <h1 className="font-bold text-sm sm:text-base">
                      {link.title}
                    </h1>
                    <p className="text-xs sm:text-sm">{link.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="w-full lg:w-7/12 flex flex-col gap-y-4 p-4 border border-purple-600/50 rounded-lg shadow-md shadow-purple-600 bg-transparent">
            <div className="text-center">
              <p className="text-2xl font-bold md:text-3xl">Get In Touch</p>
              <p className="text-gray-400 text-sm sm:text-base">
                Have something to discuss? Send me a message and let's talk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
              {/* NAME */}
              <div className="flex flex-col">
                <label className="text-lg mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="outline-0 border-0 bg-white text-black px-4 py-3 rounded-lg"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col">
                <label className="text-lg mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="outline-0 border-0 bg-white text-black px-4 py-3 rounded-lg"
                />
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col">
                <label className="text-lg mb-1">Your Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="outline-0 border-0 bg-white text-black px-4 py-3 rounded-lg h-32"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center w-full py-3 rounded-lg bg-purple-600 hover:bg-white hover:text-purple-600 hover:border hover:border-purple-600 transition duration-150 font-medium"
              >
                {loading ? "Sending..." : "Send Message"}
                <span className="ml-2 text-lg">
                  <MdArrowOutward />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BACKGROUND LINE */}
      <img
        src={line}
        className="absolute top-0 -z-10 opacity-20 w-full h-full object-cover"
      />
    </div>
  );
};

export default Contact;
