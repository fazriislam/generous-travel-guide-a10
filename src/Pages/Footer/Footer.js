import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div style={{ height: '150px' }} className='bg-dark'>

            <div className='d-flex'>
                <div className='text-light my-3 mx-auto'>
                    <h4>Generous Travel Guide</h4>
                    <p className='ms-5'>See The World</p>
                    <p><small className='ms-5'>Copyright {year}</small></p>
                </div>
            </div>

        </div>
    );
};

export default Footer;