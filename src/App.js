import './app.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Algebra from "./components/algebra";

function App() {
    return (
        <div className="App"
             style={{display: "flex", flexDirection: "column", height: "100vh", margin: "0 1rem 0 1rem"}}>
            <Header/>
            <Algebra/>
            <Footer/>
        </div>
    );
}

export default App;
