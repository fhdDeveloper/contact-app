
import './App.css';
import AddContact from "./component/AddContact";


function App() {
    const addContactHandler =(e)=>{
        e.preventDefault();
        console.log('ho')
    }
  return (
    <main className="App">
     <h1>contact App</h1>
      <AddContact addContactHandler={addContactHandler}/>
        <section>Contact List</section>
    </main>
  );
}

export default App;
