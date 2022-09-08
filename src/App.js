import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";
import Main from "./components/Main/Main";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer/Footer";


const App = () => {

   

    return (
        <BrowserRouter>
            <Header />
            <Main/>
            <ItemCount stock={10} initial={1} onAdd={0}/>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
 