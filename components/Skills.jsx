import React from "react";
import IndividualSkill from "./IndividualSkill";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        {/* Grid container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <IndividualSkill 
            img={'/../public/assets/skills/html.png'}
            title={'HTML'}
            />
             <IndividualSkill 
            img={'/../public/assets/skills/css.png'}
            title={'CSS'}
            />
            <IndividualSkill 
            img={'/../public/assets/skills/tailwind.png'}
            title={'Tailwind'}
            />
            <IndividualSkill 
            img={'/../public/assets/skills/bootstrap.png'}
            title={'Bootstrap'}
            />
             <IndividualSkill 
            img={'/../public/assets/skills/javascript.png'}
            title={'Javascript'}
            />
            <IndividualSkill 
            img={'/../public/assets/skills/react.png'}
            title={'React'}
            />
            <IndividualSkill 
            img={'/../public/assets/skills/nextjs.png'}
            title={'NextJS'}
            />
            <IndividualSkill 
            img={'/../public/assets/skills/node.png'}
            title={'NodeJS'}
            />
            <IndividualSkill 
            img={'/../public/assets/skills/express.png'}
            title={'Express'}
            />
            <IndividualSkill 
            img={'/../public/assets/skills/postgre.png'}
            title={'PostgreSQL'}
            />
             <IndividualSkill 
            img={'/../public/assets/skills/mongo.png'}
            title={'MongoDB'}
            />
            <IndividualSkill 
            img={'/../public/assets/skills/github1.png'}
            title={'GitHub'}
            />
        </div>
      </div>
    </div>
  );
};

export default Skills;
