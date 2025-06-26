import React from "react";
import Card from "./Card";

type EducationProps = React.ComponentProps<typeof Card>;

const Education: React.FC<EducationProps> = (props) => {
  return (
    <div className="flex flex-wrap">
      <h2>Education details</h2>
      <Card {...props}>
        <div>Education details</div>
      </Card>
      <Card {...props}>
        <div>Education details</div>
      </Card>
      <Card {...props}>
        <div>Education details</div>
      </Card>

    </div>
  );
};

export default Education;
