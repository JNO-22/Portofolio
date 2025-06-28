import { motion } from "framer-motion";

type AlertMessageProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

const AlertMessage = ({ message, type, onClose }: AlertMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-4 rounded shadow-md z-50 
        ${
          type === "success"
            ? "bg-green-600 text-white"
            : "bg-red-600 text-white"
        }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        <button onClick={onClose} className="text-white font-bold">
          ✕
        </button>
      </div>
    </motion.div>
  );
};

export default AlertMessage;
