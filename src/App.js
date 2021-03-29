import EEA from "./components/EEA";
import './app.css'
import Phi from "./components/Phi";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OrdFinder from "./components/OrdFinder";

function App() {
    return (

        <div className="App">
            <Header/>
            <div className="content" style={{display: "flex", flexWrap: "wrap"}}>
                <EEA/>
                <Phi/>
                <OrdFinder/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
