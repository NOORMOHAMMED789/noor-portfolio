import React from "react";
import Card from "./Card";

type EducationProps = React.ComponentProps<typeof Card>;

const Education: React.FC<EducationProps> = (props) => {
  return (
    <>
      <h2>Education details</h2>
      <section className="flex flex-wrap lg:justify-between lg:items-center lg:gap-10">
      <Card {...props} className='grow lg:grow'>
        <div>Education details</div>
      </Card>
      <Card {...props} className="grow lg:grow">
        <div>Education details</div>
      </Card>
      <Card {...props} className="grow lg:grow">
        <div>Education details</div>
      </Card>
      </section>
    </>
  );
};

export default Education;
