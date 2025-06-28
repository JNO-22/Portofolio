import { motion } from "framer-motion";
import { type IconType } from "react-icons";

type IconWithColor = {
  icon: IconType;
  colorClass: string;
  label?: string;
};

type IconListProps = {
  icons: IconWithColor[];
};

const IconList = ({ icons }: IconListProps) => {
  return (
    <ul className="flex flex-row flex-wrap gap-4">
      {icons.map(({icon:Icon,colorClass,label}, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 10+index*10 , x:index*10 }}
          whileInView={{ opacity: 1, y: 0 , x:0  }}
          whileHover={{ opacity: 1, scale: 1.1 , x:0}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <Icon className={`${colorClass}`} size={50}  />
          {label && <span className="text-gray-300 pointer-events-none">{label}</span>}
        </motion.li>
      ))}
    </ul>
  );
};

export default IconList;
