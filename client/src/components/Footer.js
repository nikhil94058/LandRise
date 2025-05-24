import React from 'react';

const MainContainer = ({ children }) => {
  return (
    <div className="w-[1872px] h-[670px] pl-[53px] pr-[72px] pt-[68px] pb-[30.44px] bg-yellow-400 justify-start items-center inline-flex">
      {children}
    </div>
  );
};

const ContentContainer = ({ children }) => {
  return (
    <div className="w-[1747px] h-[571.56px] relative">
      {children}
    </div>
  );
};

const TextBlock = ({ text, className }) => {
  return (
    <div className={className}>{text}</div>
  );
};

const FormContainer = ({ children }) => {
  return (
    <div className="w-[748.15px] h-[451.26px] left-[960.60px] top-0 absolute">
      {children}
    </div>
  );
};

const CopyrightText = ({ text }) => {
  return (
    <div className="w-[305.92px] h-[18.92px] left-[679.45px] top-[535.89px] absolute text-center text-white text-sm font-bold font-['Times New Roman'] leading-relaxed">{text}</div>
  );
};

const SocialIcons = () => {
  return (
    <div className="w-[252.03px] h-[36.39px] left-[1334.46px] top-[535.17px] absolute">
      {/* Social icons */}
    </div>
  );
};



const Form = () => {
  return (
    <div className="w-[748.15px] bg-white rounded-[20px] shadow p-6">
      <input type="text" placeholder="Name" className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-slate-900" />
      <input type="email" placeholder="Email Address" className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-slate-900" />
      <select className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-slate-900">
        <option value="">Interested In</option>
        <option value="buying">Buying</option>
        <option value="selling">Selling</option>
        <option value="renting">Renting</option>
      </select>
      <textarea placeholder="Message" className="w-full mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-slate-900"></textarea>
      <label className="flex items-center">
        <input type="checkbox" className="form-checkbox mr-2 border border-gray-300 focus:outline-none focus:border-slate-900" />
        <span className="text-gray-700">I have read and agree to the terms and conditions</span>
      </label>
      <button className="w-[206.71px] h-[36.39px] bg-sky-500 rounded-[10px] shadow">Send</button>
    </div>
  );
};



const Footer = () => {
  return (
    <div>
      <MainContainer>
        <ContentContainer>
          <TextBlock text="Buy, sell, rent your property safely overcoming the hazards of fraudulent payments and transactions with blockchain based information that remains untouched for years." className="w-[592.80px] h-16 left-[150.98px] top-[343.99px] absolute text-slate-900 text-base font-bold font-['Tienne'] leading-[30px]" />
          <TextBlock text="ALL IN ONE REAL ESTATE PORTAL" className="w-[619.48px] h-[88.80px] left-[151px] top-[198px] absolute text-slate-900 text-[44px] font-bold font-['Tienne'] leading-[60px]" />
          <FormContainer>
            <Form />
          </FormContainer>
        </ContentContainer>
        <CopyrightText text="© 2020 Lift Media. All rights reserved." />
        <SocialIcons />

      </MainContainer>
      <div className='justify-center flex-center bg-[#FFE91E]'>
        <center>
          <div className="w-[305.92px] h-[18.92px] text-center text-white text-sm font-bold font-['Times New Roman'] leading-relaxed">© 2020 Lift Media. All rights reserved. </div>
        </center>
      </div>
    </div>
  );
};

export default Footer;
