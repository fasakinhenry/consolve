import React from 'react';

const FeatureCard = ({ title, description, linkText, image }) => {
    return (
        <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>
                <p className="mb-4 text-gray-300">{description}</p>
            </div>
            <div className="flex justify-between items-end">
                <a href="#" className="text-[#fdca3a] hover:underline">{linkText} →</a>
                {image && <img src={image} alt={title} className="w-1/3" />}
            </div>
        </div>
    );
};

export default FeatureCard;
