import React from 'react';
const RegisterSection = () => {
    return (
      <section className="flex flex-col grow items-start px-14 pt-9 pb-36 w-full text-sm font-semibold bg-violet-50 max-md:px-5 max-md:pb-24 max-md:mt-9 max-md:max-w-full">
        <h2 className="text-lg text-black">New Customer?</h2>
        <p className="mt-5 font-light leading-5 text-black">
          Creating an account has many benefits: <br />
          • Check out faster
          <br />
          • Keep more than one address
          <br />• Track orders and more
        </p>
        <button className="px-9 py-5 mt-9 text-center text-white bg-blue-600 rounded-[50px] hover:bg-blue-700 transition-colors max-md:px-5">
          Create An Account
        </button>
      </section>
    );
  };
  
  export { RegisterSection };
  