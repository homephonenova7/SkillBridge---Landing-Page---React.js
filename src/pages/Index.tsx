import { Brain, Star, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { features } from "process";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between ">
          {/* Left side: Device mockup */}
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] mb-8 md:mb-0">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              <img
                src="/mockup.png"
                className="dark:hidden w-[272px] h-[572px]"
                alt="Device mockup"
              />
            
            </div>
          </div>

          {/* Right side: Content (Heading, Description, Button) */}
          <div className="text-center md:text-left md:max-w-lg ">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Empowering Neurodivergent Learning Through Interactive Play
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
            An innovative app bringing interactive, gamified learning to children with neurodevelopmental disorders, celebrating their unique abilities.
            </p>
            <Button
                onClick={() => {
                // Smooth scroll to the features section
                const featureSection = document.querySelector(".feature");
                if (featureSection) {
                featureSection.scrollIntoView({ behavior: "smooth" });
              }
              }}
              className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-6 rounded-2xl"
                >
               Learn More
                </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
      <div className="feature">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-foreground">
            Why Choose Skill Bridge?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ icon: <Brain className="h-8 w-8 mb-4 text-secondary" />, title: "Adaptive Learning", description: "Personalized learning paths that adapt to each child's unique needs" },
              { icon: <Star className="h-8 w-8 mb-4 text-secondary" />, title: "Engaging Games", description: "Fun and interactive games that make learning enjoyable" },
              { icon: <Heart className="h-8 w-8 mb-4 text-secondary" />, title: "Inclusive Design", description: "Created with sensitivity to diverse learning styles" },
              { icon: <Award className="h-8 w-8 mb-4 text-secondary" />, title: "Expert Support", description: "Backed by child development specialists" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
