import React from 'react';
import Navigation from '../sections/Navigation';
import SEO from '../sections/seo';
import '../index.css';
import '../fonts.css';
import '../devices.css';

export default function Home() {
  return (
    <>
      <SEO />
      <Navigation />
    </>
  );
}
