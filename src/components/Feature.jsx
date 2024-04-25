import FeatureItem from "./FeatureItem";
import { v4 as uuidv4 } from "uuid";

function Feature(props) {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h2 className="pb-2 border-bottom">{props.title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {props.skills.map((skill) => {
          return (
            <FeatureItem
              key={uuidv4()}
              title={skill.name}
              icon={skill.icon}
              colored={skill.colored}
              img={skill.img}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Feature;
