import React from 'react';

const Footer = () => {
    return (
        <div
            className='
                w-full flex justify-center bg-gray-100
            '>
            <div
                className='
                    w-full max-w-[78rem] flex justify-center items-center text-center min-h-[50px] px-2.5 py-2.5
                    md:min-h-[90px] md:px-5 md:py-5
                    lg:px-10 lg:py-10
                '>
                <p
                    className='
                        text-[12px]
                        md:text[13px]
                        lg:text-[14px]
                    '>Copyright © 2024. John Soatra.
                </p>
            </div>
        </div>
    );
}

export default Footer;