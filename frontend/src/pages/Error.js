import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className="404-page">
            <header className="header">
                {/* <img src={'/logo.png'} className="logo" alt="logo" /> */}
                <p>
                    404: Page not found
                    <br />
                    <Link to="/">Return Back to Home</Link>.
                </p>
            </header>
        </div>
    );
};

export default index;
