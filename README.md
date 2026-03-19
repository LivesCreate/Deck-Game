# Deck

Abstract minimalist trading card game.

## v2.0.0 — Multiplayer Update

### New Features
- **Firebase Authentication** — sign up / log in with email and password
- **Username System** — pick a unique username visible to other players
- **Cloud Saves** — your collection, decks, and stats sync across devices
- **Friend System** — search users by name, send/accept friend requests
- **Battle Requests** — challenge friends to battles with toast notifications
- **Social Tab** — dedicated screen for friends, requests, and search
- **Offline Support** — game works without internet (multiplayer needs connection)

### Existing Features
- 40 cards across 4 rarities
- 10 unique abilities
- Pack opening with animated reveals
- Deck builder (15 cards, max 2 copies)
- Turn-based AI battles with mana system
- Recall mechanic (pull cards back for 1 mana)
- 10 AI difficulty tiers
- Card collection with filtering
- Toast notifications
- Dark mode UI
- PWA with offline caching

## Firebase Setup (Required for Multiplayer)

1. Go to https://console.firebase.google.com
2. Create a new project (name it anything)
3. Go to Authentication → Sign-in method → Enable Email/Password
4. Go to Firestore Database → Create database → Start in test mode
5. Go to Project Settings → Your apps → Add web app
6. Copy your config object
7. Open `game.js` and find `YOUR_API_KEY` — replace the whole config block with yours

## Deployment
Push all files to your GitHub repo root. Enable Pages in Settings.

## Version Bumping
1. `sw.js` → CACHE_NAME
2. `version.txt`
