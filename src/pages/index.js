import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LandingPageHeader from '@site/src/components/LandingPageHeader';

const actionList = [
    {
        title: 'Learn',
        link: 'docs/learn/about-iota/an-introduction-to-iota',
        description: 'Why IOTA? Basics to deeper topics: Learn about the tangle, industry applications and networks.',
    },
    {
        title: 'Use',
        link: 'docs/use/use-cases/industry-applications',
        description: 'Learn about IOTAs solutions and how they can be applied in the real world.'

    },
    {
        title: 'Develop',
        link: 'docs/develop/getting-started/architecture',
        description:'Follow our tutorials and documentation to build your own projects. IOTA supports Rust, C, Go, Java, and Python.'
    },
];
export default function Home() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
            <LandingPageHeader actionList={actionList} title={`${siteConfig.title}`} tagline={`${siteConfig.tagline}`}/>
        </Layout>
    );
}
