import React, { useEffect } from 'react'

const TermsAndCondition = () => {

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
    <div className="mx-auto bg-white shadow-md rounded-md w-full">
      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 w-full rounded-t-lg'>
      <h1 className="text-3xl text-white font-bold mb-6">
        Terms & Conditions
      </h1>
      </div>
      <div className='p-8'>
      <p className="text-sm text-gray-500 mb-4">Last Updated: 18-11-2024 14:03:27</p>

<p className="mb-4 text-gray-700">
  These Terms and Conditions, along with the Privacy Policy and any other applicable terms
  (collectively, “Terms”), constitute a binding agreement between{" "}
  <strong>ASAR GAMING NETWORK PRIVATE LIMITED</strong> (“Website Owner,” “we,” “us,” or “our”) and{" "}
  <strong>you</strong> (“you” or “your”) regarding your use of our website, goods, or services
  (collectively referred to as “Services”).
</p>
<p className="mb-4 text-gray-700">
  By accessing our website or using our Services, you acknowledge that you have read, understood, and agreed
  to these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time
  without prior notice. It is your responsibility to periodically review these Terms for updates.
</p>

<h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Use of Services</h2>
<ul className="list-disc pl-5 text-gray-700 space-y-3">
  <li>
    <strong>Account Information:</strong> You agree to provide accurate, true, and complete information
    during registration and to keep this information up-to-date. You are solely responsible for all actions
    taken through your account.
  </li>
  <li>
    <strong>No Warranty:</strong> Neither we nor any third parties guarantee the accuracy, timeliness,
    performance, or completeness of the information and materials provided on this website or through the
    Services. Such materials may contain inaccuracies or errors, and we expressly disclaim liability for any
    such inaccuracies or errors to the fullest extent permitted by law.
  </li>
  <li>
    <strong>Risk and Assessment:</strong> Your use of the Services is at your own risk and discretion. You
    must independently evaluate and ensure that the Services meet your requirements.
  </li>
</ul>

<h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Intellectual Property</h2>
<p className="mb-4 text-gray-700">
  All content on this website and the Services is proprietary to us. You are prohibited from claiming
  intellectual property rights, title, or interest in the content.
</p>

<h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Restrictions</h2>
<ul className="list-disc pl-5 text-gray-700 space-y-3">
  <li>
    You agree not to use the website or Services for unlawful, illegal, or prohibited activities under these
    Terms or applicable laws.
  </li>
  <li>
    Unauthorized use of the Website or Services may result in legal action.
  </li>
  <li>
    The website or Services may contain links to third-party websites. Upon accessing these links, you are
    governed by the terms and policies of the respective third-party websites.
  </li>
</ul>

<h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Payments and Refunds</h2>
<ul className="list-disc pl-5 text-gray-700 space-y-3">
  <li>
    <strong>Payment Obligations:</strong> You agree to pay all applicable charges associated with the
    Services you avail.
  </li>
  <li>
    <strong>Refund Policy:</strong> You may claim a refund if we fail to provide the agreed Service. Refund
    timelines are specified in the respective policies for each Service. Failure to request a refund within
    the stipulated time renders you ineligible for a refund.
  </li>
</ul>

<h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Limitation of Liability</h2>
<p className="mb-4 text-gray-700">
  We are not liable for any failure to perform obligations under these Terms if caused by{" "}
  <strong>force majeure</strong> events such as natural disasters, acts of God, or other events beyond our
  control.
</p>

<h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Governing Law and Jurisdiction</h2>
<ul className="list-disc pl-5 text-gray-700 space-y-3">
  <li>
    <strong>Governing Law:</strong> These Terms are governed by and construed in accordance with the laws of{" "}
    <strong>India</strong>.
  </li>
  <li>
    <strong>Jurisdiction:</strong> All disputes arising out of or in connection with these Terms are subject
    to the exclusive jurisdiction of the courts in <strong>Delhi, India</strong>.
  </li>
</ul>

<h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Contact Us</h2>
<p className="text-gray-700">
  For any concerns or communications related to these Terms, please use the contact information provided on
  our website.
</p>
      </div>
    </div>
  </div>
  )
}

export default TermsAndCondition