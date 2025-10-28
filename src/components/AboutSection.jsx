import { Briefcase, Code, User, Youtube, VideoIcon } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           <span className="text-primary"> Men </span>
          Haqimda
        </h2>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              <span className="text-primary text-3xl text-semibold ">Nurbek Dusyarov</span> - Youtuber & Content Maker
            </h3>

            <p className="text-muted-foreground">
              Men — <span className="text-primary text-xl text-semibold">Nurbek Dusyarov Mansur o‘g‘li</span> 1996-yil 2-dekabrda Samarqand viloyati, Narpay tumanida tug‘ilganman. Yoshligimdan ijodkorlikka qiziqishim meni kontent yaratish sohasida professional faoliyatga olib kirdi.

Content Maker sifatida 11+ yil, YouTube platformasida esa 9+ yil tajribaga egaman. Bu davr davomida videokontent ishlab chiqish, kreativ ssenariy yaratish va keng auditoriya bilan ishlash bo‘yicha katta amaliy bilimga ega bo‘ldim.
            </p>

            <p className="text-muted-foreground">
             Toshkent davlat axborot texnologiyalari universiteti bitiruvchisiman (2018–2022). 
11 yil davomida Toshkentda ijod qildim, hozirda esa Navoiy IT Parkda faoliyat yuritmoqdaman.

Men uchun kontent — bu nafaqat tasvir, balki tomoshabinning qalbiga va ongiga ta’sir qiladigan kuchli hikoya. Har bir loyihaga mas’uliyat bilan yondashaman va doimo yangilikka intilaman.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Men Bilan Bog'lanish
              </a>

              {/* <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-3xl font-semibold"> Nega aynan 
              <span className="text-primary text-3xl text-semibold "> men ?</span>
            </h3>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Youtube className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Katta va real tajriba</h4>
                  <p className="text-muted-foreground">
                    11+ yillik Content Maker, 9+ yillik YouTube tajribasi — bu men faqat o‘rganmaganman, balki natija berganman degani.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">O‘z vaqtida va sifat kafolatli natija</h4>
                  <p className="text-muted-foreground">
                    Ish jarayonida tartib, muddatga hurmat va mukammal detal — mening asosiy prinsiplarimdan.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <VideoIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Har doim rivojlanishga intilaman</h4>
                  <p className="text-muted-foreground">
                    Media bozori o‘zgaradi — men esa trendlarning markazida bo‘laman. Yangi bilim, yangi uslub, yangi yondashuv — mening kundalik odatim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
