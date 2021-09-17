import classes from "./Header.module.css";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import gymImage from "../Images/anastase-maragos-FP7cfYPPUKM-unsplash.jpg";
import Footer from "./Footer/Footer";
import Blog from "./Blog/Blog";
import { MdFitnessCenter } from "react-icons/md";
const Header = (props) => {
  return (
    <Fragment className={classes.frag}>
      <header className={classes.header}>
        <MdFitnessCenter className={classes.icon} />
        <h1>FITNESS HUSTLER</h1>

        <nav>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>Register</li>
            <Link to="/freetrial" className={classes.list}>
              Free Trial
            </Link>
          </ul>
        </nav>
      </header>

      <div className={classes.container}>
        <div className={classes["main-image"]}>
          <div className={classes.content}>
            <p>WHEN LIVES GIVES YOU THE PAIN </p>
          </div>
          <div className={classes.hustle}>
            <p> HUSTLE FOR THAT MUSCLE</p>
          </div>

          <img src={gymImage} alt="Image of a gym" />
        </div>
      </div>

      <Blog />
      <Footer />
    </Fragment>
  );
};
export default Header;
