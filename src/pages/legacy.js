import React from 'react';
import CardWithImage from '/src/theme/CardWithImage';
import Layout from '@theme/Layout';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function LegacyHome() {
    const siteConfig = {
        description: "The IOTA legacy documentation is no longer available.The IOTA Wiki is now the one source of truth for IOTA documentation.",
        title: "Legacy Documentation",
        tagline: "The IOTA legacy documentation is no longer available. Any documentation which is still valid will be ported to this Wiki, the one source of truth for all the IOTA documentation."
    }
    const { cards } = useThemeConfig();

    return (
        <Layout description={`${siteConfig.description}`}>
            <div className='hero'>
                <div className='container'>
                    <div className='text--center margin-bottom--lg'>
                        <h1 className='hero__title margin--none'>{siteConfig.title}</h1>
                        <p className='hero__subtitle margin--none'>{siteConfig.tagline}</p>
                    </div>
                    {cards && (
                        <div className='row'>
                            {cards.map((props, idx) => (
                                <CardWithImage key={idx} {...props} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
