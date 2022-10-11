import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import CartProvider from "./context/CartContext";


const App = () => {
    return (
        <CartProvider>
        <BrowserRouter>
            <Header />
            <Main/>
            <Footer/>
        </BrowserRouter>
        </CartProvider>
    );
};

export default App;
 