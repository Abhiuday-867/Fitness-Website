import classes from "./Free.module.css";
import freetrial from "../../Images/download.jpg";
import { Fragment } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";
const FreeTrial = () => {
  const History = useHistory();
  const gobackHandler = (props) => {
    History.goBack();
  };
  return (
    <Fragment>
      <AiOutlineArrowLeft className={classes.icon} onClick={gobackHandler} />

      <div className={classes.freetrail}>
        <img src={freetrial} alt="basic img" />
      </div>
      <div className={classes.content}>
        <h1>Sales Navigator</h1>
        <p>You know the art of building . We can help with the science</p>
      </div>
    </Fragment>
  );
};
export default FreeTrial;
