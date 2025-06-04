import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleViewWork = () => {
    const target = document.querySelector("#projects");
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleGetInTouch = () => {
    const target = document.querySelector("#contact");
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center gradient-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Senior Data Engineer &{" "}
              <span className="text-yellow-300">Analytics Expert</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              I design and build scalable data pipelines, advanced analytics
              solutions, and enterprise data platforms using cutting-edge Azure
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleViewWork}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                size="lg"
              >
                View My Work
              </Button>
              <Button
                onClick={handleGetInTouch}
                className="border-2 border-white text-white bg-transparent px-8 py-3 rounded-lg font-semibold hover:bg-white hover:!text-gray-800 transition-all duration-300"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-slide-up">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGAxMNUY3ayLQ/profile-displayphoto-shrink_400_400/B56ZcurE5LG0Ag-/0/1748834734530?e=1754524800&v=beta&t=gLO2fJTujpSNZnQn1W6y2rY_Gs5Uhvh68TvVZHj7c0c"
              alt="Hitesh Kanodia - Professional Photo"
              className="w-80 h-80 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
