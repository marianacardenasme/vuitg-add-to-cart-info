import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'

import ProductGroup from './ProductGroup'
import Totalizers from './Totalizers'
import ButtonGroup from './ButtonGroup'

const AddToCartInfo = () => {
  const productInfo = useProduct()
  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  console.log(productInfo)
  console.log('Info de la orden: ', items, totalizers)

  return
  ;<>
    {/* listado de productos */}
    <ProductGroup />
    {/* valor total */}
    <Totalizers />
    {/* acciones */}
    <ButtonGroup />
  </>
}

export default AddToCartInfo
