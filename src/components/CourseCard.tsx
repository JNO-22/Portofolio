import { motion, AnimatePresence } from "framer-motion";

type CourseCardProps = {
  course: {
    title: string;
    description: string;
    certificateImage?: string;
    certificateLink?: string;
  };
  isActive: boolean;
  isInactive: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay: number;
};

const CourseCard = (props: CourseCardProps) => {
  const { course, isActive, isInactive, onHover, onLeave, delay } = props;

  const hasImage = !!course.certificateImage;
  const hasLink = !!course.certificateLink;

  const openImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(course.certificateImage, "_blank");
  };

  return (
    <motion.div
      className={`
        bg-[#1e1e1e] border border-gray-700 rounded-lg p-6 text-white text-center overflow-hidden
        transition-all duration-300 ease-in-out flex flex-col justify-between
        ${
          isInactive
            ? "scale-95 opacity-50 blur-[1px]"
            : "scale-100 opacity-100"
        }
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onMouseEnter={hasImage ? onHover : undefined}
      onMouseLeave={hasImage ? onLeave : undefined}
    >
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-sm text-gray-300">{course.description}</p>

      {hasLink && (
        <a
          href={course.certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-blue-400 hover:underline"
        >
          Ver certificado en Alura
        </a>
      )}

      <AnimatePresence>
        {isActive && hasImage && (
          <motion.div
            key="certificado"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-4 rounded"
          >
            <img
              src={course.certificateImage}
              alt={`Certificado de ${course.title}`}
              onClick={openImage}
              className="w-full max-h-[250px] object-contain rounded shadow-lg cursor-zoom-in hover:brightness-110 transition"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!hasImage && (
        <p className="text-xs text-gray-500 mt-4 italic">
          (Este curso no tiene certificado)
        </p>
      )}
    </motion.div>
  );
};

export default CourseCard;
