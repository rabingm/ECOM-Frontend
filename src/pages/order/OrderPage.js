import React from 'react'
import Cart from '../../components/cart/Cart'
import { CheckOut } from '../../components/checkout/CheckOut'
import DefaultLayout from '../../components/layout/DefaultLayout'

const CartPage = () => {
    return (
        <DefaultLayout>
            <CheckOut/>
        </DefaultLayout>
    )
}

export default CartPage
