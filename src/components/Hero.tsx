import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-primary/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/20 animate-float" style={{animationDelay: "2s"}} />
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-accent/20 animate-float" style={{animationDelay: "4s"}} />
      
      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
        <div className="animate-slide-in-up">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="gradient-text">Data Scientist</span>
            <br />
            <span className="text-foreground">& 3D Artist</span>
          </h1>
        </div>
        
        <div className="animate-slide-in-up" style={{animationDelay: "0.2s"}}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming complex data into visual stories and crafting immersive 3D experiences 
            that bridge analytics and artistry.
          </p>
        </div>
        
        <div className="animate-slide-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{animationDelay: "0.4s"}}>
          <Button size="lg" className="glow-primary smooth-transition hover:scale-105 font-medium">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="smooth-transition hover:scale-105 font-medium">
            Download CV
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="animate-slide-in-up flex justify-center space-x-6" style={{animationDelay: "0.6s"}}>
          <a href="#" className="p-3 rounded-full bg-card/50 hover:bg-card smooth-transition hover:scale-110 glow-primary">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 rounded-full bg-card/50 hover:bg-card smooth-transition hover:scale-110 glow-primary">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 rounded-full bg-card/50 hover:bg-card smooth-transition hover:scale-110 glow-primary">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;