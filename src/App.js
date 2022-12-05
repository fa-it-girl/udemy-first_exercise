import Expenses from "./components/Expenses";

function App() {
  const expenses =[
    { id: 'e1',title: 'car insurance', amount: 289.9, date: new Date( 2021, 2, 28)},
    { id: 'e2',title: 'toilet papaer', amount: 45, date: new Date( 2020, 2, 28)},
    { id: 'e3',title: 'newdesk', amount: 459, date: new Date( 2021, 2, 8)},
    { id: 'e4',title: 'new tv', amount: 799.40, date: new Date( 2020, 5, 28)},
  ]



  return (
   <div>
     <h2>lets get started</h2>
     <Expenses items = {expenses}/>
  
   </div>

  );
}

export default App;
  