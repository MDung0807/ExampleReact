import Header from "./Header";
import Footer from "./Footer";

const AdminLayouts = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    );
}

export default AdminLayouts;