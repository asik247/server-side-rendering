import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveLinks = ({href,children}) => {
    const path = usePathname();
    return  <Link className={`${path===href?"bg-amber-200 px-2 py-1 rounded-2xl text-black":""}`} href={href}>{children}</Link>
   
};

export default ActiveLinks;