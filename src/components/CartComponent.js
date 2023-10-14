import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AppContext from '../context/AppContext/AppContext'
import ProductCard from './ProductCard';
import CartProduct from './CartProduct';
import emptyCart from '../images/empty-cart.png';
import toast from 'react-hot-toast';
export default function CartComponent({openCart,setOpenCart}) {
   const appContext = useContext(AppContext);
   const formattedTotalPrice = appContext.calculateTotalCartPrice().toFixed(2);

   const handleEmptyCart = () => {
    appContext.clearCart(); // Call the function to clear cart items
    setOpenCart(false); // Close the cart after emptying it
    toast.success("All Products Removed from Cart Successfully")
  };

    return (
      <Transition.Root show={openCart} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenCart}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
  
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpenCart(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                            x 
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {appContext.cartItems.length <1 ? (<>
                          <img src={emptyCart} className="w-full" alt="Empty Cart"/>
                          <p className='text-center'>
                              No Products In The Cart
                          </p>
                          </>):(appContext.cartItems?.map((product)=>{
                            return(
                              <>
                              <CartProduct product={product} />
                              </>
                            )
                          }))}
                          {appContext.cartItems.length > 0 &&(
                          <h2 className="text-xl mt-10 font-bold flex justify-end ">Total Price: ${formattedTotalPrice}</h2>)}
                          {appContext.cartItems.length > 0 && (
        <div className="flex justify-end mt-4">
          <button
            onClick={handleEmptyCart}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Empty Cart
          </button>
        </div>
      )}
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