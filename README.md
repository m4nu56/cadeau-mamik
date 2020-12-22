Si vous aussi vous vous trouvé loin de vos proches et complètement à la bourre pour offrir des cadeaux cette app est faite pour vous: 

![public/gift-card.gif](public/gift-card.gif)

## Utilisation

Accéder à la page `/create` pour saisir les paramètres de la carte cadeau et copier l'URL qui est généré pour l'envoyer à vos proches. 

Ou sinon vous pouvez adapter le contenu du bouton et du cadeau avec vos propres paramètres:

- `recipient`: Le nom du destinataire du cadeau qui sera affiché dans le bouton
- `header`: La première ligne du cadeau
- `headline`: Le mot clé le plus important du cadeau qui est surligné

Exemple: `https://mamik.vercel.app?header=3 séances de&headline=couture&recipient=Maman`

## Stack

The project runs with [nextJS](https://nextjs.org), and the Postgres database is hosted on [Heroku](https://heroku.com). 

## Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
