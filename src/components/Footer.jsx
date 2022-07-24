import React from 'react';

const Footer = () => {
    return (
        <div className='bg-blue-dark p-4 paragraph-white' style={{minHeight:'25vh'}}>
            <div className='d-flex justify-content-evenly gap-5 m-auto'>
                <div>
                    <h2 style={{fontWeight:'600'}}>Pokedex App</h2>
                    <h6>©2022 JDGC. All Rights Reserved.</h6>
                    <h6>Powered by <span>React</span><span>, Router</span> and <span>Redux</span>.</h6>
                </div>
                <div>
                    <h2 style={{fontWeight:'600'}}>Contact</h2>
                    <a href="https://www.linkedin.com/in/jdgc14/">
                        <h6>LinkedIn</h6>
                    </a>
                    <a href="https://github.com/jdgc14/">
                        <h6>Github</h6>
                    </a>
                    <a href="mailto:joseojedapro@gmail.com">
                        <h6>Email</h6>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;