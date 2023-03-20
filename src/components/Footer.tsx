import React from "react";

const Footer: React.FC = () => {
    return (
        <>
            <div className="spacer h-10 md:h-20"></div>
            <footer className=''>
                <div className='text-gray-500 flex gap-5 justify-center'>
                    <a href="https://twitter.com/dytra_io" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter text-3xl"></i></a>
                    <a href="https://github.com/dytra" target="_blank" rel="noreferrer"><i className="fa-brands fa-github text-3xl"></i></a>
                    <a href="https://instagram.com/dytra.io" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram text-3xl"></i></a>
                </div>

                <div className='mt-5 text-sm text-gray-500 cursor-default'>
                    <p className='text-center'>Copyright © 2022 dytra. All rights reserved.</p>
                </div>

            </footer>
            <div className="spacer h-10 md:h-10"></div>
        </>
    )
}

export default Footer;