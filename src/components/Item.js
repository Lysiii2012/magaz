import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} 
        onClick={() => this.props.onShowItem(this.props.item)}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.dest}</p>
        <b>{this.props.item.prise}$</b>
        <div className='add_to_car' onClick={() => (
            this.props.onAdd(this.props.item)
        )}>+</div>
      </div>
    )
  }
}

export default Item