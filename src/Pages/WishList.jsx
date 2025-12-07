import { HeartIcon  } from "lucide-react";
import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishList(saved);
  }, []);

  function removeFromWishList(idx){
    const updated = [...wishList];
    updated.splice(idx , 1);
    setWishList(updated);
    localStorage.setItem("wishlist" , JSON.stringify(updated));
  }

  return (
    <div className="w-full h-[calc(100vh-65px)] bg-(--bg)">
      <div className="max-w-[1400px] mx-auto pt-8 h-full flex flex-col">
        <h2 className="text-2xl font-bold text-(--text-heading)">Your Saved Important notes</h2>
        {wishList.length === 0 && (
          <p className="text-(--text-main) mt-4">No Notes in WishList</p>
        )}
        <div className="flex-1 overflow-y-scroll hide-scrollbar mt-4 grid grid-cols-2 gap-4">
          {wishList.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative w-full border border-(--border) rounded-md p-4 mb-4 bg-(--bg-card) text-(--text-main)"
              >
                <h2 className="text-center font-bold text-xl mb-4 capitalize">
                  {elem.title}
                </h2>
                <hr className="mb-4" />
                <pre className="whitespace-pre-wrap wrap-break-word">
                  <code>{elem.content}</code>
                </pre>
                <HeartIcon 
                  className="absolute top-4 right-4 fill-(--text-main)" 
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
