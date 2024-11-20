"use client";

import { forwardRef } from 'react';
import dynamic from 'next/dynamic';
import GlobeLoader from './globe-loader';

const GlobeGL = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => <GlobeLoader />
});

const GlobeWrapper = forwardRef<any, any>((props, ref) => {
  return <GlobeGL ref={ref} {...props} />;
});

GlobeWrapper.displayName = 'GlobeWrapper';

export default GlobeWrapper;