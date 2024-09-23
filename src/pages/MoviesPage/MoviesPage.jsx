import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  return (
    <div>
      <div className={css.link}>
        <IoArrowBackSharp />
        <Link to="/home">Go back</Link>
      </div>
    </div>
  );
}
