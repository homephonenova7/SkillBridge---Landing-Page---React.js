import { Brain, Heart, Puzzle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/50 to-white">
      <Navbar />

      {/* Mission Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're dedicated to creating an inclusive digital space where every
            neurodivergent child can learn, grow, and celebrate their unique
            abilities through the power of play.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-foreground">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 mb-4 text-secondary" />,
                title: "Understanding",
                description:
                  "We recognize and celebrate neurodiversity in all its forms",
              },
              {
                icon: <Heart className="h-8 w-8 mb-4 text-secondary" />,
                title: "Compassion",
                description: "Every feature is designed with empathy and care",
              },
              {
                icon: <Puzzle className="h-8 w-8 mb-4 text-secondary" />,
                title: "Innovation",
                description:
                  "Continuously improving our approach to learning through play",
              },
              {
                icon: <Star className="h-8 w-8 mb-4 text-secondary" />,
                title: "Excellence",
                description:
                  "Committed to the highest standards in educational gaming",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  {value.icon}
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-primary-foreground">
              Meet Our Team
            </h2>
            <p className="mt-1 text-gray-600">
            Dedicated students transforming tech through SkillBridge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Kamesh Chathuranga",
                image: "team/Kamesh.jpg",
                  
              },
              {
                name: "Kaveesha Dineth",
                image: "team/kaveesha.jpg",
              },
              {
                name: "Mohamed Aathif",
                image: "team/Aathif.jpg",
              },
              {
                
                name: "Yulara Fernando",
                image: "team/Yulara.jpg",
              },
              {
                name: "Dileepa Thushan",
                image: "team/dileepa.png",
              },
              {
                name: "Anika Mohamed",
                image: "team/Anika.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-white p-6 rounded-2xl shadow-lg"
              >
                <img
                  className="rounded-lg w-20 h-20 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div>
                  <h3 className="font-medium text-gray-800">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our approach or want to learn more? We'd love
            to hear from you!
          </p>
          <Button
          onClick={() => {
          window.location.href = "https://www.instagram.com/skillbridge.app?igsh=MTk2eDIzeHFhanVmbg==";
          }}
          className="bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-6 rounded-2xl"
          >
          Contact Us
          </Button>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
