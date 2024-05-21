import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
    const [text] = useTypewriter({
        words: [
            " Qui Sommes-Nous ? ",
            " BATIHOUSSE ",
            " Plus de 18 ans d'éxperience ",
        ],
        loop: {},
    });

    
    return (
        <section class="w-full py-12 mb-4 md:py-24 lg:py-0" id="font-family">
            <div
                class=" text-primary border bg-card text-card-foreground shadow-sm mb-12 bg-quaternary"
                data-v0-t="card"
            >
                <div class="py-10 text-center">
                    <h1
                        class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        id="slimar"
                    >
                        <span className="text-quaternary">\</span>{text}
                        <Cursor
                            class="text-primary"
                            data-v0-t="cursor"
                        ></Cursor>
                    </h1>
                </div>
            </div>
            <div class="container px-4 md:px-12">
                <div class="grid gap-14 lg:grid-cols-[1fr_300px]">
                    <div class="grid gap-12">
                        <section>
                            <h2 class="mb-4 text-2xl font-bold">
                                Qui sommes-nous
                            </h2>
                            <p class="text-gray-500 dark:text-gray-500">
                                Une équipe de professionnels de la construction
                                du bâtiment au Maroc. Dirigée par Mohamed
                                BENCHEKROUN, ingénieur, diplômé de l’Ecole
                                Spéciale des Travaux Publics, du Bâtiment et de
                                l’Industrie à Paris. Depuis 1997, notre rôle est
                                de maîtriser la conception et la réalisation des
                                projets, dans le cadre des contraintes de
                                performances techniques, de coûts, délais,
                                qualité et environnement. Nous intervenons en
                                tant que contractant général, assistant du
                                maître d’ouvrage, maître d’ouvrage délégué,
                                maître d’oeuvre coordinateur ou expert, nous
                                savons adapter nos interventions aux besoins des
                                clients. PROBUILDING travaille en toute
                                indépendance pour tout client public ou privé.
                            </p>
                        </section>
                        <section>
                            <h2 class="mb-4 text-2xl font-bold mb-2">
                                Quels Projets
                            </h2>

                            <div className="ml-5 space-x-2">
                                <h2 class="mb-4 text-xl font-semibold text-gray-500">
                                    Projets immobiliers :
                                </h2>
                                <ul className="mb-5">
                                    <li>
                                        - Bureaux, immeubles de grande hauteur
                                    </li>
                                    <li>
                                        - Equipements privés : hôtels, centres
                                        commerciaux, cliniques, écoles,
                                        logements …
                                    </li>
                                    <li>- Equipements publics</li>
                                </ul>
                                <h2 class="mb-4 text-xl font-semibold text-gray-500">
                                    Projets industriels :
                                </h2>
                                <ul className="mb-5">
                                    <li>
                                        - Usines, sites de production, stations
                                        de traitement
                                    </li>
                                    <li>
                                        - Bâtiments d’activité et de logistique
                                    </li>
                                </ul>
                                <h2 class="mb-4 text-xl font-semibold text-gray-500">
                                    Projets de déploiement de réseaux d’agences
                                    et points de vente :
                                </h2>
                                <ul className="mb-5">
                                    <li>- Stations-service</li>
                                    <li>- Agences bancaires</li>
                                    <li>
                                        - Gares, agences Télécom, concessions
                                        automobiles …
                                    </li>
                                </ul>

                                <h2 class="mb-4 text-xl font-semibold text-gray-500">
                                    Projets d’aménagement :
                                </h2>
                                <ul className="mb-5">
                                    <li>
                                        - Parcs et espaces de loisirs et culture
                                    </li>
                                    <li>- Projets urbains</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div class="space-y-8">
                        <div
                            class="rounded-lg border bg-card text-card-foreground shadow-sm"
                            data-v0-t="card"
                        >
                            <div class="flex flex-col space-y-1.5 text-center">
                                <h3 class="whitespace-nowrap bg-quaternary py-4 px-4 text-2xl font-semibold leading-none tracking-tight">
                                    AVIS DE NOS CLIENTS
                                </h3>
                            </div>
                            <div class="p-6">
                                <blockquote class="space-y-4">
                                    <p
                                        class="text-2xl font-medium leading-relaxed"
                                        id="font"
                                    >
                                        "Nous avons été satisfaits de la qualité
                                        des prestations fournies par la société
                                        BATIHOUSSE représentée par Monsieur
                                        Mohamed Benchekroun et nous avons
                                        apprécié ses qualités professionnelles
                                        et compétences dont ce dernier a fait
                                        preuves. Le 31 juin 2011"
                                    </p>
                                    <div class="flex items-center space-x-4">
                                        <img
                                            src="https://www.probuilding-maroc.com/wp-content/uploads/2016/08/Zurich_Logo_new.svg_-1-150x150.jpg"
                                            alt="Avatar"
                                            width="48"
                                            height="48"
                                            class="h-12 w-12 rounded-full mb-8"
                                        />
                                        <div>
                                            <div class="font-medium">
                                                Naima Nasser
                                            </div>
                                            <div class="text-sm text-gray-500 dark:text-gray-400">
                                                Ancienne Directrice Pôle Finances / Zurich Assurances Maroc
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                                <hr className="my-4"/>
                                <blockquote class="space-y-4">
                                    <p class="text-2xl font-medium leading-relaxed" id="font">
                                        "Durant notre collaboration avec la
                                        société BATIHOUSSE représentée par
                                        Monsieur Mohamed Benchekroun, nous avons
                                        apprécié ses qualités professionnelles
                                        et compétences intrinsèques dont il a
                                        fait preuve. Le 31 mai 2011"
                                    </p>
                                    <div class="flex items-center space-x-4">
                                        <img
                                            src="https://www.probuilding-maroc.com/wp-content/uploads/2016/08/MG_9289-2-1-150x150.jpg"
                                            alt="Avatar"
                                            width="48"
                                            height="48"
                                            class="h-12 w-12 rounded-full"
                                        />
                                        <div>
                                            <div class="font-medium">
                                                RACHID ANDALOUSSI BENBRAHIM
                                            </div>
                                            <div class="text-sm text-gray-500 dark:text-gray-400">
                                                Architecte
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
