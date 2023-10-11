import Header from "./Header";
import Footer from "./Footer";
import "./main.css";

const ClientLayouts = ({children}) =>{
    return (
        <div>
            <Header/>
            <div className="body">{children}</div>
            <Footer/>
        </div>   
    )
}

export default ClientLayouts;