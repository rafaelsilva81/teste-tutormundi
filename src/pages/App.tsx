import { motion } from "framer-motion";
import livroIcon from "../assets/livro.png";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center gap-6">
      <motion.img
        src={livroIcon}
        alt="Livro"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="text-4xl w-60 text-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Como foi a ajuda do tutor?
      </motion.h1>

      {/* Escala de likert de estrelas */}
      <StarRating />

      {/* Botões do rodapé */}
      <Footer />
    </div>
  );
}

export default App;
