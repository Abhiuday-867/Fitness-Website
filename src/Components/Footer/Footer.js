import classes from "./Footer.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Fragment } from "react";

const Footer = (props) => {
  return (
    <Fragment>
      <footer className={classes.main}>
        <div className={classes.icons}>
          <AiOutlineTwitter className={classes.siconT} />
          <AiFillFacebook className={classes.siconF} />
          <AiFillLinkedin className={classes.siconL} />
          <AiFillInstagram className={classes.siconI} />
        </div>

        <p>
          Bulit a website on Fitness using React framework , css , html &copy;
          copyright issue dont copy the website according to some section .
          bhais dhjkeridmdkmdk kdmjcjkdjnfkm dmfmks kdkfosfdk dkfmdixvdmvk mmdkd
          ddd
        </p>
        <ul>
          <li className={classes.linkedlist}>
            <a>Contact us </a>
          </li>
          <li className={classes.linkedlist}>
            <a> Company </a>
          </li>
          <li className={classes.linkedlist}>
            <a> Carrers</a>
          </li>
          <li className={classes.linkedlist}>
            <a> Terms</a>
          </li>
        </ul>
      </footer>
    </Fragment>
  );
};
export default Footer;
