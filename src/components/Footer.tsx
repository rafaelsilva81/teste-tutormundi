import clsx from "clsx";
import { motion } from "framer-motion";
import { useAtom } from "jotai/react";
import { ratingAtom } from "../atoms/ratingAtom";

const Footer = () => {
  const [rating, _] = useAtom(ratingAtom);

  return (
    <motion.footer
      className="fixed bottom-0 w-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-2 m-8 font-semibold font-secondary">
        <button className="px-6 py-2 transition duration-200 ease-out rounded-full text-primary hover:text-primary/80 active:bg-primary/40">
          PULAR
        </button>

        <button
          className={clsx(
            "rounded-full text-white py-2 px-6 transition ease-out duration-200 shadow-lg",
            rating === 0
              ? "bg-secondary cursor-not-allowed shadow-secondary"
              : "bg-primary hover:bg-primary/80 active:bg-primary/40 shadow-primary"
          )}
        >
          CONFIRMAR
        </button>
      </div>
    </motion.footer>
  );
};

export default Footer;
