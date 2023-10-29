const Home = () => {
  return (
    <div className='mx-5 p-10 md:ml-16 flex flex-col-reverse md:flex-row justify-between'>
      <div className='content w-full md:w-1/2'>
        <h1 className='font-bold text-5xl md:text-8xl'>YOUR FEET DESERVE THE BEST</h1>
        <p className='my-4 md:my-7'>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className='flex gap-4 md:gap-5'>
          <button className='bg-red-600 text-white px-3 py-2 border shadow'>
            Shop Now
          </button>
          <button className='px-3 py-2 border border-slate-400 shadow'>
            Category
          </button>
        </div>
        <p className='my-4 md:my-5'>Also Available On</p>
        <ul className='flex gap-2 md:gap-4'>
          <li href='#'>
            <img className='h-6 md:h-7' src='/images/flipkart.png' alt='' />
          </li>
          <li href='#'>
            <img className='h-6 md:h-7' src='/images/amazon.png' alt='' />
          </li>
        </ul>
      </div>
      <div className='shoe w-full md:w-1/2'>
        <img className='' src='/images/shoe.png' alt='' />
      </div>
    </div>
  );
};

export default Home;
