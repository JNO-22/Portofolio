import { motion } from "framer-motion";
const Courses = () => {
    return (
        <>
        <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex justify-center p-20">
            <h1 className="text-3xl">Proyectos</h1>

        </motion.section>
        </>
    );
}

export default Courses;