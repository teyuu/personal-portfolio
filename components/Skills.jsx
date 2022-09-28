import React from "react";
import IndividualSkill from "./IndividualSkill";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        {/* Grid container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <IndividualSkill 
            imagen={'https://i.ibb.co/z8Rj5RP/html.png'}
            title={'HTML'}
            />
             <IndividualSkill 
            imagen={'https://i.ibb.co/80pK0p0/css.png1'}
            title={'CSS'}
            />
            <IndividualSkill 
            imagen={'https://i.ibb.co/QfdFLG3/tailwind.png'}
            title={'Tailwind'}
            />
            <IndividualSkill 
            imagen={'https://i.ibb.co/vkJRM4P/bootstrap.png'}
            title={'Bootstrap'}
            />
             <IndividualSkill 
            imagen={'https://i.ibb.co/375t6KM/javascript.png'}
            title={'Javascript'}
            />
            <IndividualSkill 
            imagen={'https://i.ibb.co/CBwzsWH/react.png'}
            title={'React'}
            />
            <IndividualSkill 
            imagen={'https://i.ibb.co/x788Dgh/nextjs.png'}
            title={'NextJS'}
            />
            <IndividualSkill 
            imagen={'https://i.ibb.co/PFJJfMp/node.png'}
            title={'NodeJS'}
            />
            <IndividualSkill 
            imagen={'https://i.ibb.co/rkg439x/express.png'}
            title={'Express'}
            />
            <IndividualSkill 
            imagen={'https://i.ibb.co/xCPFRBN/postgre.png'}
            title={'PostgreSQL'}
            />
             <IndividualSkill 
            imagen={'https://i.ibb.co/fHk70Z3/mongo.png'}
            title={'MongoDB'}
            />
            <IndividualSkill 
            imagen={'https://i.ibb.co/fQ2jnrG/github1.png'}
            title={'GitHub'}
            />
        </div>
      </div>
    </div>
  );
};

export default Skills;
