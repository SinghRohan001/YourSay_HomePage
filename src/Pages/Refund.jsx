import React from 'react'

const Refund = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
    <div className="mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-t-lg">
        Cancellation & Refund Policy
      </h1>
      <div className='p-8 pt-2'>

      <p className="mb-4 text-gray-700">
        <strong>ASAR GAMING NETWORK PRIVATE LIMITED</strong> believes in helping its customers as far as possible,
        and has therefore implemented a liberal cancellation policy. Please read the details below to understand our
        policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Cancellation Policy</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-3">
        <li>
          Cancellations will be considered only if the request is made immediately after placing the order. However,
          the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants
          and they have initiated the process of shipping them.
        </li>
        <li>
          ASAR GAMING NETWORK PRIVATE LIMITED does not accept cancellation requests for perishable items such as
          flowers or eatables. However, a refund or replacement can be made if the customer establishes that the
          quality of the product delivered is not good.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Refund Policy</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-3">
        <li>
          In case of receipt of damaged or defective items, please report the same to our Customer Service team. The
          request will, however, be entertained once the merchant has checked and determined the issue at their end.
          This should be reported within <strong>7 days</strong> of receiving the product.
        </li>
        <li>
          If the product received does not match what was shown on the site or does not meet your expectations, you
          must bring it to the notice of our customer service within <strong>7 days</strong> of receiving the product.
          The Customer Service Team will review your complaint and take an appropriate decision.
        </li>
        <li>
          For products that come with a manufacturer warranty, please contact the manufacturer directly for resolution.
        </li>
        <li>
          In case of any refunds approved by ASAR GAMING NETWORK PRIVATE LIMITED, it will take
          <strong> 9-15 days</strong> for the refund to be processed and credited to the end customer.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions or concerns about this policy, please contact our Customer Service team through the
        contact information provided on our website.
      </p>
      </div>
    </div>
  </div>
  )
}

export default Refund