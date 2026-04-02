import { FaJava, FaDocker, FaAws } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiApachekafka, SiRedis, SiRabbitmq } from "react-icons/si";
import { MdSecurity, MdApi } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
    <div id="skills" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-20 text-center">

      <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight
      text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
        🛠 Skills
      </h2>

      <p className="text-gray-400 mt-3">
        Technologies I use to build scalable backend systems
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-10">

        {/* Backend */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl">

          <h3 className="text-xl font-semibold text-blue-400 mb-6">
            Backend
          </h3>

          <div className="flex flex-wrap gap-4 justify-center">

            <SkillIcon icon={<FaJava className="text-orange-500"  />} name="Java" color="hover:shadow-[0_0_15px_rgba(255,100,100,0.6)]" />
            <SkillIcon icon={<SiSpringboot className="text-green-500" />} name="Spring Boot" color="hover:shadow-[0_0_15px_rgba(0,255,100,0.6)]" />
            <SkillIcon icon={<MdSecurity  className="text-red-400"/>} name="Spring Security" color="hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]" />
            <SkillIcon icon={<MdApi className="text-blue-400"/>} name="REST APIs" color="hover:shadow-[0_0_15px_rgba(0,150,255,0.6)]" />

          </div>
        </div>

        {/* Database */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl">

          <h3 className="text-xl font-semibold text-green-400 mb-6">
            Database
          </h3>

          <div className="flex flex-wrap gap-4 justify-center">

            <SkillIcon icon={<SiMysql className="text-blue-500" />} name="MySQL" color="hover:shadow-[0_0_15px_rgba(0,150,255,0.6)]" />
            <SkillIcon icon={<SiMongodb className="text-green-600"/>} name="MongoDB" color="hover:shadow-[0_0_15px_rgba(0,255,100,0.6)]" />
            <SkillIcon icon={<SiPostgresql className="text-indigo-500" />} name="PostgreSQL" color="hover:shadow-[0_0_15px_rgba(100,150,255,0.6)]" />

          </div>
        </div>

        {/* Tools */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl">

          <h3 className="text-xl font-semibold text-purple-400 mb-6">
            Tools & Tech
          </h3>

          <div className="flex flex-wrap gap-4 justify-center">

            <SkillIcon icon={<SiApachekafka />} name="Kafka" color="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
            <SkillIcon icon={<SiRabbitmq className="text-orange-400"/>} name="RabbitMQ" color="hover:shadow-[0_0_15px_rgba(255,150,0,0.6)]" />
            <SkillIcon icon={<SiRedis className="text-red-600"/>} name="Redis" color="hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]" />
            <SkillIcon icon={<FaDocker className="text-blue-600" />} name="Docker" color="hover:shadow-[0_0_15px_rgba(0,200,255,0.6)]" />
            <SkillIcon icon={<FaAws className="text-yellow-400" />} name="AWS" color="hover:shadow-[0_0_15px_rgba(255,200,0,0.6)]" />

          </div>
        </div>

      </div>
    </div>
    </section>
  );
}

/* Reusable Skill Icon */
function SkillIcon({ icon, name, color }) {
  return (
    <div className={`group flex flex-col items-center p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-lg transition duration-300 hover:scale-110 hover:-translate-y-1 ${color}`}>
      
      <div className="text-3xl mb-2 text-gray-200 group-hover:text-white">
        {icon}
      </div>

      <p className="text-sm text-gray-300 group-hover:text-white">
        {name}
      </p>
    </div>
  );
}