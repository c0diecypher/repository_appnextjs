
import Products from './products/page';
import Header from './customer/page';
import CatalogTab from './components/CatalogTab';
import SearchTab from './components/SearchTab';
import OpenBanner from './banners/open/banner';
import BonusTab from './bonus/BonusTab';
import { Suspense } from 'react'
import Loading from './loading';

export default async function Home(){
    
    return (
        <>
        <Suspense fallback={<Loading/>}>
            <Header/>
            <SearchTab/>
            <BonusTab/>
            <OpenBanner/>
            <CatalogTab/>
            <Products/>
        </Suspense>   
        </>
    );
};


