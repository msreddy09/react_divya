import { Alert, Button } from 'reactstrap';
import './App.css';
import TrackerHeader from './components/TrackerHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionForm from './components/TransactionForm';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Report from './components/Report';
import Expense from './components/Expenses';
import Income from './components/Income';
import { ExpenseProvider } from './contexts/BudgetContext';
import CatergoriesForm from './components/CategoriesForm';
import DemoState from './components/DemoState';
import Todos from './components/Todos';

function App() {
  const [modal, setModal] = useState(false);
  const [catModal, setCatModal] = useState(false);

  const toggle = () => setModal(!modal);
  const catToggle = () => setCatModal(!catModal);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {

    setTimeout(() => setShowSuccessAlert(false), 5000);

  }, [showSuccessAlert])
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  const inputElement = useRef();

  return (
    <ExpenseProvider>
      <div className="App">

        <Routes>
          <Route path='/' element={<TrackerHeader />}>
            <Route index element={<Report />} />
            <Route path="/report" element={<Report />} />
            <Route path="/income" element={<Income toggle={toggle} />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/demostate" element={<DemoState />} />
          </Route>
        </Routes>

        <Button className='addTran' color='primary' onClick={toggle} >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-building-fill-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0" />
            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-3.59 1.787A.5.5 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.5 4.5 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
          </svg>
        </Button>
        <Button className='addCat' color='primary' onClick={catToggle} >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
          </svg>
        </Button>
        <TransactionForm modal={modal} toggle={toggle} handleAlerts={(data) => setShowSuccessAlert(data)} />
        <CatergoriesForm modal={catModal} toggle={catToggle}></CatergoriesForm>
        {showSuccessAlert && <Alert>
          Succefully Saved.
        </Alert>}
      </div>

      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <input type="text" ref={inputElement} />
      <button onClick={() => {
        alert(inputElement.current.value)
      }}>On button click</button>

    </ExpenseProvider>
  );
}

export default App;


// var obj = {
//   expenses: [{category: 'food', amount: 200, date: '', notes: 'Outing day'}, {category: 'travel', amount: 300, date: '', notes: 'Outing day'}],
//   income: [{category: 'Salary', amount: 1000, date: '', notes: ''}, {category: 'Rent', amount: 300, date: '', notes: ''}]
// }

// TotalIncome: 1300
// TotalExpense: 500
// Total Outstanding : 800

