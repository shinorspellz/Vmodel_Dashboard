import React, { useEffect, useState } from "react";

function AddCoupon({ coupon }) {
  const [latest, setLatest] = useState([]);
  const [limit, setLimit] = useState([]);

  useEffect(() => {
    if (coupon && coupon.length > 0) {
      // Slice the latest 6 items from the 'coupon' array
      const cutdown = coupon.slice(-6);
      setLimit(cutdown);
    }
  }, []);

  console.log("latest", limit);

  const coupons = [
    {
      code: "SAVE10",
      discountPercentage: 10,
      expirationDate: "2023-12-31",
    },
    {
      code: "DISCOUNT20",
      discountPercentage: 20,
      expirationDate: "2023-10-15",
    },
    {
      code: "FREESHIPPING",
      freeShipping: true,
      expirationDate: "2023-11-30",
    },
    {
      code: "SALE25",
      discountPercentage: 25,
      expirationDate: "2023-10-31",
    },
    {
      code: "50OFF",
      discountPercentage: 50,
      expirationDate: "2023-11-15",
    },
  ];
  return (
    <div className="w-full h-[45vh] rounded-2xl mt-4 bg-blue-800 mr-4 shadow-lg">
      <div className="flex justify-between mx-4">
        <div className="text-xl font-semibold text-white p-4 underline">
          List of Coupons
        </div>
        <div className="p-4">
          <button className="flex gap-2  bg-yellow-500 text-white px-4 py-2 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3>Add Coupon</h3>
          </button>
        </div>
      </div>
      <div>
        <div className="mx-4 text-lg flex  border-b-2 border-gray-200 bg-blue-900 py-2 px-2 text-white">
          <div className="w-full">Coupon Code</div>
          <div className="w-full">Title</div>
          <div className="w-full  text-right">Expire Date</div>
        </div>
        {limit?.length > 0 &&
          limit.map((coupon) => (
            <div className="flex gap-2 mx-4 text-white text-sm  border-b-2 border-gray-200">
              <div className="w-full py-1">{coupon.code}</div>
              <div className="w-full py-1">{coupon.title}</div>
              <div className="w-full py-1 text-right">
                {coupon.expiry_date == null ? <div>Nun</div> : <div>{coupon.expiry_date }</div>}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AddCoupon;
