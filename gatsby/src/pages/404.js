import React from 'react';
import Button from '../components/Button';
/* Todo: update logo */
import SungrownFarmsLogo from '../images/DELETE-ME.svg';

const Page404 = () => (
  <div className="text-center section-p-t mw-padding">
    {/* Todo: update logo */}
    <img alt="sungrown farms logo" src={SungrownFarmsLogo} style={{ maxWidth: '100%' }} />
    <p className="m-b20 m-t16">Uh oh! The page you&apos;re looking for doesn&apos;t exist.</p>
    <Button to="/" style={{ marginTop: 40 }}>Back to Home</Button>
  </div>
);

export default Page404;
