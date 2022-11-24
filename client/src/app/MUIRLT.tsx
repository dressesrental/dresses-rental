import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { AddSet } from '@pages/stock/addSet/addDress/AddSet';
import { Outlet } from 'react-router-dom';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


export const MUIRLT = (props: any) => {
  return (
    <div>
      <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
    </div>)
}