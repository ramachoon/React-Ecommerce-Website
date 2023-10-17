import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-12 px-4">
          <h4 className="text-lg font-semibold mb-6">Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Affiliate Program</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-12 px-4">
          <h4 className="text-lg font-semibold mb-6">Get Help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Payment Options</a></li>
          </ul>
        </div>
        {/* <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-12 px-4">
          <h4 className="text-lg font-semibold mb-6">Online Shop</h4>
          <ul>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Bag</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Dress</a></li>
          </ul>
        </div> */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-12 px-4">
          <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center'>&copy; 2023 </p>
      <p className='text-center'>E-Shopify 🛒 - made by Shubham Hemant Joshi❤️ </p>
      <p className='text-center'>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
