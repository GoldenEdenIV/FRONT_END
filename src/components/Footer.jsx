import PropTypes from "prop-types";
import { FooterLinkGroupPropTypes } from "./types";
import React from 'react';

const FooterLinkGroup = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-[13px] leading-[18px] font-light hover:text-blue-400 transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterLinkGroup.propTypes = FooterLinkGroupPropTypes;

const Footer = () => {
  const footerGroups = [
    {
      title: "Information",
      links: [
        "About Us",
        "About Zip",
        "Privacy Policy",
        "Search",
        "Terms",
        "Orders and Returns",
        "Contact Us",
        "Advanced Search",
        "Newsletter Subscription",
      ],
    },
    {
      title: "PC Parts",
      links: [
        "CPUS",
        "Add On Cards",
        "Hard Drives (Internal)",
        "Graphic Cards",
        "Keyboards / Mice",
        "Cases / Power Supplies / Cooling",
        "RAM (Memory)",
        "Software",
        "Speakers / Headsets",
        "Motherboards",
      ],
    },
    {
      title: "Desktop PCs",
      links: [
        "Custom PCs",
        "Servers",
        "MSI All-In-One PCs",
        "HP/Compaq PCs",
        "ASUS PCs",
        "Tecs PCs",
      ],
    },
    {
      title: "Laptops",
      links: [
        "Evryday Use Notebooks",
        "MSI Workstation Series",
        "MSI Prestige Series",
        "Tablets and Pads",
        "Netbooks",
        "Infinity Gaming Notebooks",
      ],
    },
  ];

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {footerGroups.map((group, index) => (
            <FooterLinkGroup key={index} {...group} />
          ))}
          <div className="space-y-4">
            <h3 className="font-bold">Address</h3>
            <address className="text-[13px] leading-[18px] font-light not-italic">
              Address: 1234 Street Adress City Address, 1234
              <br />
              Phones:{" "}
              <a href="tel:0012345678" className="text-[#01A4FF]">
                (00) 1234 5678
              </a>
              <br />
              We are open: Monday-Thursday: 9:00 AM - 5:30 PM
              <br />
              Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 11:00 AM - 5:00 PM
              <br />
              E-mail:{" "}
              <a href="mailto:shop@email.com" className="text-[#01A4FF]">
                shop@email.com
              </a>
            </address>
          </div>
        </div>
        <hr className="my-8 border-white" />
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/496b1ec1b29a4d7ab62e6343656956da/9333beaebd023e1729bccfea601f88c443c12b1c17dbb3e15398e3a348668865"
              alt="Social Media 1"
              className="w-[22px] aspect-square"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/496b1ec1b29a4d7ab62e6343656956da/3ad488784c9d908234cbfcbecd8ba6e4ae2281b858a81476118a9d8acb01d1dc"
              alt="Social Media 2"
              className="w-[22px] aspect-square"
            />
          </div>
          <div className="flex items-center gap-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/496b1ec1b29a4d7ab62e6343656956da/911f093b5873d3993151c95e4759b33b3ae684c0c342f92e18a0fcac3795cdf2"
              alt="Payment Methods"
              className="h-6"
            />
            <p className="text-xs font-medium">
              Copyright © 2020 Shop Pty. Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer, FooterLinkGroup };
