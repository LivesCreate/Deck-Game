# Deck

Abstract minimalist trading card game built with React.

## Features (Phase 1)

* 40 cards across 4 rarities (Common, Rare, Epic, Legendary)
* 10 unique abilities (Rush, Shield, Drain, Blast, Grow, Taunt, Strike, Echo, Regen)
* Pack opening system with animated reveals
* Deck builder (15 cards per deck, max 2 copies each)
* Turn-based Hearthstone-style AI battles with mana system
* Recall mechanic — pull cards back from the board mid-battle (costs 1 mana)
* 10 AI difficulty tiers with progression
* Card collection gallery with rarity filtering
* Toast notification system
* Dark mode UI
* PWA with offline support
* Persistent save via localStorage

```
index.html      — Main page (React CDN, require shim, mount)
game.js         — Compiled game code (pre-compiled JSX)
sw.js           — Service worker for offline caching
manifest.json   — PWA manifest
version.txt     — Current version
icon-192.png    — App icon 192x192
icon-512.png    — App icon 512x512
```
## Tech Stack

* React 18 (CDN)
* Pre-compiled JSX (esbuild)
* Pure CSS (no framework)
* localStorage for persistence
* Service Worker for offline/PWA

## Coming in Phase 2

* Firebase authentication
* Online multiplayer battles
* Friend system with username search
* Real-time battle requests
* Cloud-saved collections

