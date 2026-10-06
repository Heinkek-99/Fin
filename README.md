# Fin

Maquette d'interface pour un service de paiement et de tableau de bord. Le dépôt contient
uniquement le front statique, servi par nginx.

## Contenu

- `code/index.html` : page de connexion
- `code/dashboard.html` et `code/dashboards.html` : écrans de tableau de bord
- `code/payment.html` : écran de paiement
- `code/js/script.js` : appel à un point d'API externe
- `code/manifest.json` et `code/serviceWorker.js` : fonctionnement hors ligne
- `docker-compose.yml` : service nginx exposé sur le port 80

## Lancer le projet

```bash
docker compose up
```

Puis ouvrir http://localhost.

## État

Maquette statique. `code/js/script.js` appelle un point d'API externe qui n'est plus actif : les
pages s'affichent, les données ne se chargent pas. Ce dépôt sert de référence d'interface, pas
d'application en production.
