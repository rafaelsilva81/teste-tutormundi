import livroIcon from "../assets/livro.png";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center gap-6">
      <img src={livroIcon} alt="Livro" />
      <h1 className="text-4xl w-60 text-center">Como foi a ajuda do tutor?</h1>

      {/* Escala de likert de estrelas */}
      <StarRating />

      {/* Botões do rodapé */}
      <Footer />
    </div>
  );
}

export default App;
