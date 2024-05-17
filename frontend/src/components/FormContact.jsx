import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 


const FormContact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section class="bg-bg1 pt-16 lg:pt-32">
      <div class="mx-auto max-w-screen-xl px-4 py-16 max-sm:pt-0 max-sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12"
               data-aos="fade-right"
               data-aos-duration="1200" >
            <p class="max-w-xl lg:text-6xl max-sm:text-2xl font-bold text-primary" id="font-family">
              Contactez-Nous
            </p>

            <div class="mt-8 text-gray-400">
              <p>
                Envoyer Nous Votre Messages.
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12"
               data-aos="fade-left"
               data-aos-duration="1200" >
            <form action="#" class="space-y-4">
              <div>
                <label class="sr-only" for="name">
                  Name
                </label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">
                    Email
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">
                    Phone
                  </label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">
                  Message
                </label>

                <textarea
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                 class="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-secondary">
                 <span class="font-bold text-white text-xl relative z-10 group-hover:text-secondary duration-500">Envoyer</span>
                 <span class="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:-translate-x-full h-full"></span>
                 <span class="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-x-full h-full"></span>
                 
                   <span class="absolute top-0 left-0 w-full bg-secondary duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                 <span class="absolute delay-300 top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-y-full h-full"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormContact;
