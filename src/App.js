import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";



const App = () => {

   

    return (
        <>
        <Header />
        
        <ItemCount stock={10} initial={1} onAdd={0}/>
        </>
    );
};

export default App;
 