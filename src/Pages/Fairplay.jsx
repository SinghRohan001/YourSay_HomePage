import React, { useEffect } from "react";

const Fairplay = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="mx-auto bg-white shadow-md rounded-md w-full">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 w-full rounded-t-lg">
          <h1 className="text-3xl text-white font-bold mb-6">
            Fairplay Policy for Yoursay
          </h1>
        </div>
        <div className="px-8">
          <p className="mb-4 mt-4">
            At Yoursay, we are committed to providing a platform where users can
            engage in real-money gaming with confidence in the fairness and
            integrity of our services. This Fair Play Policy outlines the
            standards and practices we uphold to ensure a secure and equitable
            gaming experience for all participants.
          </p>

          <h2 className="text-xl font-semibold mb-4">
            1. Transparency and Equal Opportunity
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Clear Game Rules: All game rules, scoring systems, and
              participation criteria are clearly defined and accessible to all
              users.
            </li>
            <li>
              {" "}
              Equal Access: Every user has an equal opportunity to participate
              in games and tournaments without any discrimination.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">2. Account Integrity</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Single Account Policy: Users are permitted to maintain only one
              account. Creating multiple accounts to gain an unfair advantage is
              strictly prohibited.
            </li>
            <li>
              Accurate Information: Users must provide truthful and accurate
              information during registration and maintain updated records.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">3. Prohibited Conduct</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Collusion and Cheating: Any form of collusion, use of external
              assistance, or attempts to manipulate game outcomes is forbidden
            </li>
            <li className="mb-2">
              Use of Bots or Automation: Engaging in gameplay using automated
              scripts, bots, or any form of artificial intelligence is not
              allowed.
            </li>
            <li>
              Exploiting Software Bugs: Intentionally exploiting any software
              bugs or system vulnerabilities to gain an unfair advantage is
              prohibited.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">4. Responsible Gaming</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Age Restriction: Only individuals who have attained the legal age
              as per jurisdictional laws are permitted to participate in
              real-money games.
            </li>
            <li className="mb-2">
              Self-Exclusion: Users may opt to self-exclude from gaming
              activities if they feel the need to take a break or manage their
              gaming habits.
            </li>
            <li>
              Deposit Limits: Users can set personal deposit limits to promote
              responsible spending.
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">5. Anti-Fraud Measures</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Monitoring Systems: Advanced monitoring systems are in place to
              detect and prevent fraudulent activities, including collusion and
              money laundering.
            </li>
            <li>
              Verification Processes: Rigorous identity verification processes
              are implemented to ensure the legitimacy of user accounts
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">
            6. Data Security and Privacy
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Confidentiality: User data is handled with the highest level of
              confidentiality and in compliance with applicable data protection
              laws.
            </li>
            <li>
              Secure Transactions: All financial transactions are encrypted and
              conducted over secure channels to protect user information
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">
            7. Fair Play Violations and Consequences
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Investigation: Any suspected violation of this policy will be
              thoroughly investigated
            </li>
            <li className="mb-2">
              Penalties: Confirmed violations may result in actions such as
              warnings, suspension, forfeiture of winnings, or permanent account
              termination, depending on the severity of the offense
            </li>
            <li>
              Appeal Process: Users have the right to appeal any disciplinary
              action by contacting our support team with relevant information
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4">
            8. User responsibilities
          </h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">
              Reporting Misconduct: Users are encouraged to report any
              suspicious activities or potential breaches of this policy to our
              support team promptly
            </li>
            <li>
              Compliance: Adherence to this Fair Play Policy, as well as our
              Terms of Service and other related policies, is mandatory for all
              users
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-4 ">9. Amendments</h2>
          <ul className="list-disc list-inside mb-6 pb-6">
            <li className="mb-2">
              Yoursay reserves the right to amend this Fair Play Policy at any
              time. Users will be notified of significant changes through
              appropriate channels. Continued use of our services after such
              notifications constitutes acceptance of the revised policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fairplay;
