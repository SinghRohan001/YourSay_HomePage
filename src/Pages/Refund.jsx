import React from "react";

const Refund = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="mx-auto bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-t-lg">
          Refund Policy
        </h1>
        <div className="p-8 pt-2">
          <p className="mb-4 text-gray-700">
            At *YourSay*, we are committed to delivering a transparent and
            user-friendly experience. This Refund Policy outlines the terms
            under which refunds may be initiated and processed on our platform.
          </p>

          <h2 className="text-xl font-semibold mb-4">
            1. Refunds for Cancelled Contests
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              If a contest is canceled due to technical issues, regulatory
              concerns, or insufficient participation, the entry fee will be
              refunded to the user's *YourSay* wallet.
            </li>
            <li className="mb-2">
              {" "}
              Refund requests for such scenarios must be raised within 72 hours
              of the contest cancellation.
            </li>
            <li>
              {" "}
              Eligible refunds will be processed within 5–7 business days and
              credited to the user's wallet for further use.{" "}
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">
            2. Deposits & Non-Refundable Amounts
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Any amount deposited by a user into their *YourSay* wallet is
              considered final and non-refundable, unless:
            </li>
            <ul className="list-disc list-inside ml-6">
              <li className="mb-2">The amount is classified as Winnings, or</li>
              <li className="mb-2">
                It has been used to trade within the application and transferred
                to the trading balance.
              </li>
            </ul>
            <li>
              Refunds will not be processed for deposits that remain unused for
              participation or trading activities.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">
            3. Withdrawal Eligibility
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Users may withdraw only from their Winnings Balance, subject to
              successful KYC verification and addition of a verified bank
              account.
            </li>
            <li>
              {" "}
              Withdrawal requests are subject to internal checks and may be
              delayed or withheld in case of suspected fraudulent activity or
              violation of platform terms.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">
            4. Technical Errors or Disputes
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
            For failed transactions or technical issues, users must raise a support request within 72 hours from the time of occurrence.
            </li>
            <li>
              {" "}
              All disputes will be investigated and, if valid, refunds will be processed within 10 business days.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">
            5. Inactive Accounts & Forfeiture
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
            User accounts with no activity for 365 consecutive days may be deemed inactive.
            </li>
            <li className="mb-2">
            In such cases, any unutilized wallet balance may be refunded to the user's verified bank account, provided the user has completed KYC verification and added a valid bank account.
            </li>
            <li >
            If these conditions are not met, the balance may be forfeited in line with applicable regulations.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Refund;
