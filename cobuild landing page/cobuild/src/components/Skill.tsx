import SkillAnimation from "./SkillCompo/Skillanimation";
import SkillHeading from "./SkillCompo/skillHeading";

export default function Skill() {
  return (
    <section id="skills" className="z-40 relative bg-white">
      <div className=" flex flex-col justify-center space-y-20 
       md:flex-row md:space-y-0 md:space-x-20 container mx-auto py-20 px-6">
        {/* heading */}
        <SkillHeading />
        {/* Results */}
        <SkillAnimation />
      </div>
    </section>
  );
}
