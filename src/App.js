import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
            <div className='container'>
            <h1 className='mt-3'>Shopping App</h1>
                <div className='row mt-3'>
                  <div className="App">
                    <CartValue />
                  </div>
                  <div className="App">
                    <ExpenseList />
                  </div>
                  <div className="App">
                    <ItemSelected/>
                  </div>
                  <div className="App">
                    <Location />
                  </div>
                </div>
            </div>
        </AppProvider>
  );
}

export default App;
