import React from 'react';

const AppDetailsLayout = ({children}) => {
    return (
        <div>
            <h2 className='bg-blue-400 text-2xl font-bold'>Navbar 2</h2>
            {children}
        </div>
    );
};

export default AppDetailsLayout;