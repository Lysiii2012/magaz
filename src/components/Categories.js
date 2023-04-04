import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'closet',
                    name: 'Шкаф купе'
                },
                {
                    key: 'sofa',
                    name: 'Диван'
                },
                {
                    key: 'bed',
                    name: 'Кровать'
                },
                {
                    key: 'tables',
                    name: 'Стул и стол'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(
            el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
                
                {el.name}
                </div>
            )
        )}
      </div>
    )
  }
}

export default Categories