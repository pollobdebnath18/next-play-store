import React from 'react';

const AppDetails = async({params}) => {
    const param = await params;
    console.log(param,"params") 
    return (
        <div>
            this is app details page
        </div>
    );
};

export default AppDetails;