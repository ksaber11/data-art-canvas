import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & ML",
      icon: "🧠",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "TensorFlow/PyTorch", level: 90 },
        { name: "Scikit-learn", level: 88 },
        { name: "SQL", level: 92 }
      ]
    },
    {
      title: "3D & Visualization",
      icon: "🎨",
      skills: [
        { name: "Blender", level: 90 },
        { name: "Cinema 4D", level: 85 },
        { name: "Unity", level: 80 },
        { name: "Three.js", level: 85 },
        { name: "Unreal Engine", level: 75 }
      ]
    },
    {
      title: "Data Visualization",
      icon: "📊",
      skills: [
        { name: "D3.js", level: 88 },
        { name: "Plotly", level: 90 },
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Observable", level: 75 }
      ]
    },
    {
      title: "Development",
      icon: "💻",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "WebGL", level: 78 },
        { name: "Docker", level: 75 }
      ]
    }
  ];

  const tools = [
    "Jupyter", "VSCode", "Git", "AWS", "GCP", "Figma", "After Effects", 
    "Premiere Pro", "Photoshop", "Illustrator", "Maya", "Houdini"
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning data science, machine learning, 3D modeling, and creative technologies
          </p>
        </div>
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card smooth-transition hover:scale-105 hover:glow-primary">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tools & Technologies */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium smooth-transition hover:bg-primary hover:text-primary-foreground hover:scale-110 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;