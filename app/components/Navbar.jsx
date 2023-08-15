import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex space-x-7 mt-8 ml-6 font-bold text-lg">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
