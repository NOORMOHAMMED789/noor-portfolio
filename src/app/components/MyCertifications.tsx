import React from "react";
import Card from "./Card";

type CertificationsProps = Omit<React.ComponentProps<typeof Card>, "children">;

const MyCertifications: React.FC<CertificationsProps> = (props) => {
  return (
    <>
      <h2>My Certification details</h2>
      <section className="flex flex-wrap lg:justify-between lg:items-center lg:gap-10">
      <Card {...props} className='grow lg:grow'>
        <div>My Projects details</div>
      </Card>
      <Card {...props} className="grow lg:grow">
        <div>My Projects details</div>
      </Card>
      <Card {...props} className="grow lg:grow">
        <div>My Projects details</div>
      </Card>
      </section>
    </>
  );
};

export default MyCertifications;
