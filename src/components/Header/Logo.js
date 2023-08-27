import Image from "next/image";
import Link from "next/link";
import React from "react";

import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center text-dark dark:text-light">
      <div className="  w-12  md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="CodeBucks"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold dark:font-medium text-lg md:text-xl">CodeBucks</span>
    </Link>
  );
};

export default Logo;
