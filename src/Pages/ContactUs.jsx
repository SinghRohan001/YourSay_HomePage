import React from 'react'

const ContactUs = () => {
  return (
    <body class="bg-gray-100 text-gray-800 w-full">
  <div class="min-h-screen flex flex-col items-center justify-center p-6 w-full">
    <div class="bg-white shadow-lg rounded-lg max-w-4xl w-full">

      <div class="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-t-lg">
        <h1 class="text-3xl font-bold">Contact Us</h1>
        <p class="mt-2 text-sm">Last updated on <span class="font-medium">18-11-2024 14:02:40</span></p>
      </div>


      <div class="p-6 space-y-4">
        <p class="text-lg">
          You may contact us using the information below:
        </p>
        

        <div>
          <h2 class="text-xl font-semibold">Merchant Legal Entity Name:</h2>
          <p class="mt-1">ASAR GAMING NETWORK PRIVATE LIMITED</p>
        </div>
        

        <div>
          <h2 class="text-xl font-semibold">Registered Address:</h2>
          <p class="mt-1">
            1-E/3, First Floor, Block E 1, Jhandewalan Extension, Jhandewalan, New Delhi, Delhi 110055, Delhi, Delhi, PIN: 110055
          </p>
        </div>
        

        <div>
          <h2 class="text-xl font-semibold">Operational Address:</h2>
          <p class="mt-1">
            1-E/3, First Floor, Block E 1, Jhandewalan Extension, Jhandewalan, New Delhi, Delhi 110055, Delhi, Delhi, PIN: 110055
          </p>
        </div>
        

        <div>
          <h2 class="text-xl font-semibold">Contact Details:</h2>
          <ul class="mt-2 space-y-2">
            <li>
              <span class="font-medium">Telephone No:</span> 9991731414
            </li>
            <li>
              <span class="font-medium">E-Mail ID:</span> 
              <a href="mailto:rohan@asargaming.com" class="text-blue-600 hover:underline">
                rohan@asargaming.com
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div class="bg-gray-100 text-center p-4 rounded-b-lg border-t">
        <p class="text-sm text-gray-600">© 2024 ASAR GAMING NETWORK PRIVATE LIMITED. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
  )
}

export default ContactUs