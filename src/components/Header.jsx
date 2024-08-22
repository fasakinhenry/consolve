import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-6">
            <div className="text-xl font-bold text-[#fdca3a]">tuliban</div>
            <nav>
                <a href="#" className="text-gray-300 mx-2 hover:text-white">Developers</a>
                <a href="#" className="text-gray-300 mx-2 hover:text-white">Customers</a>
                <a href="#" className="bg-[#fdca3a] text-black px-4 py-2 rounded-full hover:bg-yellow-500">Login</a>
            </nav>
        </header>
    );
};

export default Header;
