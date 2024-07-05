import React, { memo } from 'react';
import { dataContact } from '../utils/dataContact';
import { Button } from '../components/Index';

const { image, contactInfo } = dataContact;

const Contact: React.FC = () => {
  return (
    <section className='w-[90%] lg:w-[70%] p-8 my-7 text-[#233762] bg-fifth border-[#e8eefc] border-[7px] border-dashed rounded-lg'>
      <div>
        <img src={image} alt={image} className='w-full h-[150px] object-contain' />
      </div>
      <p className='my-8 text-center text-lg'>Liên hệ với chúng tôi nếu bạn cần hỗ trợ:</p>
      <div className='flex items-start space-x-12'>
        <div className='grid grid-cols-3 gap-8 px-4'>
          {contactInfo.map((item, index) => {
            return (
              <div key={index} className='text-center'>
                <h3 className='text-orange-600 uppercase font-bold'>{item.spTitle}</h3>
                <span className='font-bold text-xl  space-y-1'>
                  <p>{item.phoneNumber}</p>
                  <p>{item.zalo}</p>
                </span>
              </div>
            );
          })}
        </div>
        <Button
          text='Gửi liên hệ'
          textColor='text-white text-sm font-semibold'
          bgColor='bg-secondary'
        />
      </div>
    </section>
  );
};

export default memo(Contact);
