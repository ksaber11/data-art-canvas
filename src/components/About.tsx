import { Card } from "@/components/ui/card";
import { Brain, Box, BarChart3, Palette } from "lucide-react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

const About = () => {
  // Rive animation for skills showcase
  const { RiveComponent: SkillsRive } = useRive({
    src: "https://public.rive.app/community/runtime-files/1447-2487-liquid-download.riv",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  const skills = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Machine Learning",
      description: "Advanced algorithms and predictive modeling for complex data analysis"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Data Visualization",
      description: "Interactive dashboards and compelling visual narratives"
    },
    {
      icon: <Box className="w-8 h-8 text-secondary" />,
      title: "3D Modeling",
      description: "Immersive environments and detailed architectural visualization"
    },
    {
      icon: <Palette className="w-8 h-8 text-secondary" />,
      title: "Creative Design",
      description: "Artistic direction and innovative visual concepts"
    }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate professional who lives at the intersection of data science and creative visualization, 
            turning complex datasets into meaningful insights and stunning 3D experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              With a background in both computer science and digital arts, I've developed a unique perspective 
              that combines analytical rigor with creative vision. My work spans from building predictive models 
              that drive business decisions to creating immersive 3D worlds that tell compelling stories.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe that data without narrative is just numbers, and visuals without purpose are just decoration. 
              My mission is to bridge these worlds, creating experiences that are both analytically sound and 
              visually captivating.
            </p>
          </div>
          
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Rive Animation Background */}
            <div className="absolute inset-0 opacity-20">
              <SkillsRive />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="text-center space-y-3 smooth-transition hover:scale-105">
                    <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;