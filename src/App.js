import './app.css'
import EEA from "./components/EEA";
import Phi from "./components/Phi";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="App" style={{ display: "flex", flexDirection: "column", height: "100vh", margin: "0 1rem 0 1rem" }}>
            <Header />
            <div className="content" style={{ display: "flex", flexWrap: "wrap" }}>
                <EEA />
                <Phi />
            </div>
            <Footer />
        </div>
    );
}

export default App;
