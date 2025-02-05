// 'use client'
// import { simpleProduct } from '@/interface'
// import React, { useEffect, useState } from 'react'
// import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/action'
// import Swal from 'sweetalert2'

// const CartPage = () => {
//     const [cartItems, setCartItems] = useState<simpleProduct[]>([])
//     useEffect(() => {
//         setCartItems(getCartItems())
//     }, []);

//     const handleRemove = (id:string) => {
//         Swal.fire({
//         title:"Are you sure?",
//         text: 'You will not be able to recover this item',
//         icon:'warning',
//         showCancelButton:true,
//         confirmButtonColor:'#3085d6',
//         cancelButtonColor:'#d33',
//         confirmButtonText:'Yes remove it',
//         }).then((result) => {
//             if(result.isConfirmed){
//                 removeFromCart(id)
//                 setCartItems(getCartItems())
//                 Swal.fire("Removed", "Item has been removed", "success")
//             }
//         })
//     };

//     const handleQuantityChange = (id:string, quantity:number) => {
//         updateCartQuantity(id, quantity)
//         setCartItems(getCartItems())
//     };

//     const handleIncrement = (id:string) => {
//         const product = cartItems.find((item) => item._id === id);
//         if(product)
//             handleQuantityChange(id, product.inventory + 1)
//     };

//     const handleDecrement = (id:string) => {
//         const product = cartItems.find((item) => item._id === id);
//         if(product && product.inventory > 1)
//             handleQuantityChange(id, product.inventory - 1)
//     };

//     const calculatedTotal = () =>{
//         return cartItems.reduce((total, item) => total + item.price * item.inventory, 0)
//     };

//     const handleProceed = () => {
//         Swal.fire({
//             title:'Proceed to checkout',
//             text:'Please review your cart before checkout',
//             icon:'question',
//             showCancelButton:true,
//             confirmButtonColor:"#3085ab",
//             cancelButtonColor:"#d53",
//             confirmButtonText:'Yes, proceed!'  
//         }).then((result) => {
//             if(result.isConfirmed){
//             Swal.fire('Success','Your order has been successfully','success')
//             setCartItems([])
//             }
//         })
//     }

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CartPage



'use client';
import { simpleProduct } from '@/interface';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/action';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<simpleProduct[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed', 'Item has been removed', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.inventory + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
  };


  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to checkout',
      text: 'Please review your cart before checkout',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085ab',
      cancelButtonColor: '#d53',
      confirmButtonText: 'Yes, proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been successfully placed', 'success');

        router.push("/checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty. Add items to see them here.</p>
        </div>
      ) : (
        <>
          {/* Cart Items Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-3 px-4 text-left">Product</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                  <th className="py-3 px-4 text-center">Price</th>
                  <th className="py-3 px-4 text-center">Total</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className="border-b hover:bg-gray-100">
                    <td className="py-4 px-4 flex items-center space-x-4">
                      {item.imageUrl && (
                        <img
                        src={item.imageUrl}
                        width={500}
                        height={500}
                        alt={item.title}
                        className="w-16 h-16 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      )}
                      <p className="text-gray-800">{item.title}</p>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded"
                          onClick={() => handleDecrement(item._id)}
                        >
                          -
                        </button>
                        <span className="text-gray-700 font-medium">
                          {item.inventory}
                        </span>
                        <button
                          className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-2 py-1 rounded"
                          onClick={() => handleIncrement(item._id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">${item.price.toFixed(2)}</td>
                    <td className="py-4 px-4 text-center">
                      ${(item.price * item.inventory).toFixed(2)}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                        onClick={() => handleRemove(item._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="mt-6 bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Summary</h2>
            <p className="text-gray-700 font-medium">
              Total Items: {cartItems.length}
            </p>
            <p className="text-gray-700 font-medium">
              Total Price: ${calculatedTotal().toFixed(2)}
            </p>
            <button
              className="mt-4 bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 w-full"
              onClick={handleProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
