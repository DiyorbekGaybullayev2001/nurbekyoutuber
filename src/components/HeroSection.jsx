import { useState, useEffect } from "react";
import { ArrowDown, X } from "lucide-react";
import { ReactTyped } from "react-typed";

// Rasmlar: public/projects papkasiga qo'ying: nurbek.webp, nurbek2.webp, shot3.webp
import imgMain from "../../public/projects/nurbek.webp";
import imgA from "../../public/projects/nurbek2.webp";
import imgB from "../../public/projects/nurbek2.webp";

export const HeroSection = () => {
  const [lightbox, setLightbox] = useState({ open: false, src: null, alt: "" });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox({ open: false, src: null, alt: "" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: null, alt: "" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-10 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: heading + CTA */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="block">
              <ReactTyped strings={["Nurbek Dusyarov"]} typeSpeed={50} />
            </span>
            <span className="block text-primary mt-2 text-2xl sm:text-3xl">
              <ReactTyped
                strings={["Youtuber", "Content Maker",]}
                typeSpeed={45}
                backSpeed={60}
                loop
              />
            </span>
          </h1>

          <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground">
            Kontent yaratish va YouTube sohasida yillar davomida to‘plangan amaliy tajriba va real natijalar — kanal o‘sishi, monetizatsiya va tomoshabin bilan samarali aloqalar. 
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {/* <a href="#courses" className="cosmic-button px-5 py-2 rounded-md font-medium">
              Kurslar
            </a> */}
            <a href="#contact" className="px-5 py-2 rounded-md border border-input">
              Bog'lanish
            </a>
          </div>
        </div>

        {/* Right: creative mosaic gallery */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            {/* Large circular photo */}
            <button
              onClick={() => openLightbox(imgMain, "Nurbek - Dusyarov")}
              className="relative block rounded-full overflow-hidden cursor-pointer shadow-2xl ring-4 ring-primary/20 transition-transform transform hover:scale-105"
              aria-label="Open main photo"
            >
              <img
                src={imgMain}
                alt="Nurbek"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full"
                loading="eager"
                decoding="async"
              />
            </button>

            {/* Top-left small tile */}
            <button
              onClick={() => openLightbox(imgA, "Nurbek - Dusyarov ")}
              className="absolute -left-6 -top-6 w-28 h-28 cursor-pointer rounded-lg overflow-hidden shadow-lg group transition-transform transform hover:scale-105"
              aria-label="Open shot A"
            >
              <img src={imgA} alt="Shot A" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Bottom-right small tile */}
            <button
              onClick={() => openLightbox(imgB, "Nurbek - Dusyarov")}
              className="absolute -right-6 -bottom-6 w-32 h-32 cursor-pointer rounded-lg overflow-hidden shadow-lg group transition-transform transform hover:scale-105"
              aria-label="Open shot B"
            >
              <img src={imgB} alt="Shot B" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* subtle decorative ring */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <svg
                className="w-[420px] h-[420px] opacity-10"
                viewBox="0 0 420 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="210" cy="210" r="200" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Pastga o'tish</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={closeLightbox} />
          <div className="relative z-10 max-w-4xl w-full rounded-lg overflow-hidden">
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-20 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-contain bg-black"
            />
            <div className="bg-background/80 text-center py-3">
              <p className="text-sm text-muted-foreground">{lightbox.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
