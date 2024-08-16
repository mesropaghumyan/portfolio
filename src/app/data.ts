import { ProjectCategory } from "../enums/ProjectCategory";
import {TechnologyCategory} from "../enums/TechnologyCategory";
import {SkillCategory} from "../enums/SkillCategory";

export const data = {
  fr: {
    header: {
      fullName: "Mesrop Aghumyan",
      about: "<span class='bg-gradient-to-r from-cyan-500 to-slate-800 text-slate-100 py-1 px-2'>Développeur web</span> junior passionné par l'informatique",
      location: "Lyon, France",
      socials: [
        {
          name: "Github",
          url: "https://github.com/mesropaghumyan",
          icon: "icon-[mdi--github]"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/mesropaghumyan/",
          icon: "icon-[ri--linkedin-fill]"
        },
        {
          name: "Mobile",
          url: "tel:+330758407378",
          icon: "icon-[ic--baseline-phone]"
        },
        {
          name: "E-mail",
          url: "mailto:contact@mesrop-aghumyan.fr",
          icon: "icon-[ic--outline-email]"
        }
      ]
    },
    about: {
      title: "À propos de moi",
      paragraphs: [
        {
          text: "Je suis un <a target='_blank' href='https://www.onisep.fr/ressources/univers-metier/metiers/developpeur-developpeuse-informatique' class='text-slate-600 hover:text-slate-800 underline font-bold'>développeur web</a> passionné, spécialisé dans la conception et le développement d'applications. Mon parcours m'a permis d'explorer divers domaines de l'informatique, tels que la programmation, les systèmes, les réseaux et la data, tout en perfectionnant mes compétences à travers des projets personnels, universitaires et professionnels."
        },
        {
          text: "Actuellement, je travaille en tant que développeur Full-Stack avec une approche DevOps au sein de <a target='_blank' href='https://www.systailor.fr/' class='text-slate-600 hover:text-slate-800 underline font-bold'>Systailor</a>, me concentrant sur <a target='_blank' href='https://angular.dev/' class='text-slate-600 hover:text-slate-800 font-bold underline'>Angular</a> pour le web, <a target='_blank' href='https://laravel.com/' class='text-slate-600 hover:text-slate-800 font-bold underline'>Laravel</a> pour les applications métiers complexes, et <a target='_blank' href='https://nodejs.org/en' class='text-slate-600 hover:text-slate-800 font-bold underline'>Node.js</a> pour des solutions plus légères."
        },
        {
          text: "Diplômé d'un BUT Informatique à l'<a target='_blank' href='https://iut.univ-lyon1.fr/' class='text-slate-600 hover:text-slate-800 font-bold underline'>IUT Lyon 1</a>, je poursuis un diplôme d'ingénieur à l'<a target='_blank' href='https://www.imt-mines-ales.fr/' class='text-slate-600 hover:text-slate-800 font-bold underline'>École des Mines d'Alès</a>. Dès septembre, je rejoindrai <a target='_blank' href='https://www.cosywee.com/' class='text-slate-600 hover:text-slate-800 font-bold underline'>Cosywee</a> en tant qu'ingénieur logiciel en alternance, où je me spécialiserai en génie logiciel et gestion de projet, tout en contribuant à l'amélioration des outils internes, notamment l'ERP."
        }
      ]
    },
    projects: {
      title: "Mes projets",
      categories: [
        {
          name: ProjectCategory.web
        },
        {
          name: ProjectCategory.software
        },
        {
          name: ProjectCategory.script
        }
      ],
      software: [
        {
          name: "GraphMap",
          technologies: [
            { name: "Java", icon: "icon-[devicon--java]" },
          ],
          image: {
            src: "/assets/images/graph_map.png",
            alt: "Graph Map",
            title: "Graph Map"
          },
          description: "Ce projet universitaire, réalisé en binôme, consistait à développer une interface homme-machine (IHM) en Java avec la bibliothèque Swing. L'application permet de charger un graphe à partir d'un fichier CSV, puis de calculer diverses propriétés du graphe, comme le plus court chemin entre deux nœuds. Ce projet m'a permis de me familiariser avec les principes fondamentaux de la programmation orientée objet et d'approfondir mes connaissances en théorie des graphes, en mettant en pratique les concepts théoriques à travers des algorithmes concrets.",
          code: {
            btnIcon: "icon-[ic--twotone-code]",
            link: "https://github.com/mesropaghumyan/graph-map",
            btnName: "Code"
          }
        }
      ],
      web: [
        {
          name: "Mika Drive",
          technologies: [
            { name: "Angular", icon: "icon-[vscode-icons--file-type-angular]" },
            { name: "TypeScript", icon: "icon-[devicon--typescript]" },
            { name: "Node.js", icon: "icon-[vscode-icons--file-type-node]" },
            { name: "GraphQL", icon: "icon-[logos--graphql]" },
            { name: "Tailwind", icon: "icon-[devicon--tailwindcss]" }
          ],
          description: "En tant que freelance, j'ai réalisé le site web de l'agence Mika Drive pour améliorer leur présence en ligne avec une nouvelle identité visuelle. Le site permet aux utilisateurs de découvrir les services de l'agence, de lire des articles de blog, de contacter le support et de demander un devis. Le front-end a été développé avec Angular et stylisé avec Tailwind CSS, tandis que le back-end repose sur une API Express pour la gestion des mails et des requêtes GraphQL vers Hygraph, utilisé pour modéliser le blog.",
          image: {
            src: "/assets/images/mika_drive_home_page.png",
            alt: "Page d'accueil de Mika Drive",
            title: "Page d'accueil de Mika Drive"
          },
          live: {
            btnIcon: "icon-[codicon--debug-start]",
            link: "https://www.mikadrive.fr/",
            btnName: "Live"
          }
        },
        {
          name: "Portfolio",
          technologies: [
            { name: "Angular", icon: "icon-[vscode-icons--file-type-angular]" },
            { name: "TypeScript", icon: "icon-[devicon--typescript]" },
            { name: "Tailwind", icon: "icon-[devicon--tailwindcss]" }
          ],
          description: "Ce projet universitaire a été réalisé dans le cadre du module de Programmation Multimédia. Il s'agit d'une modélisation du système solaire utilisant la bibliothèque Three.js. Ce projet m'a permis d'acquérir une expérience pratique des concepts de la 3D tout en créant une visualisation interactive et éducative du système solaire, renforçant ainsi mes compétences en développement multimédia.",
          image: {
            src: "/assets/images/portfolio.png",
            alt: "Portfolio de Mesrop Aghumyan",
            title: "Portfolio de Mesrop Aghumyan"
          },
          live: {
            btnIcon: "icon-[codicon--debug-start]",
            link: "https://www.mesrop-aghumyan.fr/",
            btnName: "Live"
          },
          code: {
            btnIcon: "icon-[ic--twotone-code]",
            link: "https://github.com/mesropaghumyan/portfolio",
            btnName: "Code"
          },
        },
        {
          name: "Solar System",
          technologies: [
            { name: "JavaScript", icon: "icon-[logos--javascript]" },
            { name: "ThreeJS", icon: "icon-[logos--threejs]" },
          ],
          description: "Solar System est un mini projet universitaire réalisé dans le cadre du module de Programmation Multimédia. C’est une modélisation du système solaire avec la bibliothèque ThreeJS. J'ai particulièrement apprécié cette expérience, qui m'a permis de développer une compréhension pratique des concepts de la 3D tout en créant une visualisation interactive et éducative du système solaire.",
          image: {
            src: "/assets/images/solar_system.png",
            alt: "Système Solaire",
            title: "Système Solaire"
          },
          live: {
            btnIcon: "icon-[codicon--debug-start]",
            link: "https://solar-system-tau-seven.vercel.app/",
            btnName: "Live"
          },
          code: {
            btnIcon: "icon-[ic--twotone-code]",
            link: "https://github.com/mesropaghumyan/solar-system",
            btnName: "Code"
          },
        },
        {
          name: "Wedding Invitation",
          technologies: [
            { name: "JavaScript", icon: "icon-[logos--javascript]" },
            { name: "Node.js", icon: "icon-[vscode-icons--file-type-node]" },
            { name: "Express.js", icon: "icon-[simple-icons--express]" },
            { name: "Tailwind", icon: "icon-[devicon--tailwindcss]" },
            { name: "Pug", icon: "icon-[vscode-icons--file-type-pug]" },
          ],
          description: "En tant que freelance, j'ai créé un site web pour un couple souhaitant organiser leur mariage. Cette plateforme, simple d'utilisation, permettait aux invités de consulter le programme du mariage et de confirmer leur présence. Le site intégrait également un formulaire pour collecter des informations essentielles comme les restrictions alimentaires et le nombre d'invités. Ce projet a contribué à une gestion efficace du mariage en centralisant les informations et en simplifiant la communication entre le couple et leurs invités.",
          image: {
            src: "/assets/images/wedding_invitation.png",
            alt: "Wedding Invitation",
            title: "Wedding Invitation"
          },
          code: {
            btnIcon: "icon-[ic--twotone-code]",
            link: "https://github.com/mesropaghumyan/wedding-invitation",
            btnName: "Code"
          },
        },
      ],
      script: [
        {
          name: "ActivMobile",
          description: "ActivMobile est un script Python que j'ai développé dans le cadre de mon alternance chez Systailor. Il automatise l'activation et le déploiement de lignes mobiles via l'intégration de l'API de Netwo. Chaque ligne mobile activée est automatiquement insérée dans la base de données RADIUS pour son déploiement. Le script offre également des fonctionnalités supplémentaires, telles que la génération de rapports de consommation des lignes mobiles pour un client spécifique sur une période donnée, ainsi que la création de listes détaillées de lignes mobiles associées à un client. Les fichiers générés sont ensuite automatiquement envoyés par email à l'adresse spécifiée.",
          technologies: [
            { name: "Python", icon: "icon-[logos--python]" },
            { name: "MySQL", icon: "icon-[devicon--mysql]" },
            { name: "Docker", icon: "icon-[logos--docker-icon]" },
            { name: "Linux", icon: "icon-[flat-color-icons--linux]" }
          ],
        },
        {
          name: "Proxmox Load Balancer",
          description: "Dans le cadre de mon alternance chez Systailor, j'ai développé un script Python destiné à automatiser la répartition des charges entre les hyperviseurs d'un cluster Proxmox. Pour cela, j'ai conçu un algorithme qui calcule un seuil basé sur la charge CPU moyenne de l'ensemble des hyperviseurs, et optimise la migration des machines virtuelles entre eux. L'objectif est de maintenir un équilibre optimal des ressources, en veillant à ce que chaque hyperviseur fonctionne dans les limites de ce seuil.",
          technologies: [
            { name: "Python", icon: "icon-[logos--python]" },
            { name: "Proxmox", icon: "icon-[simple-icons--proxmox]" },
            { name: "Docker", icon: "icon-[logos--docker-icon]" },
            { name: "Linux", icon: "icon-[flat-color-icons--linux]" }
          ],
        },
        {
          name: "vSphere Consumption",
          description: "Lors de mon alternance chez Systailor, j'ai développé un script Python pour automatiser la collecte quotidienne des données de ressources (OS, RAM, CPU, stockage, type de stockage) des machines virtuelles déployées sur vSphere pour nos clients. Ces données sont stockées dans une base de données MySQL que j'ai modélisée. L'objectif est de calculer la consommation moyenne des ressources pour chaque client, afin de générer automatiquement des factures précises.",
          technologies: [
            { name: "Python", icon: "icon-[logos--python]" },
            { name: "MySQL", icon: "icon-[devicon--mysql]" },
            { name: "vSphere", icon: "icon-[devicon--vsphere]" },
            { name: "Docker", icon: "icon-[logos--docker-icon]" },
            { name: "Linux", icon: "icon-[flat-color-icons--linux]" }
          ],
        }
      ]
    },
    education: {
      title: "Formations",
      schools: [
        {
          name: "École des Mines d'Alès",
          link: "https://www.imt-mines-ales.fr/",
          degree: "Cursus ingénieur en Informatique et Réseaux",
          startYear: "2024",
          endYear: "2027"
        },
        {
          name: "IUT Lyon 1",
          link: "https://iut.univ-lyon1.fr/",
          degree: "BUT Informatique - Réalisation d'applications",
          startYear: "2021",
          endYear: "2024"
        },
      ]
    },
    hobbies: {
      title: "Loisirs",
      hobbies: [
        {
          name: "Randonnée",
          icon: "icon-[noto--snow-capped-mountain]"
        },
        {
          name: "Jeux-vidéos",
          icon: "icon-[noto--joystick]"
        },
        {
          name: "Programmation",
          icon: "icon-[fluent-emoji--keyboard]"
        },
        {
          name: "Informatique",
          icon: "icon-[twemoji--laptop-computer]"
        }
      ]
    },
    experiences: {
      title: "Experiences",
      experiences: [
        {
          company: {
            name: "Cosywee",
            link: "https://www.cosywee.com/",
          },
          tag: "Apprentissage",
          jobTitle: "Développeur d'Application & Génie Logiciel",
          startYear: "sep 2024",
          endYear: "aoû 2027",
          jobDescription: "",
        },
        {
          company: {
            name: "Systailor",
            link: "https://www.systailor.fr/",
          },
          tag: "Apprentissage",
          jobTitle: "Développeur Full-Stack",
          startYear: "avr 2023",
          endYear: "aoû 2024",
          jobDescription: "En tant qu'alternant chez Systailor, entreprise spécialisée dans l'infogérance et l'hébergement en datacenter, j'ai eu l'opportunité de collaborer étroitement avec des administrateurs systèmes et réseaux. Mes responsabilités principales incluent l'automatisation des tâches opérationnelles et la contribution au développement, en particulier sur les interfaces clients. Cette expérience m'a permis de développer des compétences techniques approfondies tout en participant activement à l'amélioration continue des services proposés par l'entreprise.",
        }
      ]
    },
    technologies: {
      title: "Technologies",
      categories: [
        {
          name: TechnologyCategory.languages
        },
        {
          name: TechnologyCategory.frameworks
        },
        {
          name: TechnologyCategory.databases
        },
        {
          name: TechnologyCategory.devTools
        },
        {
          name: TechnologyCategory.devOps
        },
        {
          name: TechnologyCategory.api
        }
      ],
      languages: [
        {
          name: "Python",
          icon: "icon-[logos--python]"
        },
        {
          name: "JavaScript",
          icon: "icon-[vscode-icons--file-type-js-official]"
        },
        {
          name: "TypeScript",
          icon: "icon-[devicon--typescript]"
        },
        {
          name: "Node.js",
          icon: "icon-[vscode-icons--file-type-node]"
        },
        {
          name: "HTML",
          icon: "icon-[vscode-icons--file-type-html]"
        },
        {
          name: "CSS",
          icon: "icon-[vscode-icons--file-type-css]"
        },
        {
          name: "PHP",
          icon: "icon-[devicon--php]"
        },
        {
          name: "Java",
          icon: "icon-[devicon--java]"
        },
      ],
      frameworks: [
        {
          name: "Angular",
          icon: "icon-[vscode-icons--file-type-angular]"
        },
        {
          name: "Laravel",
          icon: "icon-[logos--laravel]"
        },
        {
          name: "Express.js",
          icon: "icon-[simple-icons--express]"
        },
      ],
      databases: [
        {
          name: "MySQL",
          icon: "icon-[devicon--mysql]"
        },
        {
          name: "MongoDB",
          icon: "icon-[vscode-icons--file-type-mongo]"
        },
        {
          name: "ElasticSearch",
          icon: "icon-[logos--elasticsearch]"
        },
      ],
      devTools: [
        {
          name: "Suite JetBrains",
          icon: "icon-[logos--jetbrains]"
        },
        {
          name: "Git",
          icon: "icon-[devicon--git]"
        },
        {
          name: "GitHub",
          icon: "icon-[mdi--github]"
        },
        {
          name: "GitLab",
          icon: "icon-[logos--gitlab]"
        },
        {
          name: "Vercel",
          icon: "icon-[devicon--vercel]"
        },
        {
          name: "Linux",
          icon: "icon-[devicon--linux]"
        },
        {
          name: "Windows",
          icon: "icon-[logos--microsoft-windows-icon]"
        },
        {
          name: "UML",
          icon: "icon-[simple-icons--uml]"
        },
      ],
      devOps: [
        {
          name: "Docker",
          icon: "icon-[logos--docker-icon]"
        },
        {
          name: "GitLab CI/CD",
          icon: "icon-[iconoir--infinite]"
        },
        {
          name: "SonarQube",
          icon: "icon-[devicon--sonarqube]"
        },
        {
          name: "Ansible",
          icon: "icon-[vscode-icons--file-type-ansible]"
        },
      ],
      api: [
        {
          name: "Proxmox",
          icon: "icon-[simple-icons--proxmox]"
        },
        {
          name: "vSphere",
          icon: "icon-[devicon--vsphere]"
        },
        {
          name: "Netwo",
          icon: "icon-[mdi--sim-outline]"
        },
        {
          name: "Stripe",
          icon: "icon-[logos--stripe]"
        },
        {
          name: "GraphQL",
          icon: "icon-[logos--graphql]"
        },
        {
          name: "Postman",
          icon: "icon-[devicon--postman]"
        },
      ]
    },
    skills: {
      title: "Compétences",
      categories: [
        {
          name: SkillCategory.realiser
        },
        {
          name: SkillCategory.optimiser
        },
        {
          name: SkillCategory.administrer
        },
        {
          name: SkillCategory.gerer
        },
        {
          name: SkillCategory.conduire
        },
        {
          name: SkillCategory.collaborer
        },
      ],
      "Realiser": [
        {
          level: "Semestre 1 & 2",
          description: [
            "Développer des applications informatiques simples."
          ]
        },
        {
          level: "Semestre 3 & 4",
          description: [
            "Partir des exigences et aller jusqu'à une application complète."
          ]
        },
        {
          level: "Semestre 5 & 6",
          description: [
            "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)"
          ]
        }
      ],
      "Optimiser": [
        {
          level: "Semestre 1 & 2",
          description: [
            "Appréhender et construire des algorithmes."
          ]
        },
        {
          level: "Semestre 3 & 4",
          description: [
            "Sélectionner les algorithmes adéquats pour répondre à un problème donné."
          ]
        },
        {
          level: "Semestre 5 & 6",
          description: [
            "Analyser et optimiser des applications."
          ]
        }
      ],
      "Administrer": [
        {
          level: "Semestre 1 & 2",
          description: [
            "Installer et configurer un poste de travail."
          ]
        },
        {
          level: "Semestre 3 & 4",
          description: [
            "Déployer des services dans une architecture réseau"
          ]
        }
      ],
      "Gerer": [
        {
          level: "Semestre 1 & 2",
          description: [
            "Concevoir et mettre en place une base de données à partir d'un cahier des charges client."
          ]
        },
        {
          level: "Semestre 3 & 4",
          description: [
            "Optimiser une base de données, intéragir avec une application et mettre en oeuvre la sécurité."
          ]
        }
      ],
      "Conduire": [
        {
          level: "Semestre 1 & 2",
          description: [
            "Identifier les besoins métiers des clients et des utilisateurs."
          ]
        },
        {
          level: "Semestre 3 & 4",
          description: [
            "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs."
          ]
        }
      ],
      "Collaborer": [
        {
          level: "Semestre 1 & 2",
          description: [
            "Identifier ses aptitudes pour travailler dans une équipe."
          ]
        },
        {
          level: "Semestre 3 & 4",
          description: [
            "Situer son rôle et ses missions au sein d'une équipe informatique."
          ]
        },
        {
          level: "Semestre 5 & 6",
          description: [
            "Manager une équipe informatique."
          ]
        }
      ],
    }
  }
};
