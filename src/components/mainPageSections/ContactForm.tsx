"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [succeeded, setSucceeded] = useState<boolean>(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!recaptchaValue) return;
    setSubmitting(true);
    setErrors(null);
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_FIGATA_EMAIL}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setSucceeded(true);
        setFormData({ name: "", email: "", message: "" });
        setRecaptchaValue(null);
      } else {
        setErrors(data.message || "Something went wrong.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrors(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Toast messages
  useEffect(() => {
    if (succeeded) {
      toast.success("Message sent successfully! We'll respond shortly.", {
        onClose: () => setSucceeded(false),
      });
    }
  }, [succeeded]);

  useEffect(() => {
    if (errors) {
      toast.error(errors, {
        onClose: () => setErrors(null),
      });
    }
  }, [errors]);

  return (
    <section className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-figata-cup mb-8 text-center">
          Send Us a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
              onChange={(value: string | null) => setRecaptchaValue(value)}
            />
          </div>

          <button
            type="submit"
            disabled={!recaptchaValue || submitting}
            className={`w-full py-3 px-6 text-center rounded-lg font-medium transition-colors ${
              recaptchaValue && !submitting
                ? "bg-figata-cup text-white hover:bg-olive-700"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </section>
  );
}
