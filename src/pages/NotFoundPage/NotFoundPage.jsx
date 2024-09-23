import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p className={css.message}>Not found page!</p>
      <div className={css.link}>
        <Link to="/home">
          Go Home <IoHomeSharp />
        </Link>
      </div>
    </div>
  );
}
