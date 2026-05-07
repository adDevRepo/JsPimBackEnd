# Backend PIM  
<p align="center"><img src="./assets/pim-nsk-logo.svg" width="100" alt="Logo PIM" />
</p>

## Présentation

Ce projet est le backend d'une application PIM (Product Information Management).

Il permet de gérer les données produits, les catégories, les canaux d'export ainsi que l'authentification des utilisateurs.

L'API a été développée avec NestJS, TypeScript, Prisma et PostgreSQL.

Le projet utilise Docker afin de faciliter le développement et le lancement de l'environnement complet.

---

## Fonctionnalités

- authentification des utilisateurs
- inscription et connexion
- gestion des produits
- gestion des catégories
- gestion des canaux
- association de produits à un canal
- configuration des colonnes d'export
- génération d'exports CSV
- API REST sécurisée

---

## Technologies utilisées

- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Docker
- Docker Compose

---

## Installation

1. Cloner le projet

2. Installer les dépendances :

```bash
npm install
```

3. Créer un fichier `.env` à partir de l'exemple :

```bash
cp .env.example .env
```

---

## Variables d'environnement

Dans `.env` :

```env
DATABASE_URL="postgresql://nest_user:nest_password@postgres:5432/nest_db?schema=public"
```

---

## Lancer le projet

## Avec Docker (recommandé)

Démarrer l'API et PostgreSQL :

```bash
docker compose up --build
```

L'API démarre par défaut sur :

```txt
http://localhost:3000
```

PostgreSQL est accessible sur :

```txt
localhost:5432
```

---

## Générer Prisma

Dans un autre terminal :

```bash
docker exec -it nest_api sh
```

Puis :

```bash
npx prisma generate
```

---

## Lancer les migrations

Toujours dans le conteneur :

```bash
npx prisma migrate dev --name init
```

---

## Prisma Studio

Prisma Studio permet de visualiser les données de la base :

```bash
npx prisma studio
```

---

## Lancer le backend sans Docker

```bash
npm run start:dev
```

---

## Scripts disponibles

```bash
npm run start
```

Lance l'API

```bash
npm run start:dev
```

Lance l'API en mode développement

```bash
npm run start:prod
```

Lance l'API en production

```bash
npm run test
```

Lance les tests unitaires

```bash
npm run test:e2e
```

Lance les tests end-to-end

```bash
npm run test:cov
```

Affiche la couverture des tests

---

## Structure du projet

```txt
src/
  auth/         Authentification et sécurité
  products/     Gestion des produits
  categories/   Gestion des catégories
  channels/     Gestion des canaux
  prisma/       Service Prisma
  common/       Éléments partagés
```

---

## Frontend

Le frontend React communique avec cette API via :

```txt
http://localhost:3000
```

Le frontend utilise généralement un proxy `/api` configuré avec Vite.

---

## Architecture du projet

```txt
Frontend React
       ↓
Backend NestJS API
       ↓
Prisma ORM
       ↓
PostgreSQL
```

---

## Déploiement

Pour déployer le backend :

- configurer les variables d'environnement
- utiliser une base PostgreSQL de production
- désactiver les configurations de développement
- configurer les CORS pour le frontend
- construire l'image Docker

Lancement de production :

```bash
docker compose up -d --build
```

---

## Objectif du projet

L'objectif du projet est de proposer une API permettant de centraliser des informations produits et de générer des exports adaptés à différents canaux de diffusion.

---

## Auteur

Projet réalisé dans le cadre d'un stage