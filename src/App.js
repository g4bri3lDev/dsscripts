import './app.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Algebra from "./components/algebra";
import Combinatorics from "./components/combinatorics";
import Graphs from "./components/graphs";

function App() {
    return (
        <div className="App"
             style={{display: "flex", flexDirection: "column", height: "100vh", margin: "0 1rem 0 1rem"}}>
            <Header/>
            <Algebra/>
            <Graphs/>
            <Combinatorics/>
            <Footer/>
        </div>
    );
}

export default App;
