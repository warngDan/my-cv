import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function UltraDesignCV() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT PANEL */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-700 rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl mb-5">
                <img
                  src="https://res.cloudinary.com/dypyp7ks6/image/upload/v1779263721/profile_x147aq.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-4xl font-bold tracking-tight">
                Daniel CESAIRE
              </h1>

              <div className="mt-6 space-y-2 text-sm text-cyan-50">
                <p>📍 Eure et Loire</p>
                <p>📞 07 43 51 70 04</p>
              </div>
              <div className="mt-6 space-y-2 text-left">
                <p>✉️ daniel.cesaire@gmail.com</p>
                <p>🔗 linkedin.com/in/danielcesaire</p>
                <p>🌐 https://www.nexprocessia.fr</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
              Profil
            </h2>
              <p>
              <br />

              Développeur polyvalent spécialisé dans le développement web,
              l’automatisation de workflows métier et l’intégration d’outils
              SaaS & IA.
              J’accompagne les entreprises dans la création de solutions
              performantes, modernes et évolutives : applications web,
              automatisations intelligentes, intégrations API et outils IA.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-semibold mb-5 text-cyan-300">
              Stack Technique
            </h2>

            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "JavaScript",
                "TypeScript",
                "Python",
                "React",
                "Node.js",
                "Flutter",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "OpenAI API",
                "Make",
                "Airtable",
                "Webflow",
                "GitHub",
                "Linux",
                "REST API",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-semibold mb-5 text-cyan-300">
              Formations
            </h2>

            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white">
                  AI & NoCode Starter Program
                </p>
                <p>Alegria Academy • 2025</p>
              </div>

              <div>
                <p className="font-semibold text-white">Make Academy</p>
                <p>Foundation / Intermediate / Basics • 2025</p>
              </div>

              <div>
                <p className="font-semibold text-white">GT'M Ingenierie</p>
                <p>Développeur Java - Consultant PLM • 2019</p>
              </div>

              <div>
                <p className="font-semibold text-white">
                  Master Bioinformatique
                </p>
                <p>Université de Bordeaux • 2011</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-4xl font-bold leading-tight max-w-3xl">
              Développeur Full Stack • IA • Automatisation
            </h2>

            <p className="mt-5 text-gray-300 text-lg leading-relaxed max-w-4xl">
              Profil hybride combinant développement logiciel, intégration SaaS,
              automatisation métier et accompagnement technique.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-gray-800 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Expériences professionnelles
            </h2>

            <div className="space-y-10">
              <div className="relative pl-8 border-l-2 border-cyan-500">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-500 rounded-full"></div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                  <h3 className="text-2xl font-semibold">
                    DAN’S INFOSERVICE / NEXPROCESSIA
                  </h3>
                  <span className="text-sm font-medium text-cyan-600">
                    2024 — Aujourd’hui
                  </span>
                </div>

                <p className="text-cyan-700 font-medium mt-1">
                  Développeur & Consultant IT Freelance
                </p>

                <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
                  <li>
                    • Développement de solutions web et outils métiers sur mesure.
                  </li>
                  <li>
                    • Automatisation de workflows via Make, Airtable et APIs.
                  </li>
                  <li>
                    • Intégration de solutions IA dans les processus clients.
                  </li>
                  <li>
                    • Conseil et optimisation des environnements IT.
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-cyan-500">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-500 rounded-full"></div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                  <h3 className="text-2xl font-semibold">
                    TRANSVISION NET WORK
                  </h3>
                  <span className="text-sm font-medium text-cyan-600">
                    2022 — 2023
                  </span>
                </div>

                <p className="text-cyan-700 font-medium mt-1">
                  Technicien Informatique Polyvalent
                </p>

                <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
                  <li>
                    • Administration et maintenance de serveurs Linux.
                  </li>
                  <li>
                    • Gestion d’un parc informatique de production.
                  </li>
                  <li>
                    • Déploiement d’équipements multimédias et réseau.
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-cyan-500">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-500 rounded-full"></div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                  <h3 className="text-2xl font-semibold">
                    INETUM / AEROTEC
                  </h3>
                  <span className="text-sm font-medium text-cyan-600">
                    2021 — 2022
                  </span>
                </div>

                <p className="text-cyan-700 font-medium mt-1">
                  Développeur PLM JavaScript
                </p>

                <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
                  <li>
                    • Développement de nouvelles fonctionnalités.
                  </li>
                  <li>
                    • Gestion des anomalies.
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-cyan-500">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-500 rounded-full"></div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                  <h3 className="text-2xl font-semibold">
                    INETUM / STELLANTIS
                  </h3>
                  <span className="text-sm font-medium text-cyan-600">
                    2020 — 2021
                  </span>
                </div>

                <p className="text-cyan-700 font-medium mt-1">
                  Analyste SI PLM/PPR
                </p>

                <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
                  <li>
                    • Coordination technique et suivi de projets industriels.
                  </li>
                  <li>
                    • Qualification fonctionnelle et gestion des anomalies.
                  </li>
                  <li>
                    • Supervision des déploiements applicatifs.
                  </li>
                </ul>
              </div>
               <div className="relative pl-8 border-l-2 border-cyan-500">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-500 rounded-full"></div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                  <h3 className="text-2xl font-semibold">
                    DAN'S INFOSERVICE EIRL
                  </h3>
                  <span className="text-sm font-medium text-cyan-600">
                    2016 — 2019
                  </span>
                </div>

                <p className="text-cyan-700 font-medium mt-1">
                  Développeur web
                </p>

                <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
                  <li>
                    • Développement de solutions web HTML5 & CSS.
                  </li>
                  <li>
                    • Déploiement et administration des sites.
                  </li>
                </ul>
              </div>
              <div className="relative pl-8 border-l-2 border-cyan-500">
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-cyan-500 rounded-full"></div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                  <h3 className="text-2xl font-semibold">
                    INSERM
                  </h3>
                  <span className="text-sm font-medium text-cyan-600">
                    2011 — 2013
                  </span>
                </div>

                <p className="text-cyan-700 font-medium mt-1">
                  Ingénieur d'études bioinformaticien
                </p>

                <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
                  <li>
                    • Développement d'applications d'aide à la recherche médicale.
                  </li>
                  <li>
                    • Conception et mise en œuvre de pipelines d'analyse de données.
                  </li>
                  <li>
                    • Veille technologique sur les approches conceptuelles et matérielles existantes.
                  </li>
                   <li>
                    • Assistance à la maintenance informatique du parc informatique.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-700 rounded-3xl p-7 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">Forces</h2>

              <ul className="space-y-3 text-cyan-50">
                <li>• Développement Full Stack</li>
                <li>• Automatisation IA</li>
                <li>• Intégration SaaS</li>
                <li>• Résolution de problèmes</li>
                <li>• Vision technico-fonctionnelle</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-3xl p-7 border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 text-cyan-300">
                Objectif
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Contribuer à des projets innovants mêlant développement logiciel,
                automatisation intelligente et transformation digitale.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="/CV-Daniel-Cesaire.pdf"
        target="_blank"
        className="px-4 py-2 bg-cyan-500 rounded-xl"
      >
        Télécharger le CV
      </a>
    </div>
  );
}
