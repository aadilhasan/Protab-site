import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">
          Contact us - <a href="mailto:help.protab@gmail.com">help.protab@gmail.com</a>
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          {/* <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li> */}
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          {/* <li>
            <a href="https://dev.to/changoman">Dev.to</a>
          </li> */}
          <li>
            <a href="https://twitter.com/protab_" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-20 font-semibold"> Made with Love ❤️ in India 🇮🇳</div>
  </footer>
);

export default Footer;
