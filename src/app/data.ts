import { CategoryName } from "../enums/CategoryName";
import { Data } from "../interfaces/Data";

export const data: Data = {
  fr: {
    header: {
      fullName: "Mesrop Aghumyan",
      about: "<span class='bg-gradient-to-r from-cyan-500 to-slate-800 text-slate-100 py-1 px-2'>Développeur web</span> junior passionné par l'informatique 💻",
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
          name: CategoryName.all
        },
        {
          name: CategoryName.web
        },
        {
          name: CategoryName.script
        }
      ],
      all: [
        {
          name: "Mika Drive",
          technologies: [
            { name: "Angular", icon: "icon-[vscode-icons--file-type-angular]" },
            { name: "TypeScript", icon: "icon-[devicon--typescript]" },
            { name: "Node.js", icon: "icon-[vscode-icons--file-type-node]" },
            { name: "GraphQL", icon: "icon-[logos--graphql]" }
          ],
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ac odio eget lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nisi nisi, maximus eu finibus iaculis, tincidunt vitae ligula. Integer vitae vehicula ex. In eget ante lectus. Pellentesque consectetur tellus vitae nibh accumsan ullamcorper.",
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
          name: "SimActivator",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ac odio eget lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nisi nisi, maximus eu finibus iaculis, tincidunt vitae ligula. Integer vitae vehicula ex. In eget ante lectus. Pellentesque consectetur tellus vitae nibh accumsan ullamcorper.",
          technologies: [
            { name: "Python", icon: "icon-[logos--python]" },
            { name: "MySQL", icon: "icon-[devicon--mysql]" },
            { name: "Docker", icon: "icon-[logos--docker-icon]" },
            { name: "Linux", icon: "icon-[flat-color-icons--linux]" }
          ],
        },
        {
          name: "ProxmoxLoadBalancer",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ac odio eget lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nisi nisi, maximus eu finibus iaculis, tincidunt vitae ligula. Integer vitae vehicula ex. In eget ante lectus. Pellentesque consectetur tellus vitae nibh accumsan ullamcorper.",
          technologies: [
            { name: "Python", icon: "icon-[logos--python]" },
            { name: "Proxmox", icon: "icon-[simple-icons--proxmox]" },
            { name: "Docker", icon: "icon-[logos--docker-icon]" },
            { name: "Linux", icon: "icon-[flat-color-icons--linux]" }
          ],
        },
        {
          name: "vSphereConsumption",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ac odio eget lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nisi nisi, maximus eu finibus iaculis, tincidunt vitae ligula. Integer vitae vehicula ex. In eget ante lectus. Pellentesque consectetur tellus vitae nibh accumsan ullamcorper.",
          technologies: [
            { name: "Python", icon: "icon-[logos--python]" },
            { name: "MySQL", icon: "icon-[devicon--mysql]" },
            { name: "vSphere", icon: "icon-[devicon--vsphere]" },
            { name: "Docker", icon: "icon-[logos--docker-icon]" },
            { name: "Linux", icon: "icon-[flat-color-icons--linux]" }
          ],
        }
      ],
      web: [
        {
          name: "Mika Drive",
          technologies: [
            { name: "Angular", icon: "icon-[vscode-icons--file-type-angular]" },
            { name: "TypeScript", icon: "icon-[devicon--typescript]" },
            { name: "Node.js", icon: "icon-[vscode-icons--file-type-node]" },
            { name: "GraphQL", icon: "icon-[logos--graphql]" }
          ],
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ac odio eget lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nisi nisi, maximus eu finibus iaculis, tincidunt vitae ligula. Integer vitae vehicula ex. In eget ante lectus. Pellentesque consectetur tellus vitae nibh accumsan ullamcorper.",
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
        }
      ],
      script: [
        {
          name: "SimActivator",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ac odio eget lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nisi nisi, maximus eu finibus iaculis, tincidunt vitae ligula. Integer vitae vehicula ex. In eget ante lectus. Pellentesque consectetur tellus vitae nibh accumsan ullamcorper.",
          technologies: [
            { name: "Python", icon: "icon-[logos--python]" },
            { name: "MySQL", icon: "icon-[devicon--mysql]" },
            { name: "Docker", icon: "icon-[logos--docker-icon]" },
            { name: "Linux", icon: "icon-[flat-color-icons--linux]" }
          ],
        },
        {
          name: "ProxmoxLoadBalancer",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ac odio eget lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nisi nisi, maximus eu finibus iaculis, tincidunt vitae ligula. Integer vitae vehicula ex. In eget ante lectus. Pellentesque consectetur tellus vitae nibh accumsan ullamcorper.",
          technologies: [
            { name: "Python", icon: "icon-[logos--python]" },
            { name: "Proxmox", icon: "icon-[simple-icons--proxmox]" },
            { name: "Docker", icon: "icon-[logos--docker-icon]" },
            { name: "Linux", icon: "icon-[flat-color-icons--linux]" }
          ],
        },
        {
          name: "vSphereConsumption",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare ac odio eget lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nisi nisi, maximus eu finibus iaculis, tincidunt vitae ligula. Integer vitae vehicula ex. In eget ante lectus. Pellentesque consectetur tellus vitae nibh accumsan ullamcorper.",
          technologies: [
            { name: "Python", icon: "icon-[logos--python]" },
            { name: "MySQL", icon: "icon-[devicon--mysql]" },
            { name: "vSphere", icon: "icon-[devicon--vsphere]" },
            { name: "Docker", icon: "icon-[logos--docker-icon]" },
            { name: "Linux", icon: "icon-[flat-color-icons--linux]" }
          ],
        }
      ]
    }
  }
};
