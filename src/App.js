import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import React from "react";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Кровать',
          img: 'Discont.jpg',
          dest: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus.',
          category: 'bed',
          prise:'49.99'
        },
        {
          id: 2,
          title: 'Стул и стол',
          img: 'mebel_iz.jpg',
          dest: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus.',
          category: 'tables',
          prise:'39.99'
        },
        {
          id: 3,
          title: 'Шкаф купе',
          img: 'mebel-1.jpg',
          dest: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus.',
          category: 'closet',
          prise:'60.00'
        },
        {
          id: 4,
          title: 'Диван',
          img: 'mebeli.jpg',
          dest: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus.',
          category: 'sofa',
          prise:'29.99'
        },
        {
          id: 5,
          title: 'Диван и кресла',
          img: 'miagka.jpg',
          dest: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus.',
          category: 'sofa',
          prise:'49.99'
        },
        {
          id: 6,
          title: 'Диван берюзовый',
          img: 'miagkaia.jpg',
          dest: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, necessitatibus.',
          category: 'sofa',
          prise:'89.99'
        }
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
    return (
    <div className="wrapper"> 
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}></Categories>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      
      {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
    </div>
  );
  }

onShowItem (item) {
  this.setState({fullItem: item})
  this.setState({ShowFullItem: !this.state.ShowFullItem})
}

chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState(
    {
      currentItems: this.state.items.filter(el => el.category === category)
    }
  )
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !==id)})          
}


  addToOrder(item) {
    let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id) {
    isInArray = true
  }
})
  if (!isInArray) {
    this.setState({orders: [...this.state.orders, item ] })
  }
  }
}

export default App;
