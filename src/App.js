import * as React from 'react';
import './App.css';
import AddItemModal from './components/AddItemModal';
import ItemList from './components/ItemList';
import store from './store';
import { useSelector } from 'react-redux';
import {useEffect} from "react";

function App() {
    const items = useSelector((state) => state.itemsReducer.items)

    useEffect(() => {

    });

    return (
    <div className="App">
      <header className="App-header">
        Shopping Lists
      </header>
        <section className="main">

            {items.length === 0 &&
                <div className="shoppingListIsEmpty">
                    <div>Your shopping list is empty :( </div>
                </div>
            }

            <AddItemModal />

            <section className="itemList">
            { items.length !== 0  && items.map((item, i) => (
                <ItemList
                 key={i}
                 i={i}
                 name={item.name}
                 description={item.description}
                />
            )) }
            </section>

        </section>

    </div>
  );
}

export default App;