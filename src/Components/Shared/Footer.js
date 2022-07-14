import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center bg-footer bg-contain p-5'>
            <div className="footer p-10 lg:flex justify-around font-semibold text-lg">
        <div>
            <span className="footer-title">Services</span> 
            <a className="link link-hover">E</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
            <span className="footer-title">Company</span> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </div> 
        <div>
            <span className="footer-title">Legal</span> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </div>
        </div>
        <div>
            <p>Copyright 2022 All Rights Reserved</p>
        </div>
        </footer>
    );
};

export default Footer;