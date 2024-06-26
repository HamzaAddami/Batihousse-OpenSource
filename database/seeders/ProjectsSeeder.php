<?php

namespace Database\Seeders;

use App\Models\Projects;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'name' => 'RÉHABILITATION D’UN IMMEUBLE DE BUREAUX À CASABLANCA',
                'client' => 'Sociéte A',
                'description' => 'Projet de réhabilitation et de mise à niveau d’un immeuble de bureaux IGH classé patrimoine national à Casablanca.',
                'price' => 15000.00,
                'mission' => 'Etudes clés en main',
                'avancement' => 10,
                'state' => 'En cours',
                'image_path' => 'Pictures/pict1.webp',
                'category_id' => 2,  
            ],
            [
                'name' => 'HÔTEL 4 ETOILES À CASABLANCA',
                'client' => 'SOTRAVO',
                'description' => 'Projet de construction d’un hôtel quatre étoiles à Casablanca – Californie.',
                'price' =>  275,
                'mission' => 'Assistance au Maître d’Ouvrage.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict2.webp',
                'category_id' => 3,  
            ],
            [
                'name' => 'SIÈGE D’UN FONDS D’INVESTISSEMENT À CASABLANCA',
                'client' => 'SOTRAVO',
                'description' => 'Construction d’un siège pour une fondation d’un Fonds d’investissement à Casablanca.',
                'price' =>  200,
                'mission' => 'Assistance du Maître d’Ouvrage.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict3.webp',
                'category_id' => 1,  
            ],
            [
                'name' => 'VERT MARINE DAR BOUAZZA',
                'client' => 'SOTRAVO',
                'description' => 'Construction d’un projet immobilier composé de 160 appartements, Duplex et Triplex de luxe à Dar Bouazza.',
                'price' =>  220,
                'mission' => 'Assistance au Maître d’ouvrage',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict4.webp',
                'category_id' => 2,  
            ],
            [
                'name' => 'CABINET MÉDICAL CASABLANCA',
                'client' => 'Dr Nawal KHAMLICHI & Dr Bahia OUAZZANI',
                'description' => 'Aménagement d’un cabinet médical de Pédopsychiatrie à Casablanca.',
                'price' =>  275,
                'mission' => 'Réalisation des travaux Tous Corps d’Etat',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict5.webp',
                'category_id' => 1,  
            ],
            [
                'name' => 'DIRECT PRINT CASABLANCA',
                'client' => 'DIRECT PRINT',
                'description' => 'Construction d’une imprimerie à Ain Sebaa.',
                'price' =>  275,
                'mission' => 'OPC – Ordonnancement, Pilotage et Coordination',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict6.webp',
                'category_id' => 4,  
            ],
            [
                'name' => 'VILLAS AL MAADEN MARRAKECH',
                'client' => 'ALLIANCES DEVELOPPEMENT',
                'description' => 'Projet de construction d’un ensemble de villas golfiques à Marrakech.',
                'price' =>  275,
                'mission' => 'Etablissement des dossiers de consultation des entreprises et assistance à la mise au point des marchés des travaux.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict7.webp',
                'category_id' => 7,  
            ],
            [
                'name' => 'RÉSIDENCE DE L’OCÉAN BOUZNIKA',
                'client' => ' PROMOTION HAS (HOLCIM ACM2I SOTRAVO)',
                'description' => 'Projet de construction de 36 immeubles de moyen standing à Bouznika.',
                'price' =>  300,
                'mission' => 'OPC comprenant',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict8.webp',
                'category_id' => 2,  
            ],
            [
                'name' => 'RÉSIDENCE DAR HASNAA MARRAKECH',
                'client' => 'S2PI',
                'description' => 'Construction d’une Résidence touristique luxueuse 800 m² sur 1,2 Ha sur la route de l’Ourika à 10 Km de Marrakech',
                'price' =>  105,
                'mission' => 'Maîtrise d’Ouvrage Déléguée comprenant.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict9.webp',
                'category_id' => 5,  
            ],
            [
                'name' => 'VILLA CHRAIBI CASABLANCA',
                'client' => 'CHRAIBI',
                'description' => 'Construction d’une villa de haut standing à Casablanca.',
                'price' =>  275,
                'mission' => 'Réalisation des marchés des différents lots, la consultation, le choix des entreprises et la coordination des études et des travaux.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict10.webp',
                'category_id' => 7,  
            ],
            [
                'name' => 'PHONE GROUP CASABLANCA',
                'client' => 'CNIA-SAADA',
                'description' => 'Projet d’aménagement de 4 plateaux de bureaux destinés à recevoir le siège de Phone Holding Group à Casablanca.',
                'price' =>  275,
                'mission' => 'Assistance à Maîtrise d’Ouvrage Déléguée.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict11.webp',
                'category_id' => 1,  
            ],
            [
                'name' => 'SIÈGE ALLIANCES DÉVELOPPEMENT',
                'client' => 'ALLIANCES DEVELOPPEMENT IMMOBILIER',
                'description' => 'Projet d’aménagement d’un showroom de vente et réaménagement d’espaces de bureaux de deux immeubles Mirabeau 1 et 2 à Casablanca.',
                'price' =>  275,
                'mission' => 'Assistance au Maître d’Ouvrage',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict12.webp',
                'category_id' => 6,  
            ],
            [
                'name' => 'LES PARCS DE L’AGDAL MARRAKECH',
                'client' => 'EDEN DE MARRAKECH',
                'description' => 'Construction d’un ensemble de 11 villas luxueuses, 14 appartements et duplex.',
                'price' =>  100,
                'mission' => 'Assistance au Maître d’Ouvrage.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict13.webp',
                'category_id' => 3,  
            ],
            [
                'name' => 'MAISON D’HÔTES MARRAKECH',
                'client' => 'ROUDOUDOU',
                'description' => 'Construction d’une Maison d’hôtes à Marrakech, route de l’Ourika.',
                'price' =>  12,
                'mission' => 'La mission comprend la réalisation des marchés des différents lots, la consultation, le choix des entreprises et la coordination des études et des travaux.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict14.webp',
                'category_id' => 3,  
            ],
            [
                'name' => 'USINE MAGNA MIRRORS MOROCCO À KENITRA',
                'client' => 'ROUDOUDOU',
                'description' => 'Projet de construction d’une usine en béton préfabriqué à Kenitra.',
                'price' =>  80,
                'mission' => 'OPC – Ordonnancement, Pilotage et Coordination.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict15.webp',
                'category_id' => 4,  
            ],
            [
                'name' => 'USINE AMBEMAR À KENITRA',
                'client' => 'SOTRAVO',
                'description' => 'Projet de construction d’une usine en béton préfabriqué à Kenitra.',
                'price' =>  12,
                'mission' => 'OPC – Ordonnancement, Pilotage et Coordination.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict16.webp',
                'category_id' => 4,  
            ],
            [
                'name' => 'USINE DE CHAUSSURE TANGER',
                'client' => 'SOTRAVO',
                'description' => 'Construction d’une usine de chaussure à Tanger Zone Franche (NUEVO CALZADO INTERNACIONAL).',
                'price' =>  12,
                'mission' => 'OPC – Ordonnancement, Pilotage et Coordination.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict17.webp',
                'category_id' => 4,  
            ],
            [
                'name' => 'ENTREPÔTS TANGER',
                'client' => 'SOTRAVO',
                'description' => 'Construction d’entrepôts à Tanger Zone Franche.',
                'price' =>  14,
                'mission' => 'OPC – Ordonnancement, Pilotage et Coordination.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict18.webp',
                'category_id' => 4,  
            ],
            [
                'name' => 'USINE VOLKSWAGEN TANGER',
                'client' => 'SOTRAVO',
                'description' => 'Construction d’entrepôts à Tanger Zone Franche.',
                'price' =>  63,
                'mission' => 'OPC – Ordonnancement, Pilotage et Coordination.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict19.webp',
                'category_id' => 6,  
            ],
            [
                'name' => 'VILLA SEKKAT CASABLANCA',
                'client' => 'SOTRAVO',
                'description' => 'Construction d’une villa de haut standing à Casablanca.',
                'price' =>  3,
                'mission' => 'Réalisation des marchés des différents lots, la consultation, le choix des entreprises et la coordination des études et des travaux.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict20.webp',
                'category_id' => 7,  
            ],
            [
                'name' => 'VILLA QADIRI CASABLANCA',
                'client' => 'SOTRAVO',
                'description' => 'Construction d’une villa très haut standing à Casablanca, Anfa supérieur.',
                'price' =>  10,
                'mission' => 'Réalisation des marchés des différents lots, la consultation, le choix des entreprises et la coordination des études et des travaux.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict21.webp',
                'category_id' => 7,  
            ],
            [
                'name' => 'VILLA HAUT STANDING CASABLANCA',
                'client' => 'SOTRAVO',
                'description' => 'Construction d’une villa haut standing à Casablanca, Ain Diab',
                'price' =>  9,
                'mission' => 'Réalisation des marchés des différents lots, la consultation, le choix des entreprises et la coordination des études et des travaux.',
                'avancement' => 100,
                'state' => 'Réaliser',
                'image_path' => 'Pictures/pict22.webp',
                'category_id' => 7,  
            ],
            
            
        ];

        foreach ($projects as $project) {
            Projects::create($project);
        }
    }
}
