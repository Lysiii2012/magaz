import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";


export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.prise}$</b>
        <AiFillDelete className='delete_icon' onClick={() => this.props.onDelete(this.props.item.id)}></AiFillDelete>
      </div>
    )
  }
}

export default Order