import React from 'react'


const EmailVerification = () => {
    return (
        <div>
            <Card className="p-3">
        <Form className="m-3" onSubmit={handleOnSubmit}>
          <h2>Enter the verification code sent to your email address</h2>
          <p>If the email address you provided is correct you should have recieve the code.</p>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              name="fname"
              placeholder="Enter Code"
              
              required
            />
          </Form.Group>

          
        </Form>
      </Card>
        </div>
    )
}

export default EmailVerification
