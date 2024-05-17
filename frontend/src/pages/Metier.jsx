import { useTypewriter, Cursor } from "react-simple-typewriter";

const NosMetier = () => {
    const [text] = useTypewriter({
        words: ["NOS MISSIONS PRINCIPALES"],
        loop: {},
    });
    const [text1] = useTypewriter({
        words: [" NOS MÉTIERS"],
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
                            <h2 class="my-8 text-2xl font-bold">
                                Travaux d'aménagement d'espaces intérieurs et
                                extérieurs
                            </h2>
                            <p class="text-gray-500 dark:text-gray-500 mb-">
                                Nous mettons notre expérience à la disposition
                                de nos clients pour la conception et
                                l’aménagement de leurs espaces (bureaux,
                                magasins, appartements, maisons, locaux
                                industriels …).
                            </p>
                            <h2 class="my-8 text-2xl font-bold">
                                Construction clé en main
                            </h2>
                            <p class="text-gray-500 dark:text-gray-500">
                                Nous proposons la formule clé en main en tant
                                qu’entreprise générale ou contractant général,
                                permettant ainsi à nos clients de signer un seul
                                contrat sans partager la responsabilité entre
                                différents intervenants.
                            </p>
                            <h2 class="my-8 text-2xl font-bold">
                                Maîtrise d'ouvrage déléguée (MOD)
                            </h2>
                            <p class="text-gray-500 dark:text-gray-500">
                                Cette mission consiste à être le représentant
                                unique du Maître de d’Ouvrage vis-à-vis de
                                l’ensemble des intervenants dans le cadre de la
                                réalisation d’un projet de construction.
                            </p>
                            <h2 class="my-8 text-2xl font-bold">
                                Assistance au Maître d'ouvrage (AMO)
                            </h2>
                            <p class="text-gray-500 dark:text-gray-500">
                                Nous assistons le Maître de d’Ouvrage dans
                                toutes ses tâches, décisions et actions suivant
                                un planning permettant de respecter les
                                objectifs de délai du projet.
                            </p>
                        </section>
                        <section>
                            <div
                                class=" text-primary border bg-card text-card-foreground shadow-sm mb-12 bg-quaternary"
                                data-v0-t="card"
                            >
                                <div class="py-10 text-center">
                                    <h1
                                        class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl "
                                        id="slimar"
                                    >
                                        <span className="text-quaternary">\</span> {text1}
                                        <Cursor
                                            class="text-primary"
                                            data-v0-t="cursor"
                                        ></Cursor>
                                    </h1>
                                </div>
                            </div>

                            <div className="ml-5 space-x-2">
                                <h2 class="mb-4 text-xl font-semibold text-gray-500">
                                    Etablissement du cahier des charges
                                    définissant les besoins du Maître d'Ouvrage
                                    :
                                </h2>
                                <ul className="mb-5">
                                    <li>
                                        - Nous recensons les contraintes
                                        majeures (organisationnelles,
                                        fonctionnelles et de sécurité) du Maître
                                        d’Ouvrage pour définir et quantifier ses
                                        besoins.
                                    </li>
                                    <li>
                                        - Nous établissons l’estimation en
                                        mètres carrés les exigences en espaces
                                        du Maître d’Ouvrage.
                                    </li>
                                    <li>
                                        - Nous définissons, en conformité avec
                                        les normes techniques reconnues, les
                                        exigences particulières du Maître
                                        d’Ouvrage.
                                    </li>
                                </ul>
                                <h2 class="mb-4 text-xl font-semibold text-gray-500">
                                    Assistance à la recherche de terrain - Etude
                                    de faisabilité :
                                </h2>
                                <ul className="mb-5">
                                    <li>
                                        Nous accompagnons le Maître d’Ouvrage
                                        dès l’étape de recherche terrain. Ce
                                        dernier bénéficie de nos connaissances
                                        sur le marché actuel. Pour chaque cas,
                                        nous nous chargeons d’une étude de
                                        faisabilité pour permettre au promoteur
                                        de se prononcer au sujet de
                                        l’acquisition.
                                    </li>
                                </ul>
                                <h2 class="mb-4 text-xl font-semibold text-gray-500">
                                    Assistance à la gestion financière du projet
                                </h2>
                                <ul className="mb-5">
                                    <li>
                                        - Nous assistons le Maître d’Ouvrage à
                                        la gestion financière lui garantissant
                                        la maîtrise prévisionnelle du coût du
                                        projet :
                                    </li>
                                    <li>- Nous gérons les commandes</li>
                                    <li>
                                        - Nous vérifions les factures et
                                        établissons des bons pour paiement.
                                    </li>
                                    <li>
                                        - Nous réalisons la synthèse du budget
                                        du projet.
                                    </li>
                                    <li>
                                        - Nous gérons les risques de dépassement
                                        de budget, de quantités et de délai …
                                    </li>
                                    <li>
                                        - Nous réalisons les décomptes mensuels
                                        des intervenants suivant les
                                        dispositions prévues dans les contrats
                                        des travaux et nous gérons les
                                        règlements des fournisseurs.
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
                                                Ancienne Directrice Pôle
                                                Finances / Zurich Assurances
                                                Maroc
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                                <hr className="my-4" />
                                <blockquote class="space-y-4">
                                    <p
                                        class="text-2xl font-medium leading-relaxed"
                                        id="font"
                                    >
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
export default NosMetier;
