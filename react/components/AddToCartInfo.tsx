import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'

import styles from './styles.css'
import ButtonGroup from './ButtonGroup'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)

  const productInfo = useProduct()
  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  console.log(productInfo)

  return (
    <div className={container}>
      {items.map((item: any, index: number) => {
        return (
          <div key={index} className={container__item}>
            <div>
              <img src={item.imageUrls.at1x} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>${item.price / 100}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </div>
        )
      })}
      <div>
        <p>Tenemos {items.lenght} items</p>
        <p>Total: ${totalizers[0]?.value / 100}</p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo
