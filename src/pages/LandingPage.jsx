import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import TwitterPost from '../components/TwitterPost';

const LandingPage = () => {
    return (
        <MainLayout>
            <Hero />
            <Section
                title="Empower Developers. Democratize Software"
                description="Create an open marketplace for software development, empowering developers to build scalable solutions for global impact."
                centered
            />
            <Section title="Unleashing the Creator in Every Developer">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FeatureCard
                        title="Become a Creator"
                        description="The future belongs to software creators. Tap into a global talent pool to build scalable solutions faster than ever before."
                        linkText="Learn More"
                    />
                    <FeatureCard
                        title="Discover Opportunities"
                        description="Connect with a global marketplace of software development opportunities and innovative projects."
                        linkText="Explore More"
                    />
                    <FeatureCard
                        title="Build At Scale"
                        description="Leverage our platform to build complex software solutions with ease, accessing top talent worldwide."
                        linkText="Start Building"
                    />
                </div>
            </Section>
            <Section title="What Devs Are Saying About Us">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TwitterPost
                        text="Tuliban has completely transformed how I approach software development. It's revolutionary!"
                        author="Jane Doe"
                        username="janedoe"
                        avatar="https://via.placeholder.com/48"
                    />
                    <TwitterPost
                        text="The opportunities I've found on Tuliban have skyrocketed my career. Highly recommended!"
                        author="John Smith"
                        username="johnsmith"
                        avatar="https://via.placeholder.com/48"
                    />
                    <TwitterPost
                        text="Building software at scale has never been easier. Tuliban is a game-changer!"
                        author="Alice Johnson"
                        username="alicejohnson"
                        avatar="https://via.placeholder.com/48"
                    />
                </div>
            </Section>
            <Section>
                <div className="bg-[#fdca3a] text-black p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-semibold mb-4">Start Your Journey Today!</h2>
                    <p className="mb-6">Join thousands of developers redefining how software is built. Experience the power of global collaboration.</p>
                    <a href="#" className="bg-black text-[#fdca3a] px-6 py-3 rounded-full hover:bg-gray-800">Get Started</a>
                </div>
            </Section>
        </MainLayout>
    );
};

export default LandingPage;
