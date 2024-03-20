import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ fromTop, children }: { fromTop?: boolean, children: React.ReactNode }) => {
    return (
        <div
            className='
                min-w-screen min-h-screen flex flex-col items-center
            '>
            <Header />
            {
                fromTop !== true &&
                    <div
                        className='
                            h-[50px]
                            md:h-[65px]
                            lg:h-[80px]
                        '>
                    </div>
            }
            { children }
            <div className='flex-1'></div>
            <Footer />
        </div>
    )
}

export default Layout;