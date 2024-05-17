import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Section3 = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <section class="flex flex-col items-center justify-center space-y-10 py- md:py-16 ">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
                Nos Missions Principales
            </h2>
            <div class="flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row">
                <div class="md:w-1/2 overflow-hidden" 
                     data-aos="fade-right"
                     data-aos-duration="1200">
                    <img
                        src="https://www.newsteelconstruction.com/wp/wp-content/uploads/2018/04/nHull1804.jpg"
                        width="800"
                        height="600"
                        alt="Web Development"
                        class="h-full w-full object-cover"
                    />
                </div>
                <div class="md:w-1/2 flex-1 space-y-4 text-center md:text-left pl-4 bg-tertiary py-3 px-5 "
                     data-aos="fade-left"
                     data-aos-duration="1200">
                    <h3 class="text-2xl font-extrabold dark:text-white">
                        TRAVAUX D’AMÉNAGEMENT
                    </h3>
                    <p className="text-gray-300">Nous mettons notre expérience à la disposition de nos clients pour la conception et l’aménagement de leurs espaces (bureaux, magasins, appartements, maisons, locaux industriels …).</p>
                    <h3 class="text-2xl font-extrabold dark:text-white">
                    CONSTRUCTION CLÉ EN MAIN
                    </h3>
                    <p className="text-gray-300">Nous proposons la formule clé en main en tant qu’entreprise générale ou contractant général, permettant ainsi à nos clients de signer un seul contrat sans partager la responsabilité entre différents intervenants.</p>
                    <h3 class="text-2xl font-extrabold dark:text-white">
                        MAÎTRISE D'OUVRAGE DÉLÉGUÉE (MOD)
                    </h3>
                    <p className="text-gray-300">Cette mission consiste à être le représentant unique du Maître de d’Ouvrage vis-à-vis de l’ensemble des intervenants dans le cadre de la réalisation d’un projet de construction</p>
                    <h3 class="text-2xl font-extrabold dark:text-white">
                    ASSISTANCE AU MAÎTRE D'OUVRAGE (AMO)
                    </h3>
                    <p className="text-gray-300">Nous assistons le Maître de d’Ouvrage dans toutes ses tâches, décisions et actions suivant un planning permettant de respecter les objectifs de délai du projet.</p>
                    <h3 class="text-2xl font-extrabold dark:text-white">
                    ORDONNANCEMENT, PILOTAGE ET COORDINATION (OPC)
                    </h3>
                    <p className="text-gray-300">En tant qu’OPC, nous coordonnons, manageons les équipes, et assurons une fonction de planification et d’animation.</p>
                    
                </div>
            </div>
        </section>
    );
};

export default Section3;
