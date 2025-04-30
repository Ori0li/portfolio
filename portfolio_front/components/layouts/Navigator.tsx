import Link from "next/link";
import { FaCircleUser, FaCode, FaMailchimp } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import "../styles/navigator.css";

const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" aria-label="홈으로 이동">
            <IoHomeOutline />
          </Link>
        </li>
        <li>
          <Link href="#about">
            <FaCircleUser />
          </Link>
        </li>
        <li>
          <Link href="#skill">
            <FaCode />
          </Link>
        </li>
        <li>
          <Link href="#project">
            <FaMailchimp />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
