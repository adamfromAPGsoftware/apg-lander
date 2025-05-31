import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Adam is very knowledgeable, he gets what you are trying to do and is very efficient! One of the best freelancers I've worked with",
    name: "Client Review",
    role: "Bug Fix Project",
    rating: 5.0,
  },
  {
    text: "The team at APG delivered outstanding work on our project. Their communication was clear and timely, making collaboration seamless. They adhered to all specifications meticulously, ensuring that the project met our exact requirements.",
    name: "Client Review",
    role: "CampaignCompass AI Development",
    rating: 5.0,
  },
  {
    text: "APG built a prototype of a CRM style app for us (very quickly) and it turned out really well. They were extremely knowledgeable and easy to work with.",
    name: "Client Review",
    role: "App Design and Development",
    rating: 5.0,
  },
  {
    text: "The guys were incredibly helpful and generous in helping find solutions for my website. Thanks so much!",
    name: "Client Review",
    role: "Platform Development",
    rating: 5.0,
  },
  {
    text: "I had a great video chat with Adam. He answered my questions and provided good ideas to help in planning and moving my project forward. I intend to keep working with the team.",
    name: "Client Review",
    role: "60 Minute Consultation",
    rating: 5.0,
  },
  {
    text: "I couldn't be happier with their work. True professionals across the board.",
    name: "Client Review",
    role: "App Consulting",
    rating: 5.0,
  },
  {
    text: "the team was highly responsive and proactive during this project. It was easy to communicate with them and they were flexible to our needs and changes.",
    name: "Client Review",
    role: "MVP Development",
    rating: 5.0,
  },
  {
    text: "Adam completed the project in record time, was communicating very well and did a great job on the plugin I requested.",
    name: "Client Review",
    role: "Plugin Development",
    rating: 5.0,
  },
  {
    text: "Can't thank the guys enough for the efforts to bring our MVP to life. Fantastic communication, support, and advanced technical expertise is very apparent! Wonderful job across the board.",
    name: "Client Review",
    role: "App Development",
    rating: 5.0,
  },
  {
    text: "Easy to work with and completed everything as requested.",
    name: "Client Review",
    role: "Invoice Generation App",
    rating: 5.0,
  },
  {
    text: "Adam is an expert in his field, and was friendly and helpful, answering everything I needed to know. I would highly recommend him to anyone needing development assistance.",
    name: "Client Review",
    role: "Developer Mentoring",
    rating: 5.0,
  },
  {
    text: "Project ran very well with good communications and very satisfied with the deliverables",
    name: "Client Review",
    role: "B2B Marketing Tool",
    rating: 5.0,
  },
  {
    text: "Great communicator and skilled developer. They were able to guide me through the data structure requirements and help design a great prototype.",
    name: "Client Review",
    role: "Development Project",
    rating: 4.8,
  },
  {
    text: "APG is fantastic to work with, clear communicators and they do work to a high standard.",
    name: "Client Review",
    role: "AI MVP Development",
    rating: 5.0,
  },
  {
    text: "Great Experience and will continue to work with the team",
    name: "Client Review",
    role: "Website Development",
    rating: 5.0,
  },
];

const firstColumn = testimonials.slice(0, 5);
const secondColumn = testimonials.slice(5, 10);
const thirdColumn = testimonials.slice(10, 15);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our Clients say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
          
          {/* View on Upwork Link */}
          <div className="mt-6">
            <a 
              href="https://www.upwork.com/freelancers/adamfromapg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-brand-green transition-colors font-medium"
            >
              <img src="/2021-upwork-new-logo-design.png" alt="Upwork" className="w-16 h-8" />
              <span className="border-b border-brand-green">View all reviews on Upwork</span>
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 