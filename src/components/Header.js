import React, { useState } from 'react'
import { FaShoppingCart} from "react-icons/fa"
import Burger from './Burger';
import Order from './Order'

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => summa += Number.parseFloat(el.prise))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
                )
            )}
            <p className='summa'>Сума: {new Intl.NumberFormat().format(summa)} $</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>
                Товара нету 
            </h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div className='navBar'>
           <div>
           <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>O нас</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop_cart_btn ${cartOpen && 'active'}`}/>
       
           </div>
        {cartOpen && (
            <div className='shop_cart'>
                {props.orders.length > 0 ? 
                    showOrders(props) : showNothing()}
            </div>
        )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
