import { HeartIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishList(saved);
  }, []);

  function removeFromWishList(idx) {
    const updated = [...wishList];
    updated.splice(idx, 1);
    setWishList(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  }

  return (
    <div className="w-full min-h-[calc(100vh-65px)] bg-(--bg)">
      <div className="max-w-[1400px] mx-auto pt-4 sm:pt-6 md:pt-8 h-full flex flex-col px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-(--text-heading)">
          Your Saved Important notes
        </h2>
        {wishList.length === 0 && (
          <p className="text-(--text-main) mt-4 text-sm sm:text-base">
            No Notes in WishList
          </p>
        )}
        <div className="flex-1 overflow-y-scroll hide-scrollbar mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pb-4">
          {wishList.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative w-full border border-(--border) rounded-md p-3 sm:p-4 mb-3 sm:mb-4 bg-(--bg-card) text-(--text-main)"
              >
                <h2 className="text-center font-bold text-lg sm:text-xl mb-3 sm:mb-4 capitalize pr-8">
                  {elem.title}
                </h2>
                <hr className="mb-3 sm:mb-4" />
                <pre className="whitespace-pre-wrap wrap-break-word text-sm sm:text-base">
                  <code>{elem.content}</code>
                </pre>
                <HeartIcon
                  size={20}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 fill-(--text-main) cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => removeFromWishList(idx)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishList;
