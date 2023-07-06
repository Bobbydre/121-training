import React from 'react';
import Form from '@/snippets/form/form.snippet';
import Text, { TEXT_TYPE_CLASSES } from "@/snippets/text/text.snippet"

export default function Hero() {
    const { title, subtitle } = TEXT_TYPE_CLASSES;
    return (
        <section>
            <div className="hero-section">
                <div className="hero-background"></div>
                <div className="hero-content">
                    <Text textType='title' className='gradientText'>
                        Your crypto. <br />Family style.
                    </Text>
                    <Text textType='subtitle'>
                        Explore Ethereum with the best wallet for iOS. <br />Interacting with crypto has never been so simple
                    </Text>
                    <div className="email-form">
                        <Form />
                    </div>
                    <Text textType='subtitle'>
                        Want early access? <a href="/">Learn how</a>
                    </Text>
                </div>
            </div>
        </section>
    );
}
