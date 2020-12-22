Si vous aussi vous vous trouvé loin de vos proches et complètement à la bourre pour offrir des cadeaux cette app est faite pour vous: 

![public/gift-card.gif](public/gift-card.gif)

## Utilisation

Accéder à la page [/create](https://gift-card.app/create) pour saisir les paramètres de la carte cadeau et copier l'URL qui est généré pour l'envoyer à vos proches. 

Ou sinon vous pouvez adapter le contenu du bouton et du cadeau avec vos propres paramètres:

- `recipient`: Le nom du destinataire du cadeau qui sera affiché dans le bouton
- `header`: La première ligne du cadeau
- `headline`: Le mot clé le plus important du cadeau qui est surligné

Exemple: [https://gift-card.app/?header=3%20s%C3%A9ances%20de&headline=couture&recipient=Maman](https://gift-card.app/?`header`=3 séances&`headline`=couture&`recipient`=Maman)

## Stack

The project runs with [nextJS](https://nextjs.org), and the Postgres database is hosted on [Heroku](https://heroku.com). 

No personal information is collected. 

## Installation

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
