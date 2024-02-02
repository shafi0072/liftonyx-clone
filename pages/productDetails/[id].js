import Details from '@/src/Components/app/page/productDetails/Details';
import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
    const router = useRouter();
    const id = router?.query?.id;
    return (
        <div>
            <Details id={id}/>
        </div>
    );
};

export default index;