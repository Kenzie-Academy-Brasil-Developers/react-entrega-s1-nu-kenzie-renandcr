import "./index.css";

function Header({ img, setPage }) {
  return (
    <header className="App-header-new">
      <div className="logo-div">
        <img src={img} alt="Logo Kenzie Academy Brasil" />
      </div>
      <div className="start-div">
        <button onClick={() => setPage(true)}>Início</button>
      </div>
    </header>
  );
}
export default Header;
