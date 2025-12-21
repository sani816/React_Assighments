import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Todo from "./Todo";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

function App(){
    return(
        <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/aboutus" element={<AboutUs/>}> </Route>
            <Route path="/todo" element={<Todo/>}> </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App;