import React from 'react';
import { Helmet } from 'react-helmet';

function PageWrapper({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}

export default PageWrapper;
