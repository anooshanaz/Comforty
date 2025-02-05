
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { CgChevronRight } from "react-icons/cg";
// import { simpleProduct } from "@/interface";
// import { getCartItems } from "../actions/action";
// import Swal from "sweetalert2";
// import { client } from "@/sanity/lib/client";


// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState<simpleProduct[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     address: false,
//     city: false,
//     zipCode: false,
//     phone: false,
//     email: false,
//   });

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.inventory,
//     0
//   );
//   const total = Math.max(subtotal - discount, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       address: !formValues.address,
//       city: !formValues.city,
//       zipCode: !formValues.zipCode,
//       phone: !formValues.phone,
//       email: !formValues.email,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handlePlaceOrder = async () => {
//             Swal.fire({
//                 title: 'Processing your order....',
//                 text: 'Please wait a moment!',
//                 icon: 'info',
//                 showCancelButton: true,
//                 confirmButtonColor: '#3085d6',
//                 cancelButtonColor: '#d33',
//                 confirmButtonText: 'Proceed!',
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     if (validateForm()) {
//                         localStorage.removeItem('appliedDiscount');
//                         Swal.fire(
//                             'Success!',
//                             'Your order has been successfully processed!',
//                             'success'
//                         );
//                     } else {
//                         Swal.fire(
//                             "Error!",
//                             'Please fill in all the fields before processing.',
//                             'error'
//                         );
//                     }
//                 }
//             });
    
    
//             const orderData = {
//                 _type: 'order',
//                 firstName: formValues.firstName,
//                 lastName: formValues.lastName,
//                 email: formValues.email,
//                 phone: formValues.phone,
//                 address: formValues.address,
//                 zipCode: formValues.zipCode,
//                 city: formValues.city,
//                 cartItems: cartItems.map(item => ({
//                     _type:'reference',
//                     _ref: item._id
//                 }
//                 )),
//                 total: total,
//                 discount: discount,
//                 orderDate: new Date().toISOString
//             };
    
//             try{
//                 await client.create(orderData)
//                 localStorage.removeItem('appliedDiscount')
//             } catch (error) {
//                 console.log('error creating order',error)
//             }
//         };

//   return (
//     <div className={`min-h-screen bg-gray-50`}>
//       {/* Breadcrumb */}
//       <div className="mt-6">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex items-center gap-2 py-4">
//             <Link
//               href="/cart"
//               className="text-[#666666] hover:text-black transition text-sm"
//             >
//               Cart
//             </Link>
//             <CgChevronRight className="w-4 h-4 text-[#666666]" />
//             <span className="text-sm">Checkout</span>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Order Summary */}
//           <div className="bg-white border rounded-lg p-6 space-y-4">
//             <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div
//                   key={item._id}
//                   className="flex items-center gap-4 py-3 border-b"
//                 >
//                   <div className="w-16 h-16 rounded overflow-hidden">
//                     {item.imageUrl && (
//                         <img
//                         src={item.imageUrl}
//                         width={500}
//                         height={500}
//                         alt={item.title}
//                         className="w-16 h-16 object-cover transition-transform duration-300 hover:scale-110"
//                       />
//                       )}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-sm font-medium">{item.productName}</h3>
//                     <p className="text-xs text-gray-500">
//                       Quantity: {item.inventory}
//                     </p>
//                   </div>
//                   <p className="text-sm font-medium">
//                     ${item.price * item.inventory}
//                   </p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-sm text-gray-500">Your cart is empty.</p>
//             )}
//             <div className="text-right pt-4">
//               <p className="text-sm">
//                 Subtotal: <span className="font-medium">${subtotal}</span>
//               </p>
//               <p className="text-sm">
//                 Discount: <span className="font-medium">-${discount}</span>
//               </p>
//               <p className="text-lg font-semibold">
//                 Total: ${total.toFixed(2)}
//               </p>
//             </div>
//           </div>

//           {/* Billing Form */}
//           <div className="bg-white border rounded-lg p-6 space-y-6">
//             <h2 className="text-xl font-semibold">Billing Information</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   id="firstName"
//                   placeholder="Enter your first name"
//                   value={formValues.firstName}
//                   onChange={handleInputChange}
//                   className="border"
//                 />
//                 {formErrors.firstName && (
//                   <p className="text-sm text-red-500">
//                     First name is required.
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="lastName">Last Name </label>
//                 <input
//                   id="lastName"
//                   placeholder="Enter your last name"
//                   value={formValues.lastName}
//                   onChange={handleInputChange}
//                 />
//                 {formErrors.lastName && (
//                   <p className="text-sm text-red-500">
//                     Last name is required.
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <label htmlFor="address">Address </label>
//               <input
//                 id="address"
//                 placeholder="Enter your address"
//                 value={formValues.address}
//                 onChange={handleInputChange}
//               />
//               {formErrors.address && (
//                 <p className="text-sm text-red-500">Address is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="city">City</label>
//               <input
//                 id="city"
//                 placeholder="Enter your city"
//                 value={formValues.city}
//                 onChange={handleInputChange}
//               />
//               {formErrors.city && (
//                 <p className="text-sm text-red-500">City is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="zipCode">Zip Code</label>
//               <input
//                 id="zipCode"
//                 placeholder="Enter your zip code"
//                 value={formValues.zipCode}
//                 onChange={handleInputChange}
//               />
//               {formErrors.zipCode && (
//                 <p className="text-sm text-red-500">Zip Code is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="phone">Phone</label>
//               <input
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 value={formValues.phone}
//                 onChange={handleInputChange}
//               />
//               {formErrors.phone && (
//                 <p className="text-sm text-red-500">Phone is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 placeholder="Enter your email address"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//               />
//               {formErrors.email && (
//                 <p className="text-sm text-red-500">Email is required.</p>
//               )}
//             </div>
//             <button
//               className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
//               onClick={handlePlaceOrder}
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import { simpleProduct } from "@/interface";
import { getCartItems } from "../actions/action";
import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<simpleProduct[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: "Processing your order....",
      text: "Please wait a moment!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (validateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire("Success!", "Your order has been successfully processed!", "success");
        } else {
          Swal.fire("Error!", "Please fill in all the fields before processing.", "error");
        }
      }
    });

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      zipCode: formValues.zipCode,
      city: formValues.city,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.log("error creating order", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-4">
          <Link href="/cart" className="text-gray-600 hover:text-black transition text-sm">
            Cart
          </Link>
          <CgChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-sm">Checkout</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg shadow-sm p-6 space-y-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-4 border-b">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.productName}</h3>
                    <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                  </div>
                  <p className="text-sm font-medium">${item.price * item.inventory}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="space-y-2 pt-4">
              <div className="flex justify-between">
                <p className="text-sm">Subtotal:</p>
                <p className="text-sm font-medium">${subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Discount:</p>
                <p className="text-sm font-medium">-${discount}</p>
              </div>
              <div className="flex justify-between border-t pt-2">
                <p className="text-lg font-semibold">Total:</p>
                <p className="text-lg font-semibold">${total.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Billing Form */}
          <div className="bg-white border rounded-lg shadow-sm p-6 space-y-6">
            <h2 className="text-xl font-semibold">Billing Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                   required
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500 mt-1">First name is required.</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    formErrors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                   required
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500 mt-1">Last name is required.</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.address ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                 required
              />
              {formErrors.address && (
                <p className="text-sm text-red-500 mt-1">Address is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.city ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                 required
              />
              {formErrors.city && (
                <p className="text-sm text-red-500 mt-1">City is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.zipCode ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                 required
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500 mt-1">Zip Code is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                 required
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500 mt-1">Phone is required.</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                 required
              />
              {formErrors.email && (
                <p className="text-sm text-red-500 mt-1">Email is required.</p>
              )}
            </div>
            <button
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}