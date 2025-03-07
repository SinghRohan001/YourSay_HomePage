import React from "react";
import Yoursay from "../assets/yslogo.svg";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
      
        const handleDownloadClick = () => {
          navigate('/download');
        };
  
  return (
    <footer className="bg-white text-black pt-8">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap border-b border-[#ACA7FF]  justify-between ">
          <div className="flex flex-col">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <img src={Yoursay} />
            </div>
          </div>
          {/* Download and Sign In */}
          <div className="flex lg:space-x-12 items-center mb-6">
            <span className="text-sm hidden mr-4 md:block font-montserrat font-[400] text-[#000000]">
              For 18 years and <br />
              <span className="flex justify-end">above only</span>
            </span>
            <div className="flex space-x-4">
              <button
                className="bg-[#2E67F4] hover:bg-blue-700 focus-within:ring-4 focus-within:ring-blue-800  text-white font-montserrat font-[700] px-4 py-2 rounded-lg"
                onClick={handleDownloadClick
                }
              >
                Download App
              </button>
              {/* <button className="border border-[#2E67F4] text-[#2E67F4] font-montserrat font-[700] px-4 py-2 rounded-full">
                Trade Online
              </button> */}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-2 font-montserrat lg:grid-cols-4 lg:gap-8">
          <div>
            <h3 className="text-lg font-[600] mb-2">Company</h3>
            <ul className="space-y-2 font-worksans font-[400]">
              {/* <li>About Us</li> */}
              <Link to="/privacy-policy" className="hover:text-blue-700">
                <li>Privacy policy</li>
              </Link>
              <Link to="/terms-condition" className="hover:text-blue-700">
                <li>Terms and Conditions</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-[600] mb-2">Resources</h3>
            <ul className="space-y-2 font-worksans font-[400]">
              <li>Help Centre</li>
              <Link to="/refund-policy" className="hover:text-blue-700">
                <li>Refund and Cancellation policy</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-[600] mb-2">Careers</h3>
            <ul className="space-y-2 font-worksans font-[400]">
              <li>Open Roles</li>
              
            </ul>
          </div>
          <div>
            <Link to="/contact-us">
              {" "}
              <h3 className="text-lg  font-[600] mb-2 hover:text-blue-700">
                Contact Us
              </h3>
            </Link>
            <ul className="space-y-2 font-worksans  lg:w-full font-[400]">
              <li>help@yoursay.live</li>
              <li className="break-words">communication@yoursay.live</li>
            </ul>
          </div>
        </div>

        {/* About Section */}
        <div className="border-t flex flex-wrap justify-between w-full border-[#ACA7FF] mt-8 pt-4">
          <div className="lg:w-[54vw] ">
            <h3 className="text-lg  mb-2 font-semibold font-montserrat">
              About YourSay
            </h3>
            <p className="text-black font-[400] font-montserrat text-md  ">
              YourSay is a next-generation platform built on the idea that
              opinions matter. We empower users by turning their insights into
              real rewards. Whether you're interested in opinion trading, sports
              or market events. YourSay provides a seamless and secure
              environment for all users. Our team is committed to innovation,
              transparency, and providing the best possible experience.
            </p>
          </div>
          <div className=" flex flex-col xl:w-[25vw] ">
            <h3 className="text-lg font-[600] mb-6 font-montserrat ">
              Partners and sponsors
            </h3>
            <div className="flex space-x-4 xl:space-x-8 lg:space-x-4">
              {/* Placeholder for icons */}
              <img src={image1} />
              <img src={image2} />
              <img src={image3} />
              <img src={image4} />
              <img src={image5} />
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t flex border-[#ACA7FF] mt-8 pt-4">
          <div className="w-full">
            <div className="flex w-full justify-between">
              <div className="w-[20vw]">
                <h3 className="text-lg font-[600] text-[#262626] mb-2 font-montserrat">
                  Disclaimer
                </h3>
              </div>
              <div className="hidden lg:block xl:w-[40vw] h-[100%] ">
                <div className="flex justify-between">
                  {/* Placeholder for social media icons */}
                  <div className="flex items-center space-x-2">
                    <img src={linkedin} />
                    <p className="font-worksans font-[600]">Linkedin</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={twitter} />
                    <p className="font-worksans font-[600]">Twitter</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={instagram} />
                    <p className="font-worksans font-[600]">Instagram</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={youtube} />
                    <p className="font-worksans font-[600]">Youtube</p>
                  </div>
                </div>
              </div>
            </div>

            <ul className="text-[#262626] space-y-2 w-full mb-2  font-montserrat">
              <li>
                Opinion trading may involve financial risks. Please trade
                responsibly.
              </li>
              <li>
                YourSay is available in states where permitted by law. Users in
                certain states may not have access to our app or its features.
              </li>
            </ul>

            <div className=" block md:block mt-2 lg:hidden ">
              <div className="lg:flex lg:space-x-16 md:flex md:space-x-4 lg:justify-between ">
                {/* Placeholder for social media icons */}
                <div className="flex space-x-7 py-1 lg:space-x-0 ">
                  <div className="flex items-center space-x-2">
                    <img src={linkedin} />
                    <p className="font-worksans font-[600] ">Linkedin</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={twitter} />
                    <p className="font-worksans font-[600]">Twitter</p>
                  </div>
                </div>
                <div className="flex space-x-4 pb-1 lg:space-x-0 ">
                  <div className="flex items-center space-x-2">
                    <img src={instagram} />
                    <p className="font-worksans font-[600]">Instagram</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={youtube} />
                    <p className="font-worksans font-[600]">Youtube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
      </div>
      <div className="flex justify-center items-end font-montserrat text-xs md:text-sm lg:text-sm text-white bg-black">
        <p>Copyright Asar Gaming Network © 2024 - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
