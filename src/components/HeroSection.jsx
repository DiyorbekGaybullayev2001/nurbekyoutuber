import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";
import profileImg from "../../public/projects/profile-800.webp";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen sm:h-[90vh] flex flex-col items-center justify-center px-4 mt-5 md:mt-10 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto text-left flex z-10 flex-col md:flex-row items-center gap-8">
        <div className="space-y-6 w-full md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
            <ReactTyped
              className="!text-left"
              strings={["Nurbek Dusyarov"]}
              typeSpeed={50}
            />
            <br />
            <ReactTyped
              className="text-primary"
              strings={["Youtuber", "Content Maker"]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </h1>
        </div>

        {/* ✅ Use imported image so bundler resolves path correctly */}
        <div className="w-full h-auto rounded-full md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="User Portrait"
            width="600"
            height="600"
            loading="eager"
            decoding="async"
            className="w-full max-w-xs border-4 border-primary rounded-full sm:max-w-sm md:max-w-md mx-auto mt-6 object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">O'tkazish</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
