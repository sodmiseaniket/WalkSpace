import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')
  const [sizes, setSizes] = useState([]);

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
        setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }

  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSize = (e) => {

    if (sizes.includes(e.target.value)) {
      setSizes(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setSizes(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
  
    // Apply search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    // Apply category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
  
    // Apply subcategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
  
    // Apply sizes filter
    if (sizes.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        item.sizes.some((size) => sizes.includes(size))
      );
    }
  
    setFilterProducts(productsCopy);
  };
  

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
      applyFilter();
  },[category,subCategory,search,showSearch,products,sizes])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-700'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block rounded-lg`}>
          <p className='mb-3 text-sm font-medium text-gray-700'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/> kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block rounded-lg`}>
          <p className='mb-3 text-sm font-medium text-gray-700'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Casual Shoes'} onChange={toggleSubCategory}/> Casual Shoes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Formal Shoes'} onChange={toggleSubCategory}/> Formal Shoes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Sports Shoes'} onChange={toggleSubCategory}/> Sports Shoes
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Sandles & Clogs'} onChange={toggleSubCategory}/> Sandles & Clogs
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Flip-Flops'} onChange={toggleSubCategory}/> Flip-Flops
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Ethnic'} onChange={toggleSubCategory}/> Ethnic
            </p>
          </div>
        </div>

        {/* Size Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block rounded-lg`}>
          <p className='mb-3 text-sm font-medium text-gray-700'>SIZE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'6'} onChange={toggleSize}/> 6
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'7'} onChange={toggleSize}/> 7
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'8'} onChange={toggleSize}/> 8
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'9'} onChange={toggleSize}/> 9
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'10'} onChange={toggleSize}/> 10
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'11'} onChange={toggleSize}/> 11
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'12'} onChange={toggleSize}/> 12
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Porduct Sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 bg-white text-black rounded-lg'>
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
