import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import AlertMessage from "../Alert";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const allowedDomains = [
    "gmail.com",
    "outlook.com",
    "hotmail.com",
    "yahoo.com",
    "icloud.com",
    "protonmail.com",
  ];

  const [sending, setSending] = useState(false);

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const domain = email.split("@")[1];
    return emailRegex.test(email) && allowedDomains.includes(domain);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(form.email)) {
      showAlert(
        "Por favor ingresá un correo válido (Gmail, Outlook, etc.)",
        "error"
      );
      return;
    }

    setSending(true);

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(() => {
        showAlert("Mensaje enviado correctamente", "success");
        setForm({ name: "", email: "", message: "" });
        setSending(false);
      })
      .catch(() => {
        showAlert("Error al enviar el mensaje", "error");
        setSending(false);
      });
  };

  return (
    <Element name="contact">
      <motion.section
        className="w-full min-h-screen bg-[#161616] text-white px-6 sm:px-10 lg:px-20 py-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          ¿Hablamos?
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-[#1e1e1e] text-white border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-[#1e1e1e] text-white border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="bg-[#1e1e1e] text-white border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-purple-500 resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded text-white font-medium disabled:opacity-50"
          >
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </motion.section>
      {alert && (
        <AlertMessage
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
    </Element>
  );
};

export default Contact;
