import React from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem'
import type {LinkLikeNavbarItemProps} from '@theme/NavbarItem';
import './styles.css';

interface Network {
    label: string,
    routeBasePath: string
}

export default function CustomNetworkDropdown(props: {
    mobile?: boolean;
    networks: Network[];
}): JSX.Element | null {
    const {pathname} = useLocation();
    const {siteConfig} = useDocusaurusContext();

    var currentNetwork: string;
    var currentIndex: number;
    props.networks.forEach(
        (value, index) => {
            if (pathname.startsWith((!value.routeBasePath)  ? '/' : '/' + value.routeBasePath)) {
                currentNetwork = value.label;
                currentIndex = index;
            }
        }
    )

    const routeBasePath = props.networks[currentIndex].routeBasePath ?? '';
    const subpath = pathname.slice(
        (routeBasePath == '' ? 0 : routeBasePath.length + 1)
    );

    var items: LinkLikeNavbarItemProps[] = [];
    props.networks.forEach(
        (value, index) => {
            if (index != currentIndex)
                items.push(
                    {
                        label: value.label, 
                        href: siteConfig.url + (!value.routeBasePath ? '' : '/' + value.routeBasePath) + subpath,
                        // Use class name to hide external icon
                        className: 'internal-link',
                        target: '_self',
                        rel: '',
                    }
                )
        }
    )

    return (
        <DropdownNavbarItem 
            mobile={props.mobile} 
            label={currentNetwork} 
            items={items}
        />
    );
}