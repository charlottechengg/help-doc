import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div className="page">
            <header className="header">
                {/* <img src={'/logo.png'} className="logo" alt="logo" /> */}
                <h1>
                    Error: Page not found
                    <br />
                    <Link to="/">Return to home</Link>
                </h1>
            </header>
        </div>
    );
};

export default index;
