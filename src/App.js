import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Buy from "./routes/Buy";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buy" element={<Buy />} />
            </Routes>
        </>
    );
}
export default App;