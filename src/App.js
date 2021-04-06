import './app.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Algebra from "./components/algebra";
import Combinatorics from "./components/combinatorics";
import Graphs from "./components/graphs";
import Logic from "./components/logic";

function App() {
    return (
        <div className="App"
             style={{display: "flex", flexDirection: "column", height: "100%", width: "100%", minHeight: "100vh"}}>
            <Header/>
            <Algebra/>
            <Graphs/>
            <Combinatorics/>
            <Logic/>
            <Footer/>
        </div>
    );
}

export default App;
