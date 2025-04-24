import Link from "next/link";
import {
  FaCircleUser,
  FaCode,
  FaMailchimp,
  FaRegCommentDots,
} from "react-icons/fa6";
import "../css/navigator.css";

const Navigator = () => {
  return (
    <nav>
      <ul>
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
        <li>
          <Link href="#contact">
            <FaRegCommentDots />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
