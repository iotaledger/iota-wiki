import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import AskCookbook from '@cookbookdev/docsbot/react'
import BrowserOnly from '@docusaurus/BrowserOnly';
/** It's a public API key, so it's safe to expose it here */
const COOKBOOK_PUBLIC_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmY3MDg1ZTU2ZDQyNWJiYmU5ZmRkMTIiLCJpYXQiOjE3Mjc0NjU1NjYsImV4cCI6MjA0MzA0MTU2Nn0.1wYLJydLb73mYLolBwv2y3PYAjFvZfD1EYRntd0k8Cc";
export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <BrowserOnly>{() => <AskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} /> }</BrowserOnly>
    </>
  );
}

