import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { EmailVerification } from "../../components/verification/Verification";

const Verification = () => {
    return (
        <div>
            <DefaultLayout>
                <EmailVerification/>
            </DefaultLayout>
        </div>
    )
}

export default Verification
