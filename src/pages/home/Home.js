import React from 'react'
import Landing from '../../components/landing/Landing'
import DefaultLayout from '../../components/layout/DefaultLayout'

export const Home = () => {
    return (
        <div>
           <DefaultLayout>
               <Landing/>
            </DefaultLayout>
        </div>
    )
}

