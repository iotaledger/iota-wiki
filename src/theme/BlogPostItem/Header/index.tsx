/**
 * SWIZZLED VERSION: 2.0.0-rc.1
 * REASONS:
 *  - Move info to the right of the header.
 */

import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';

export default function BlogPostItemHeader(): JSX.Element {
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderAuthors />
      <BlogPostItemHeaderInfo />
    </header>
  );
}
