import React from 'react';
import PropTypes from 'prop-types';
import { composeProviders } from '@docusaurus/theme-common';
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  DocsPreferredVersionContextProvider,
  ScrollControllerProvider,
  NavbarProvider,
  PluginHtmlClassNameProvider,
} from '@docusaurus/theme-common/internal';

const Provider = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  DocsPreferredVersionContextProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
]);

function LayoutProvider({ children }) {
  return <Provider>{children}</Provider>;
}

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutProvider;
