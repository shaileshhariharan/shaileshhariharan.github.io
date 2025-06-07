import { useState } from "react";
import { Send, Mail, Linkedin, Github } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const FORMSPREE_URL = "https://formspree.io/f/mdkgwdzj";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });

        // Hide success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setSubmitError(error.message || "Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-playfair font-medium mb-16">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <p className="text-lg text-gray-600  mb-8">
              Interested in working together? I'm always open to discussing new
              projects, creative ideas or opportunities to be part of your
              vision.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300   rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200  transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300   rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200  transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700  mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300   rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200  transition-all duration-300"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
              {submitSuccess && (
                <div className="text-black  mt-2">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitError && (
                <div className="text-red-600 mt-2">Error: {submitError}</div>
              )}
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-6">Let's Connect</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail size={20} className="mt-1 mr-4 text-gray-600 " />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hariharanshailesh@gmail.com"
                    className="text-gray-600 hover:text-gray-900   transition-colors duration-300"
                  >
                    hariharanshailesh@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4">Social</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/shaileshhariharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200   transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} className="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shailesh-h-32a8b71a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200    transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="" />
                  </a>
                  <a
                    href="https://x.com/shailesh__h"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200    transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaXTwitter size={20} className="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
