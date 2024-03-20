import React from 'react';
import Layout from '@/components/layout/Layout';

const FourOFour = () => {
    return (
        <Layout>
            <div
                className='
                    w-full h-full flex justify-center pt-[50px]
                    md:pt-[75px]
                    lg:pt-[100px]
                '>
                <h1
                    className='
                        text-[30px] font-bold
                        md:text-[45px]
                        lg:text-[60px]
                    '>
                    Page not found!
                </h1>
            </div>
        </Layout>
    )
}

export default FourOFour;