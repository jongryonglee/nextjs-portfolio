// components/Logo.jsx
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-start">
      <Link href="/" className="text-lg sm:text-xl font-bold text-white">
        Jon Lee
      </Link>
    </div>
  );
};

export default Logo;
