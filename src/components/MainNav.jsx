import React from 'react';
const MainNav = () => {
    return (
      <nav className="flex flex-col justify-center items-center px-16 py-7 w-full text-sm font-semibold text-center bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between ml-14 max-w-full w-[1284px]">
          <div className="flex flex-wrap gap-7 items-center text-black max-md:max-w-full">
            <a href="#" className="self-stretch my-auto hover:text-blue-600">
              Laptops
            </a>
            <a href="#" className="self-stretch my-auto hover:text-blue-600">
              Desktop PCs
            </a>
            <a
              href="#"
              className="self-stretch my-auto basis-auto hover:text-blue-600"
            >
              Networking Devices
            </a>
            <a
              href="#"
              className="self-stretch my-auto basis-auto hover:text-blue-600"
            >
              Printers & Scanners
            </a>
            <a href="#" className="self-stretch my-auto hover:text-blue-600">
              PC Parts
            </a>
            <a
              href="#"
              className="self-stretch my-auto basis-auto hover:text-blue-600"
            >
              All Other Products
            </a>
            <a href="#" className="self-stretch my-auto hover:text-blue-600">
              Repairs
            </a>
            <button className="gap-2.5 self-stretch px-7 py-2 text-blue-600 border-2 border-solid border-[#0156FF] rounded-[50px] max-md:px-5 hover:bg-blue-600 hover:text-white transition-colors">
              Our Deals
            </button>
          </div>
          <div className="flex gap-7 self-start text-blue-600">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/496b1ec1b29a4d7ab62e6343656956da/9edd8cd2036453bb740e680adbc0e397b100cd4d853e8a8295186e4c513c8a91"
              className="object-contain shrink-0 my-auto aspect-square w-[19px]"
              alt="Search"
            />
            <div className="flex gap-4 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/496b1ec1b29a4d7ab62e6343656956da/aa4c7aa8b88a889f49c4ee1088aaf9662b81e78ac35ffefc8ca1f002590915ba"
                className="object-contain shrink-0 aspect-[1.03] w-[33px]"
                alt="Cart"
              />
              <button className="gap-2.5 self-stretch py-1 pr-4 pl-7 mt-1.5 border-2 border-solid border-[#0156FF] min-h-[29px] rounded-[50px] max-md:pl-5 hover:bg-blue-600 hover:text-white transition-colors">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export { MainNav };
  