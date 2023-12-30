// components/Navbar.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar: React.FC = () => {
  const pathName = usePathname()
  if(pathName === "/signUp" || pathName === "/login"){
    return " "
  }
  const menuItems = (
    <>
      <li>
        {" "}
        <Link href="/">Home</Link>
      </li>
    
      <li>
        {" "}
        <Link href="/allcategory">All Category</Link>
      </li>
      

      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/wishlist">Wishlist</Link>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            Tech & Gear
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <Link href={"/login"} className="btn">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
