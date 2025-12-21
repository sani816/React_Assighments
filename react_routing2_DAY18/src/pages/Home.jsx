import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
    <h2>This is home page</h2>
    <Link to="/login">Go to login</Link>
    
    </div>
    )
}
export default Home;