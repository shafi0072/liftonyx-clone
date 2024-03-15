import Details from '@/src/Components/app/page/productDetails/Details';
import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
    const router = useRouter();
    const id = router?.query?.id;
    return (
        <div className=' mt-36 lg:mt-32 '>
            <Details id={id}/>
        </div>
    );
};

export default index;