## PV247 - TEDx event manager

## Team

- 485281 - Marek Macho

- 492782 - Marek Seďa

- 492966 - Magdaléna Lišková

---

## Deployed webpage

Deployed webpage runs on [link](https://pv-247-te-dx-event-manager.vercel.app/)

## Project scope

For Unauthenticated Users:

- Overview of the entire event program, including pre-event details.
- Detailed information on program items and individual speakers.
- Real-time display of the currently ongoing program item during the event.

Admin Access:
- Editing of the program, including adding and modifying program items.
- Addition and editing of speakers for the event.

## Technologies

- Next for front-end & back-end
- NextAuth using Discord provider for authentication
- Cloudinary for storing images
- Postgres for database
- Vercel for deployment

## How to run
### Database setup
For local testing you need to setup Postgresql database instance and provide these environment variables in `.env`.
```
POSTGRES_URL
POSTGRES_USER
POSTGRES_HOST
POSTGRES_PASSWORD
POSTGRES_DATABASE
POSTGRES_PRISMA_URL
```

### Discord authentication
To use discord authentication properly you need create new application in developer portal and provide these environment variables in `.env`. You can follow instructions [here](https://next-auth.js.org/providers/discord).

```
DISCORD_CLIENT_ID
DISCORD_CLIENT_SECRET
```

Also you need to setup NextAuth with providing these environment variables:
```
NEXTAUTH_SECRET
NEXTAUTH_URL
```

### Run using npm

- Install modules:
```
npm i
```
- Run application on local host
```
npm run dev
```
