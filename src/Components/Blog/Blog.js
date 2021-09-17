import { Fragment } from "react";
import image1 from "../../Images/bruno-nascimento-PHIgYUGQPvU-unsplash.jpg";
import image2 from "../../Images/jannis-brandt-mmsQUgMLqUo-unsplash.jpg";
import image3 from "../../Images/risen-wang-20jX9b35r_M-unsplash.jpg";
import classes from "./Blog.Module.css";

const Blog = (props) => {
  return (
    <Fragment>
      <div className={classes.main}>
        <h2>BLOG INFORMATION</h2>
        <div className={classes.division}>
          <p>
            Physical fitness is a state of health and well-being and, more
            specifically, the ability to perform aspects of sports, occupations
            and daily activities. Physical fitness is generally achieved through
            proper nutrition,[1] moderate-vigorous physical exercise,[2] and
            sufficient rest.[3]Fitness is defined as the quality or state of
            being fit and healthy.[5] Around 1950, perhaps consistent with the
            Industrial Revolution and the treatise of World War II, the term
            "fitness" increased in western vernacular by a factor of ten.[6] The
            modern definition of fitness describes either a person or machine's
            ability to perform a specific function or a holistic definition of
            human adaptability to cope with various situations. This has led to
            an interrelation of human fitness and attractiveness that has
            mobilized global fitness and fitness equipment.
          </p>
          <img src={image1} alt="fitness image1 " />
        </div>
        <div className={classes.division}>
          <p>
            Before the industrial revolution, fitness was defined as the
            capacity to carry out the day's activities without undue fatigue or
            lethargy.A comprehensive fitness program tailored to an individual
            typically focuses on one or more specific skills,[7] and on age-[8]
            or health-related needs such as bone health.[9] Many sources[10]
            also cite mental, social and emotional health as an important part
            of overall fitness. This is often presented in textbooks as a
            triangle made up of three points, which represent physical,
            emotional, and mental fitness. Physical fitness can also prevent or
            treat many chronic health conditions brought on by unhealthy
            lifestyle or aging.[11] Working out can also help some people sleep
            better and possibly alleviate some mood disorders in certain
            individuals.[12]
          </p>
          <img src={image2} alt="fitness image 2 " />
        </div>
        <div className={classes.division}>
          <p>
            However, with automation and changes in lifestyles physical fitness
            is now considered a measure of the body's ability to function
            efficiently and effectively in work and leisure activities, to be
            healthy, to resist hypokinetic diseases, and to meet emergency
            situations.[4].Developing research has demonstrated that many of the
            benefits of exercise are mediated through the role of skeletal
            muscle as an endocrine organ. That is, contracting muscles release
            multiple substances known as myokines, which promote the growth of
            new tissue, tissue repair, and various anti-inflammatory functions,
            which in turn reduce the risk of developing various inflammatory
            diseases.[13]
          </p>
          <img src={image3} alt="image 3" />
        </div>
      </div>
    </Fragment>
  );
};
export default Blog;
