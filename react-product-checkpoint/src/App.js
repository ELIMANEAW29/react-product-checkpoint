import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

import "./App.css";

const firstName = "Elimane";

function App() {
  return (
    <main className="page">
      <Container className="app-container">
        <div className="intro">
          <span className="badge-custom">REACT + JSX</span>
          <h1>Notre produit</h1>
          <p>Une présentation moderne réalisée avec des composants React.</p>
        </div>

        <Card className="product-card">
          <div className="image-wrapper">
            <Image />
            <span className="featured">★ PREMIUM</span>
          </div>

          <Card.Body className="product-body">
            <Name />
            <Description />
            <Price />

            <button className="buy-button" type="button">
              Ajouter au panier
            </button>
          </Card.Body>
        </Card>

        <section className="hello-message">
          {firstName ? (
            <>
              <h3>Hello, {firstName} ! 👋</h3>
              <p>Merci de découvrir notre produit.</p>

              <div className="hello-image">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                  alt="Produit présenté"
                />
              </div>
            </>
          ) : (
            <h3>Hello, there !</h3>
          )}
        </section>
      </Container>
    </main>
  );
}

export default App;