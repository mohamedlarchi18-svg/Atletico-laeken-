# Atletico Laeken — Site officiel

Site web officiel du club de football en salle **Atletico Laeken**, basé à Laeken, Bruxelles.
Développé avec **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS** et **Framer Motion**.

---

## Description du projet

Atletico Laeken (Club LFFS #1466) est un club de futsal fondé en 2018. Ce site présente :

- Les **résultats et classements** des équipes en compétition LFFS
- Les informations sur les **3 équipes** (Seniors A, Seniors B, Vétérans)
- La **vie du club** : activités, valeurs, histoire
- Un **formulaire de contact** pour rejoindre le club
- Un **scraper automatique** qui récupère les données depuis le site LFFS

---

## Installation

### Prérequis

- Node.js 18 ou supérieur
- npm 9 ou supérieur

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-nom/atletico-laeken.git
cd atletico-laeken

# 2. Installer les dépendances
npm install

# 3. Copier le fichier d'environnement
cp .env.example .env.local

# 4. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

---

## Développement

```bash
# Serveur de développement (avec hot reload)
npm run dev

# Vérification du code (ESLint)
npm run lint

# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

---

## Scraping des données LFFS

Les données de résultats et classements sont récupérées automatiquement depuis le site [LFFS](https://www.lffs.eu).

### Lancement manuel du scraper

```bash
# Installer Playwright (nécessaire une seule fois)
npx playwright install chromium

# Lancer le scraper
npm run scrape
```

Le scraper :
1. Navigue sur les pages LFFS du club (ID 1466)
2. Extrait les classements de chaque série
3. Récupère les résultats des matchs
4. Sauvegarde les données dans `/data/`

Les fichiers générés sont :
- `data/resultats-1466.json` — tous les matchs du club
- `data/classement-{serieId}.json` — classement par série

### Scraping automatique (GitHub Actions)

Un workflow GitHub Actions (`.github/workflows/scrape-lffs.yml`) se déclenche :
- **Automatiquement** toutes les 3 heures
- **Manuellement** via l'onglet Actions → "Scraper LFFS"

Le workflow commit et push les nouvelles données si des changements sont détectés.

---

## Mise à jour manuelle des données

Si le scraper automatique ne fonctionne pas (changement de structure du site LFFS), vous pouvez mettre à jour les données manuellement :

### 1. Modifier `data/resultats-1466.json`

```json
{
  "lastUpdated": "2024-01-15T10:00:00Z",
  "clubId": 1466,
  "matches": [
    {
      "id": "m-unique",
      "date": "2024-01-14",
      "homeTeam": "Atletico Laeken A",
      "awayTeam": "Équipe Adverse",
      "homeScore": 3,
      "awayScore": 1,
      "journee": 12,
      "serieId": 1226,
      "serieName": "Provinciale 1 BBW",
      "status": "played"
    }
  ]
}
```

**status** : `"played"` pour un match joué, `"upcoming"` pour un match à venir.
Pour les matchs à venir, mettez `homeScore` et `awayScore` à `null`.

### 2. Modifier `data/classement-{serieId}.json`

```json
{
  "lastUpdated": "2024-01-15T10:00:00Z",
  "serieId": 1226,
  "serieName": "Provinciale 1 Bruxelles-Brabant Wallon",
  "classement": [
    {
      "position": 1,
      "teamName": "Atletico Laeken A",
      "played": 12,
      "won": 9,
      "drawn": 1,
      "lost": 2,
      "goalsFor": 58,
      "goalsAgainst": 31,
      "points": 28,
      "isOurClub": true
    }
  ]
}
```

Mettez `"isOurClub": true` uniquement pour les équipes d'Atletico Laeken.

---

## Déploiement sur Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

Ou via l'interface Vercel :
1. Connectez votre dépôt GitHub à [vercel.com](https://vercel.com)
2. Configurez les variables d'environnement depuis `.env.example`
3. Vercel détecte automatiquement Next.js et configure le build

---

## Structure du projet

```
atletico-laeken/
├── app/                    # Pages (App Router Next.js 14)
│   ├── layout.tsx          # Layout racine (Header, Footer, métadonnées)
│   ├── page.tsx            # Page d'accueil
│   ├── resultats/page.tsx  # Résultats & classements
│   ├── equipes/page.tsx    # Équipes du club
│   ├── vie-du-club/page.tsx# Vie du club & activités
│   ├── contact/page.tsx    # Contact
│   ├── sitemap.ts          # Génération sitemap.xml
│   └── globals.css         # Styles globaux & variables CSS
│
├── components/             # Composants React réutilisables
│   ├── Header.tsx          # Navigation fixe avec menu mobile
│   ├── Footer.tsx          # Pied de page
│   ├── Shield.tsx          # Blason SVG du club
│   ├── PlayerSVG.tsx       # Illustration joueur
│   ├── KidsPlayingSVG.tsx  # Illustration enfants
│   ├── GoalkeeperSVG.tsx   # Illustration gardien
│   ├── FootballFieldLines.tsx # Lignes terrain de foot (arrière-plan)
│   ├── StatsBar.tsx        # Barre statistiques animée
│   ├── MatchCard.tsx       # Carte de résultat de match
│   ├── TeamCard.tsx        # Carte d'équipe
│   ├── ClassementTable.tsx # Tableau de classement
│   └── ContactForm.tsx     # Formulaire de contact
│
├── data/                   # Données JSON (générées par le scraper)
│   ├── club-info.json      # Informations du club
│   ├── equipes.json        # Équipes du club
│   ├── resultats-1466.json # Résultats des matchs
│   └── classement-1226.json# Classement Provinciale 1
│
├── lib/                    # Utilitaires et types
│   ├── types.ts            # Types TypeScript
│   ├── constants.ts        # Constantes du projet
│   └── utils.ts            # Fonctions utilitaires
│
├── scripts/
│   └── scrape-lffs.ts      # Scraper Playwright
│
├── public/
│   └── robots.txt          # Configuration robots
│
├── .github/
│   └── workflows/
│       └── scrape-lffs.yml # Workflow GitHub Actions
│
├── tailwind.config.ts      # Configuration Tailwind CSS
├── next.config.ts          # Configuration Next.js
└── .env.example            # Variables d'environnement exemple
```

---

## Palette de couleurs

| Couleur     | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| Rouge       | `#C8102E` | Couleur principale du club   |
| Rouge foncé | `#A00D24` | Hover, dégradés              |
| Blanc       | `#FFFFFF` | Textes sur fond sombre       |
| Noir        | `#0A0A0A` | Textes, fonds sombres        |
| Off-white   | `#FAF8F5` | Fond de page principal       |
| Crème       | `#F0EBE4` | Fonds de cartes, sections    |

---

## Contact

- Email : [atleticolaeken@gmail.com](mailto:atleticolaeken@gmail.com)
- Facebook : [facebook.com/atleticolaeken](https://www.facebook.com/atleticolaeken)
- Instagram : [instagram.com/atleticolaeken](https://www.instagram.com/atleticolaeken)
- LFFS : [lffs.eu](https://www.lffs.eu) (Club #1466)

---

*Atletico Laeken — Football en Salle · Laeken, Bruxelles · Fondé 2018*
