export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize: "42px"}}>
        🏈 Le Foot US Média
      </h1>

      <h2>
        Power Ranking NFL
      </h2>

      <p>
        Classe les 32 équipes NFL de la meilleure à la moins bonne.
      </p>

      <button style={{
        marginTop: "30px",
        padding: "15px 30px",
        fontSize: "18px",
        cursor: "pointer"
      }}>
        Commencer le classement
      </button>
    </main>
  );
}
