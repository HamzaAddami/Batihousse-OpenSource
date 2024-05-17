
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Section1 = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (

<section class="flex flex-col items-center justify-center gap-8 py-12 md:py-24 lg:py-32" id="font-family">
  <div class="space-y-3 text-center">
    <h2 class="text-3xl font-bold tracking-tighter sm:text-3xl md:text-5xl text-primary" id="font-family" 
        data-aos="fade-up"
        data-aos-duration="1200">
          Pour la réalisation de votre projet de construction
    </h2>
    <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
       id="font-family"
       data-aos="fade-up"
       data-aos-duration="1400">
      Nous vous assistons depuis la recherche de terrain jusqu’à la fin des travaux clé en main.
    </p>
  </div>
  <div class="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
       data-aos="zoom-in-up">
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div class="flex flex-col items-start gap-4 p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-10 w-10 text-gray-900 dark:text-gray-50"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
        <h3 class="text-xl font-semibold">Construction clé en main</h3>
        <p class="text-gray-500 dark:text-gray-400">
        Nous proposons la formule clé en main en tant qu’entreprise générale ou contractant général, permettant ainsi à nos clients de signer un seul contrat sans partager la responsabilité entre différents intervenants.
        </p>
        <Link to='/metiers' class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-tertiary underline-offset-4 hover:underline h-10 px-4 py-2">
          Learn More
        </Link>
      </div>
    </div>
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"
         data-aos="zoom-in-up">
      <div class="flex flex-col items-start gap-4 p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-10 w-10 text-gray-900 dark:text-gray-50"
        >
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          <rect width="20" height="14" x="2" y="6" rx="2"></rect>
        </svg>
        <h3 class="text-xl font-semibold">Assistance au Maître d'ouvrage (AMO)</h3>
        <p class="text-gray-500 dark:text-gray-400">
        Nous assistons le Maître de d’Ouvrage dans toutes ses tâches, décisions et actions suivant un planning permettant de respecter les objectifs de délai du projet.
        </p>
        <Link to='/metiers' class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-tertiary underline-offset-4 hover:underline h-10 px-4 py-2">
          Learn More
        </Link>
      </div>
    </div>
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card"
         data-aos="zoom-in-up">
      <div class="flex flex-col items-start gap-4 p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-10 w-10 text-gray-900 dark:text-gray-50"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
        <h3 class="text-xl font-semibold">Ordonnancement, pilotage et coordination (OPC)</h3>
        <p class="text-gray-500 dark:text-gray-400">
          En tant qu’OPC, nous coordonnons, manageons les équipes, et assurons une fonction de planification et d’animation.
        </p>
        <Link to='/metiers' class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-tertiary underline-offset-4 hover:underline h-10 px-4 py-2">
          Learn More
        </Link>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    
  <Link
  to='/metiers' 
  class="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-secondary"
  data-aos="fade-up"
  data-aos-duration="600">
  <span class="font-bold text-white text-xl relative z-10 group-hover:text-secondary duration-500">EN SAVOIRS PLUS</span>
  <span class="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:-translate-x-full h-full"></span>
  <span class="absolute top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-x-full h-full"></span>
  
    <span class="absolute top-0 left-0 w-full bg-secondary duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
  <span class="absolute delay-300 top-0 left-0 w-full bg-secondary duration-500 group-hover:translate-y-full h-full"></span>
</Link>
  </div>
</section>
    )
}

export default Section1;