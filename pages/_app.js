import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import "../styles/Navibar.css";
import "../styles/Welcome.css";
import "../styles/CardSection.css";
import "../styles/CloudCard.css";
import "../styles/Footer.css";
import "../styles/Services.css";
import "../styles/PriceSection.css";
import "../styles/PriceCard.css";
import "../styles/ContactTitle.css";
import "../styles/ContactText.css";
import "../styles/ContactPlatform.css";
import "../styles/Multimedia.css";
import "../styles/SolutionTitle.css";
import "../styles/SolutionJourney.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
