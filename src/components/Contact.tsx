import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next data science project or 3D visualization? 
            Let's create something extraordinary together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="smooth-transition focus:glow-primary" />
                <Input placeholder="Your Email" type="email" className="smooth-transition focus:glow-primary" />
              </div>
              <Input placeholder="Subject" className="smooth-transition focus:glow-primary" />
              <Textarea 
                placeholder="Your message..." 
                rows={6} 
                className="smooth-transition focus:glow-primary resize-none" 
              />
              <Button className="w-full glow-primary smooth-transition hover:scale-[1.02]">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">hello@yourname.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Links */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="#" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 smooth-transition group">
                  <Github className="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
                  <div>
                    <div className="font-medium group-hover:text-primary smooth-transition">GitHub</div>
                    <div className="text-sm text-muted-foreground">View my repositories</div>
                  </div>
                </a>
                
                <a href="#" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 smooth-transition group">
                  <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
                  <div>
                    <div className="font-medium group-hover:text-primary smooth-transition">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Professional network</div>
                  </div>
                </a>
                
                <a href="#" className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 smooth-transition group">
                  <Twitter className="w-6 h-6 text-muted-foreground group-hover:text-foreground" />
                  <div>
                    <div className="font-medium group-hover:text-primary smooth-transition">Twitter</div>
                    <div className="text-sm text-muted-foreground">Follow my updates</div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;