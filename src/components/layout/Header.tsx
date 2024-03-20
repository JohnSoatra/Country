import React from 'react';
import Routes from '@/constant/routes';

const Header = () => {
    return (
        <div
            className='
                w-full flex justify-center fixed top-0 left-0 bg-gray-100 backdrop-blur-sm
            '>
            <div
                className='
                    w-full max-w-[78rem] h-[50px] flex items-center gap-x-2 px-2.5 py-1.5
                    md:h-[65px] md:gap-x-3 md:py-2 md:px-5
                    lg:h-[80px] lg:gap-x-5 lg:px-10
                '>
                <a
                    href={Routes.Home}
                    rel='home'
                    className='
                        w-[45px] block
                        md:w-[50px]
                        lg:w-[55px]
                    '>
                    <img
                        src="/logo512.png"
                        alt="logo"
                        sizes='100%'
                    />
                </a>
            </div>
        </div>
    );
}

export default Header;