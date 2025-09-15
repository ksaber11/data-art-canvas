import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Neural Network Visualization",
      category: "Data Science",
      description: "Interactive 3D visualization of deep learning architectures with real-time training data",
      tags: ["Python", "TensorFlow", "Three.js", "D3.js"],
      type: "data-science",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop"
    },
    {
      title: "Architectural Walkthrough",
      category: "3D Visualization", 
      description: "Photorealistic 3D tour of modern residential complex with interactive elements",
      tags: ["Blender", "Unreal Engine", "WebGL", "React"],
      type: "3d-art",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      title: "Customer Analytics Dashboard",
      category: "Data Science",
      description: "Real-time analytics platform processing 1M+ daily transactions with predictive insights",
      tags: ["Python", "Pandas", "Plotly", "PostgreSQL"],
      type: "data-science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      title: "Cosmic Data Installation",
      category: "3D Art",
      description: "Interactive art piece visualizing astronomical data as immersive cosmic environment",
      tags: ["Cinema 4D", "TouchDesigner", "Python", "NASA API"],
      type: "3d-art", 
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop"
    },
    {
      title: "Supply Chain Optimization",
      category: "Data Science",
      description: "ML-powered logistics optimization reducing operational costs by 23%",
      tags: ["R", "Scikit-learn", "Tableau", "AWS"],
      type: "data-science",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
    },
    {
      title: "Virtual Museum Experience",
      category: "3D Visualization",
      description: "VR museum showcasing historical artifacts with detailed 3D reconstructions",
      tags: ["Unity", "C#", "Photogrammetry", "Oculus SDK"],
      type: "3d-art",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of projects spanning data science, machine learning, 3D visualization, and interactive experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden group smooth-transition hover:scale-[1.02] hover:glow-primary">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover smooth-transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <Badge className={`absolute top-4 left-4 ${
                  project.type === 'data-science' ? 'bg-primary' : 'bg-secondary'
                }`}>
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary smooth-transition">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex-1 smooth-transition">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="smooth-transition">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;