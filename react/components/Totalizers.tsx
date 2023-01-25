import React from 'react'

const Totalizers = (totalizers: any) => {
  const { id, name, value } = totalizers.total

  console.log(id, name, value)

  return (
    <>
      <div>
        <p>Tenemos x items en tu compra</p>
        <p>Total: x</p>
      </div>
    </>
  )
}

export default Totalizers
