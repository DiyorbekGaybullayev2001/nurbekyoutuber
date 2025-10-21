import { ArrowDown } from "lucide-react";
import { ReactTyped } from "react-typed";
import imgs from "../../public/projects/project1.png";

export const HeroSection = () => {
  return (
    <>
    
    
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-7xl mx-auto text-left flex z-10">
        <div className="space-y-6 w-[40%]">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <div>
              <br />
              <ReactTyped className="!text-left" strings={["Nurbek Dusyarov "]} typeSpeed={50} />
              <br />
                <ReactTyped className="text-primary"
                  strings={[
                    "Youtuber",
                    "Content Maker",
                    "Developer",
                  ]}
                  typeSpeed={50}
                  backSpeed={60}
                  attr="placeholder"
                  loop
                  >
                  <input type="text" />
                </ReactTyped>
              </div>


              
            {/* <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Nurbek
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Dusyarov
            </span> */}
          </h1>

          {/* <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p> */}

          {/* <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#about" className="cosmic-button">
              More
            </a>
          </div> */}
        </div>
        <div className="">
          <img src={imgs} alt="Img Logo User"  className="mx-auto  mt-10 object-cover shadow-lg animate-fade-in-delay-5"/>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>

   
  

    </>
  );
};
