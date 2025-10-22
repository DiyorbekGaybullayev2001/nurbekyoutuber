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
      <div className="container max-w-7xl mx-auto text-left flex z-10 flex-col md:flex-row items-center gap-8">
        <div className="space-y-6 w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <div>
              <br />
              <ReactTyped className="!text-left" strings={["Nurbek Dusyarov "]} typeSpeed={50} />
              <br />
                <ReactTyped className="text-primary"
                  strings={[
                    "Youtuber",
                    "Content Maker",
                  ]}
                  typeSpeed={50}
                  backSpeed={60}
                  attr="placeholder"
                  loop
                  >
                  <input type="text" />
                </ReactTyped>
              </div>


              
           
            </h1>
        </div>
           <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={imgs}
              alt="Img Logo User"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-6 object-cover shadow-lg rounded-lg"
            />
          </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> O'tkazish </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>

   
  

    </>
  );
};
