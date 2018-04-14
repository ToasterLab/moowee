import React from 'react'
import classnames from 'classnames'
import './ItemList.css'

const ItemList = ({ items, label, className }) => items.length > 0 ? (
  <div className={classnames('item', className)}>
    <div className="left">
      <label><strong>{label}</strong></label>
    </div>
    <div className="right">
      {
        items.map((item, index) => (
          <span key={item.name}>
            {
              item.url ? (
                <a href={item.url}>
                  {item.name}
                </a>
              ) : item.name
            }
            {index === items.length -1 ? '' : ', '}
          </span>
        ))
      }
    </div>
  </div>
) : null

export default ItemList
