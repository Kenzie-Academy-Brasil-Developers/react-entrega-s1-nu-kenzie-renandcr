import "./style.css";

export const HomePage = ({ HomeImg, NuKenzie, setPage }) => {
  return (
    <div className="home-section-parent">
      <main className="page-main">
        <section className="page-section-left">
          <img src={NuKenzie} alt="Logo Nu Lenzie" />
          <h1>Centralize o controle das suas finanças</h1>
          <h4>de forma rápida e segura</h4>
          <button onClick={() => setPage(false)}>Iniciar</button>
        </section>
        <section className="page-section-right">
          <img src={HomeImg} alt="Imagem página inicial" />
        </section>
      </main>
    </div>
  );
};
