import React from 'react';
import Link from 'next/link';
import FlaskProduct from './Product';
import { useRouter } from 'next/router';
import Filter from './Filter';
import { productData } from '@/src/constant/allProductData';

const Flask = () => {
  const router = useRouter();

  const pathname = router.pathname;
  const name = pathname.slice(1);

  const product =
    productData &&
    productData?.filter((singleProduct) => singleProduct?.category === name);


    return (
        <div className="w-full px-5 md:flex">
      <div className="md:w-3/12 w-full">
        <div className="mt-3">
          <Link className='uppercase' href={"/"}>Home</Link> /
          <Link className='uppercase' href={`/${name}`}>{name}</Link>
        </div>
        <div className="mt-32">
          <h1 className="text-3xl md:block hidden font-semibold">
            Filter
          </h1>
          <div>
            <Filter product={product}/>
          </div>
        </div>
      </div>
      <div className="mt-20 md:w-3/4 w-full">
        <h1 className="md:text-5xl text-2xl uppercase font-semibold text-center w-full md:w-3/4">
          {name}
        </h1>
        <FlaskProduct product={product}/>
      </div>
    </div>
    );
};

export default Flask;