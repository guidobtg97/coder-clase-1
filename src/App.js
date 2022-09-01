import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";
import Main from "./components/Main/Main";


const App = () => {

   

    return (
        <>
        <Header />
        <Main/>
        <ItemCount stock={10} initial={1} onAdd={0}/>
        </>
    );
};

export default App;
 