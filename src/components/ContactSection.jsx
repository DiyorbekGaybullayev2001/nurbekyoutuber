import {
  Instagram,
  // Telegram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
 import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import axios from "axios";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = "8380252689:AAHmZvPdI7Ky317LsR8r2srWT-LaEyzI0ck";
    const chatId = 761599828;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const nameInput = document.getElementById("name");
    const telInput = document.getElementById("nomer");
    const textsInput = document.getElementById("message");

    const name = nameInput?.value;
    const tel = telInput?.value;
    const texts = textsInput?.value;

    const message = `📩 *Yangi xabar!* \n 👤 Ism: ${name} \n 📞 Telefon: ${tel} \n 💬 Xabar: ${texts}`;

    axios.post(url, {
      chat_id: chatId,
      text: message,
    })
    .then(() => {
      const form = document.getElementById("formID");
      form?.reset();
      toast.success("Muvoffaqiyatli yuborildi !");
    })
    .catch(() => {
      toast.error("Xabar yuborishda xato !");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <ToastContainer />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Men <span className="text-primary"> Bog'lanish</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Biror loyihangiz bormi yoki hamkorlik qilmoqchimisiz? Bemalol murojaat qilishingiz mumkin. Men doimo yangi imkoniyatlarni muhokama qilishga tayyorman.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold mb-6">
              {" "}
              Aloqa
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Telefon</h4>
                  <a
                    href="tel:+991234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +99 123 456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Manzil</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Uzbekiston
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-2xl">Ijtimoiy sahifalarim</h4>
              <div className=" space-x-4 ">
                {/* <a href="#" target="_blank">
                  <Telegram />
                </a> */}
                <a href="https://t.me" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors mb-2  text-semibold">
                  <Send className="text-primary" /> Telegram
                </a>
                <a href="https://www.instagram.com" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors mb-2 text-semibold">
                  <Instagram className="text-primary" /> Instagram
                </a>
                {/* <a href="#" target="_blank">
                  <Twitch />
                </a> */}
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Xabar yuborish</h3>

            <form className="space-y-6" id="formID" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Ism Familiya
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Ism Familiya...."
                />
              </div>

               <div>
                <label
                  htmlFor="nomer"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Telefon
                </label>
                <input
                  type="number"
                  id="nomer"
                  name="nomer"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Telefon raqamingiz...."
                />
              </div>

              {/* <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div> */}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Xabar
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Xabaringizni yozing..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
