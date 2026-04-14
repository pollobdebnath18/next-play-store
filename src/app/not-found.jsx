import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center space-y-4 h-screen flex flex-col justify-center items-center'>
            <h2 className='text-5xl text-red-300'>Sorry page not found . 404</h2>
            <Link href='/apps'><button className='btn btn-primary'>Back to home</button></Link>
        </div>
    );
};

export default NotFound;