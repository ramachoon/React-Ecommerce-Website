import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AppContext from '../context/AppContext/AppContext'
import ProductCard from './ProductCard';
import CartProduct from './CartProduct';
import emptyCart from '../images/empty-cart.png';
import WishlistProduct from './WishlistProduct';
import toast from 'react-hot-toast';

export default function WishlistComponent({openWishlist,setOpenWishlist}) {
   let appContext = useContext(AppContext);
   const handleEmptyWishlist = () => {
    appContext.clearWishlist(); // Call the function to clear cart items
    setOpenWishlist(false); // Close the cart after emptying it
    toast.success("All Products Removed from Wishlist Successfully")
  };
    return (
      <Transition.Root show={openWishlist} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenWishlist}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>
  
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                    <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Wishlist
                          </Dialog.Title>
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="relative text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpenWishlist(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                            x 
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative flex-1 px-4 mt-6 sm:px-6">
                          {appContext.wishlistItems.length <1 ? (<>
                          <img src={emptyCart} className="w-full" alt="Empty Wishlist"/>
                          <p className='text-center'>
                              No Products In The Wishlist
                          </p>
                          </>):(appContext.wishlistItems?.map((product)=>{
                            return(
                              <>
                              {/* <WishlistProduct product={product} /> */}
                              <WishlistProduct key={product.id} product={product} />
                              </>
                            )
                          }))}
                          {appContext.wishlistItems.length > 0 && (
        <div className="flex justify-end mt-4">
                          <button
            onClick={handleEmptyWishlist}
            className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
          >
            Empty Wishlist
          </button>
          </div>)}
                        

                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
}
