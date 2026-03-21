var CardGameModule = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // game.jsx
  var game_exports = {};
  __export(game_exports, {
    default: () => CardGame
  });
  var import_react = __require("react");
  var VERSION = "2.4.0";
  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBEgpJaRGN-Q8EnsZ-gwXUz7ySQJpBz0mw",
    authDomain: "deck-d04c7.firebaseapp.com",
    projectId: "deck-d04c7",
    storageBucket: "deck-d04c7.firebasestorage.app",
    messagingSenderId: "400869382769",
    appId: "1:400869382769:web:a16c668f5aea36a20799d0"
  };
  function getFirebase() {
    if (!window.firebase) return null;
    if (!window._fbApp) {
      try {
        window._fbApp = window.firebase.initializeApp(FIREBASE_CONFIG);
      } catch (e) {
        try {
          window._fbApp = window.firebase.app();
        } catch (e2) {
          return null;
        }
      }
    }
    return window.firebase;
  }
  function getAuth() {
    const fb = getFirebase();
    return fb ? fb.auth() : null;
  }
  function getDb() {
    const fb = getFirebase();
    return fb ? fb.firestore() : null;
  }
  var SHAPES = {
    triangle: (c) => /* @__PURE__ */ React.createElement("polygon", { points: "16,2 30,30 2,30", fill: c }),
    circle: (c) => /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "16", r: "14", fill: c }),
    square: (c) => /* @__PURE__ */ React.createElement("rect", { x: "3", y: "3", width: "26", height: "26", rx: "3", fill: c }),
    diamond: (c) => /* @__PURE__ */ React.createElement("polygon", { points: "16,1 31,16 16,31 1,16", fill: c }),
    hexagon: (c) => /* @__PURE__ */ React.createElement("polygon", { points: "8,2 24,2 31,16 24,30 8,30 1,16", fill: c }),
    star: (c) => /* @__PURE__ */ React.createElement("polygon", { points: "16,1 20,11 31,11 22,18 25,29 16,22 7,29 10,18 1,11 12,11", fill: c }),
    cross: (c) => /* @__PURE__ */ React.createElement("path", { d: "M11,2h10v9h9v10h-9v9h-10v-9h-9v-10h9z", fill: c }),
    pentagon: (c) => /* @__PURE__ */ React.createElement("polygon", { points: "16,2 30,12 25,28 7,28 2,12", fill: c })
  };
  var RARITIES = {
    common: { label: "Common", color: "#888780", darkBg: "#2C2C2A" },
    rare: { label: "Rare", color: "#1D9E75", darkBg: "#085041" },
    epic: { label: "Epic", color: "#534AB7", darkBg: "#26215C" },
    legendary: { label: "Legendary", color: "#BA7517", darkBg: "#412402" }
  };
  var ABILITIES = [
    { id: "none", name: "None", desc: "" },
    { id: "rush", name: "Rush", desc: "Can attack immediately" },
    { id: "shield", name: "Shield", desc: "Blocks first hit" },
    { id: "drain", name: "Drain", desc: "Heals you for damage dealt" },
    { id: "blast", name: "Blast", desc: "Deals 2 damage to all enemies on play" },
    { id: "grow", name: "Grow", desc: "+1/+1 each turn" },
    { id: "taunt", name: "Taunt", desc: "Enemies must attack this first" },
    { id: "strike", name: "Strike", desc: "Deals 3 damage to a random enemy on play" },
    { id: "echo", name: "Echo", desc: "Draw a card on play" },
    { id: "regen", name: "Regen", desc: "Heals 1 HP at end of turn" }
  ];
  var ALL_CARDS = [
    { id: 1, name: "Shard", cost: 1, atk: 2, hp: 1, rarity: "common", shape: "triangle", abilityId: "none" },
    { id: 2, name: "Dot", cost: 1, atk: 1, hp: 2, rarity: "common", shape: "circle", abilityId: "none" },
    { id: 3, name: "Block", cost: 1, atk: 1, hp: 3, rarity: "common", shape: "square", abilityId: "taunt" },
    { id: 4, name: "Dash", cost: 1, atk: 3, hp: 1, rarity: "common", shape: "diamond", abilityId: "rush" },
    { id: 5, name: "Pebble", cost: 2, atk: 2, hp: 2, rarity: "common", shape: "circle", abilityId: "none" },
    { id: 6, name: "Wedge", cost: 2, atk: 3, hp: 2, rarity: "common", shape: "triangle", abilityId: "none" },
    { id: 7, name: "Tile", cost: 2, atk: 2, hp: 3, rarity: "common", shape: "square", abilityId: "none" },
    { id: 8, name: "Fang", cost: 2, atk: 3, hp: 1, rarity: "common", shape: "diamond", abilityId: "rush" },
    { id: 9, name: "Chip", cost: 2, atk: 1, hp: 4, rarity: "common", shape: "hexagon", abilityId: "taunt" },
    { id: 10, name: "Arc", cost: 3, atk: 3, hp: 3, rarity: "common", shape: "pentagon", abilityId: "none" },
    { id: 11, name: "Spike", cost: 3, atk: 4, hp: 2, rarity: "rare", shape: "triangle", abilityId: "rush" },
    { id: 12, name: "Orb", cost: 3, atk: 2, hp: 5, rarity: "rare", shape: "circle", abilityId: "shield" },
    { id: 13, name: "Cube", cost: 3, atk: 3, hp: 4, rarity: "rare", shape: "square", abilityId: "taunt" },
    { id: 14, name: "Bolt", cost: 3, atk: 4, hp: 3, rarity: "common", shape: "diamond", abilityId: "none" },
    { id: 15, name: "Ring", cost: 4, atk: 3, hp: 4, rarity: "common", shape: "circle", abilityId: "none" },
    { id: 16, name: "Facet", cost: 4, atk: 4, hp: 4, rarity: "rare", shape: "hexagon", abilityId: "none" },
    { id: 17, name: "Blade", cost: 4, atk: 5, hp: 3, rarity: "rare", shape: "diamond", abilityId: "rush" },
    { id: 18, name: "Dome", cost: 4, atk: 2, hp: 6, rarity: "rare", shape: "pentagon", abilityId: "shield" },
    { id: 19, name: "Pulse", cost: 4, atk: 4, hp: 3, rarity: "rare", shape: "star", abilityId: "drain" },
    { id: 20, name: "Hex", cost: 4, atk: 3, hp: 5, rarity: "common", shape: "hexagon", abilityId: "taunt" },
    { id: 21, name: "Prism", cost: 5, atk: 5, hp: 4, rarity: "epic", shape: "hexagon", abilityId: "blast" },
    { id: 22, name: "Spire", cost: 5, atk: 6, hp: 3, rarity: "epic", shape: "triangle", abilityId: "rush" },
    { id: 23, name: "Aegis", cost: 5, atk: 3, hp: 7, rarity: "epic", shape: "square", abilityId: "shield" },
    { id: 24, name: "Vortex", cost: 5, atk: 5, hp: 5, rarity: "rare", shape: "star", abilityId: "none" },
    { id: 25, name: "Monolith", cost: 5, atk: 4, hp: 6, rarity: "rare", shape: "pentagon", abilityId: "taunt" },
    { id: 26, name: "Flux", cost: 6, atk: 6, hp: 5, rarity: "epic", shape: "star", abilityId: "drain" },
    { id: 27, name: "Void", cost: 6, atk: 5, hp: 6, rarity: "epic", shape: "circle", abilityId: "blast" },
    { id: 28, name: "Citadel", cost: 6, atk: 4, hp: 8, rarity: "epic", shape: "square", abilityId: "taunt" },
    { id: 29, name: "Zenith", cost: 7, atk: 7, hp: 6, rarity: "epic", shape: "diamond", abilityId: "strike" },
    { id: 30, name: "Titan", cost: 7, atk: 6, hp: 7, rarity: "epic", shape: "pentagon", abilityId: "grow" },
    { id: 31, name: "Nova", cost: 7, atk: 8, hp: 5, rarity: "legendary", shape: "star", abilityId: "blast" },
    { id: 32, name: "Nexus", cost: 8, atk: 7, hp: 8, rarity: "legendary", shape: "hexagon", abilityId: "echo" },
    { id: 33, name: "Omega", cost: 8, atk: 8, hp: 7, rarity: "legendary", shape: "diamond", abilityId: "drain" },
    { id: 34, name: "Eclipse", cost: 9, atk: 9, hp: 8, rarity: "legendary", shape: "circle", abilityId: "shield" },
    { id: 35, name: "Apex", cost: 10, atk: 10, hp: 10, rarity: "legendary", shape: "star", abilityId: "rush" },
    { id: 36, name: "Sliver", cost: 1, atk: 2, hp: 2, rarity: "common", shape: "triangle", abilityId: "none" },
    { id: 37, name: "Glyph", cost: 3, atk: 3, hp: 3, rarity: "rare", shape: "cross", abilityId: "echo" },
    { id: 38, name: "Sigil", cost: 5, atk: 4, hp: 5, rarity: "epic", shape: "cross", abilityId: "regen" },
    { id: 39, name: "Rune", cost: 6, atk: 5, hp: 5, rarity: "epic", shape: "cross", abilityId: "strike" },
    { id: 40, name: "Axiom", cost: 9, atk: 8, hp: 9, rarity: "legendary", shape: "cross", abilityId: "grow" },
    // Spell cards (no atk/hp, instant effect)
    { id: 41, name: "Zap", cost: 1, atk: 0, hp: 0, rarity: "common", shape: "diamond", abilityId: "none", isSpell: true, spellEffect: "deal2" },
    { id: 42, name: "Mend", cost: 1, atk: 0, hp: 0, rarity: "common", shape: "circle", abilityId: "none", isSpell: true, spellEffect: "heal3" },
    { id: 43, name: "Surge", cost: 2, atk: 0, hp: 0, rarity: "common", shape: "star", abilityId: "none", isSpell: true, spellEffect: "draw2" },
    { id: 44, name: "Shatter", cost: 3, atk: 0, hp: 0, rarity: "rare", shape: "triangle", abilityId: "none", isSpell: true, spellEffect: "deal4" },
    { id: 45, name: "Fortify", cost: 2, atk: 0, hp: 0, rarity: "rare", shape: "square", abilityId: "none", isSpell: true, spellEffect: "buff2" },
    { id: 46, name: "Ignite", cost: 4, atk: 0, hp: 0, rarity: "rare", shape: "pentagon", abilityId: "none", isSpell: true, spellEffect: "aoe3" },
    { id: 47, name: "Siphon", cost: 3, atk: 0, hp: 0, rarity: "epic", shape: "hexagon", abilityId: "none", isSpell: true, spellEffect: "drain3" },
    { id: 48, name: "Rift", cost: 5, atk: 0, hp: 0, rarity: "epic", shape: "cross", abilityId: "none", isSpell: true, spellEffect: "destroy1" },
    { id: 49, name: "Genesis", cost: 6, atk: 0, hp: 0, rarity: "epic", shape: "star", abilityId: "none", isSpell: true, spellEffect: "healfull" },
    { id: 50, name: "Oblivion", cost: 8, atk: 0, hp: 0, rarity: "legendary", shape: "circle", abilityId: "none", isSpell: true, spellEffect: "destroyall" }
  ];
  var SPELL_EFFECTS = {
    deal2: { desc: "Deal 2 damage to a random enemy", fn: (b) => {
      if (b.aiBoard.length > 0) {
        const i = Math.floor(Math.random() * b.aiBoard.length);
        b.aiBoard[i] = { ...b.aiBoard[i], currentHp: b.aiBoard[i].currentHp - 2 };
        b.aiBoard = b.aiBoard.filter((c) => c.currentHp > 0);
        return "Zap hits for 2!";
      } else {
        b.aiHp -= 2;
        return "Zap hits face for 2!";
      }
    } },
    heal3: { desc: "Heal 3 HP", fn: (b) => {
      b.playerHp = Math.min(STARTING_HP, b.playerHp + 3);
      return "Healed 3 HP!";
    } },
    draw2: { desc: "Draw 2 cards", fn: (b) => {
      let d = 0;
      for (let i = 0; i < 2; i++) {
        if (b.playerDeck.length > 0) {
          b.playerHand.push(b.playerDeck.shift());
          d++;
        }
      }
      return "Drew " + d + " cards!";
    } },
    deal4: { desc: "Deal 4 damage to a random enemy", fn: (b) => {
      if (b.aiBoard.length > 0) {
        const i = Math.floor(Math.random() * b.aiBoard.length);
        b.aiBoard[i] = { ...b.aiBoard[i], currentHp: b.aiBoard[i].currentHp - 4 };
        b.aiBoard = b.aiBoard.filter((c) => c.currentHp > 0);
        return "Shatter hits for 4!";
      } else {
        b.aiHp -= 4;
        return "Shatter hits face for 4!";
      }
    } },
    buff2: { desc: "+2/+2 to all your minions", fn: (b) => {
      b.playerBoard = b.playerBoard.map((c) => ({ ...c, currentAtk: c.currentAtk + 2, currentHp: c.currentHp + 2 }));
      return "All minions get +2/+2!";
    } },
    aoe3: { desc: "Deal 3 damage to ALL enemies", fn: (b) => {
      b.aiBoard = b.aiBoard.map((c) => c.shielded ? { ...c, shielded: false } : { ...c, currentHp: c.currentHp - 3 }).filter((c) => c.currentHp > 0);
      return "Ignite burns all for 3!";
    } },
    drain3: { desc: "Deal 3 to random enemy, heal 3", fn: (b) => {
      if (b.aiBoard.length > 0) {
        const i = Math.floor(Math.random() * b.aiBoard.length);
        b.aiBoard[i] = { ...b.aiBoard[i], currentHp: b.aiBoard[i].currentHp - 3 };
        b.aiBoard = b.aiBoard.filter((c) => c.currentHp > 0);
      } else {
        b.aiHp -= 3;
      }
      b.playerHp = Math.min(STARTING_HP, b.playerHp + 3);
      return "Siphon: 3 damage + 3 heal!";
    } },
    destroy1: { desc: "Destroy a random enemy minion", fn: (b) => {
      if (b.aiBoard.length > 0) {
        const i = Math.floor(Math.random() * b.aiBoard.length);
        const name = b.aiBoard[i].name;
        b.aiBoard.splice(i, 1);
        return "Rift destroys " + name + "!";
      }
      return "No targets!";
    } },
    healfull: { desc: "Fully heal your HP", fn: (b) => {
      b.playerHp = STARTING_HP;
      return "Fully healed!";
    } },
    destroyall: { desc: "Destroy ALL minions on both sides", fn: (b) => {
      b.aiBoard = [];
      b.playerBoard = [];
      return "Oblivion wipes the board!";
    } }
  };
  var RANKS = [{ name: "Bronze", minWins: 0, color: "#cd7f32" }, { name: "Silver", minWins: 10, color: "#c0c0c0" }, { name: "Gold", minWins: 25, color: "#ffd700" }, { name: "Platinum", minWins: 50, color: "#e5e4e2" }, { name: "Diamond", minWins: 100, color: "#b9f2ff" }];
  function getRank(wins) {
    let r = RANKS[0];
    for (const rank of RANKS) {
      if (wins >= rank.minWins) r = rank;
    }
    return r;
  }
  var CRAFT_COSTS = { common: 50, rare: 150, epic: 400, legendary: 1000 };
  var QUEST_TEMPLATES = [
    { type: "win_battles", desc: "Win {n} battles", targets: [1, 2, 3], reward: [30, 60, 100] },
    { type: "play_cards", desc: "Play {n} cards", targets: [5, 10, 15], reward: [25, 50, 80] },
    { type: "play_spells", desc: "Cast {n} spell cards", targets: [2, 3, 5], reward: [30, 60, 100] },
    { type: "deal_damage", desc: "Deal {n} face damage", targets: [10, 20, 30], reward: [30, 60, 100] },
    { type: "kill_minions", desc: "Destroy {n} enemy minions", targets: [3, 5, 8], reward: [25, 50, 80] },
    { type: "play_rares", desc: "Play {n} rare+ cards", targets: [2, 3, 5], reward: [30, 60, 100] },
    { type: "open_packs", desc: "Open {n} packs", targets: [1, 2, 3], reward: [25, 50, 80] },
    { type: "use_recall", desc: "Recall {n} cards", targets: [1, 2, 3], reward: [20, 40, 70] }
  ];
  function getDayKey() { return new Date().toISOString().slice(0, 10); }
  function generateDailyQuests(dayKey) {
    var seed = 0; for (var i = 0; i < dayKey.length; i++) seed = ((seed << 5) - seed + dayKey.charCodeAt(i)) | 0;
    var rng = function() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
    var indices = []; while (indices.length < 3) { var idx = Math.floor(rng() * QUEST_TEMPLATES.length); if (!indices.includes(idx)) indices.push(idx); }
    return indices.map(function(qi) {
      var t = QUEST_TEMPLATES[qi]; var di = Math.floor(rng() * t.targets.length);
      return { type: t.type, desc: t.desc.replace("{n}", t.targets[di]), target: t.targets[di], reward: t.reward[di], progress: 0, claimed: false };
    });
  }
  var getAbility = (id) => ABILITIES.find((a) => a.id === id) || ABILITIES[0];
  var uid = () => Math.random().toString(36).slice(2, 10);
  var shuffle = (a) => {
    const b = [...a];
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  };
  var pick = (a) => a[Math.floor(Math.random() * a.length)];
  var STARTER_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 20, 36];
  var DECK_SIZE = 15;
  var HAND_SIZE = 4;
  var MAX_BOARD = 5;
  var STARTING_HP = 20;
  var MAX_MANA = 10;
  function makeInitialState() {
    return { coins: 500, collection: STARTER_IDS.map((id) => id), decks: [{ id: "starter", name: "Starter Deck", cardIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 20, 36, 5] }], activeDeckId: "starter", stats: { wins: 0, losses: 0, totalGames: 0 }, aiTier: 1, questDay: "", quests: [] };
  }
  function rollRarity() {
    const r = Math.random();
    if (r < 0.03) return "legendary";
    if (r < 0.13) return "epic";
    if (r < 0.38) return "rare";
    return "common";
  }
  function openPack() {
    const cards = [];
    for (let i = 0; i < 5; i++) {
      const rarity = i === 4 ? Math.random() < 0.5 ? "rare" : rollRarity() : rollRarity();
      const pool = ALL_CARDS.filter((c) => c.rarity === rarity);
      cards.push({ ...pick(pool), uid: uid() });
    }
    return cards;
  }
  function buildAIDeck(tier) {
    const mx = Math.min(4 + tier, 10);
    const pool = ALL_CARDS.filter((c) => c.cost <= mx);
    const d = [];
    for (let i = 0; i < DECK_SIZE; i++) d.push({ ...pick(pool), uid: uid() });
    return d;
  }
  function createBattleCard(cd) {
    return { ...cd, uid: uid(), currentHp: cd.hp, currentAtk: cd.atk, hasAttacked: false, canAttack: cd.abilityId === "rush", shielded: cd.abilityId === "shield", justPlayed: true };
  }
  function initBattle(ids, tier) {
    const p = shuffle(ids.map((id) => {
      const d = ALL_CARDS.find((c) => c.id === id);
      return d ? { ...d, uid: uid() } : { ...ALL_CARDS[0], uid: uid() };
    }));
    const a = buildAIDeck(tier);
    const ph = p.splice(0, HAND_SIZE);
    const ah = a.splice(0, HAND_SIZE);
    return { playerHp: STARTING_HP, aiHp: STARTING_HP, playerMana: 1, playerMaxMana: 1, aiMana: 1, aiMaxMana: 1, playerBoard: [], aiBoard: [], playerHand: ph, aiHand: ah, playerDeck: p, aiDeck: a, turn: 1, isPlayerTurn: true, phase: "playing", log: ["Battle started! Your turn."] };
  }
  var toastId = 0;
  function CardGame() {
    const [screen, setScreen] = (0, import_react.useState)("home");
    const [game, setGame] = (0, import_react.useState)(() => {
      try {
        const s = localStorage.getItem("deck_save");
        if (s) return JSON.parse(s);
      } catch (e) {
      }
      return makeInitialState();
    });
    const [battle, setBattle] = (0, import_react.useState)(null);
    const [toasts, setToasts] = (0, import_react.useState)([]);
    const [packCards, setPackCards] = (0, import_react.useState)(null);
    const [revealedCards, setRevealedCards] = (0, import_react.useState)([]);
    const [editDeckId, setEditDeckId] = (0, import_react.useState)(null);
    const [deckBuilderCards, setDeckBuilderCards] = (0, import_react.useState)([]);
    const [deckName, setDeckName] = (0, import_react.useState)("");
    const [user, setUser] = (0, import_react.useState)(null);
    const [username, setUsername] = (0, import_react.useState)("");
    const [authScreen, setAuthScreen] = (0, import_react.useState)(null);
    const [authEmail, setAuthEmail] = (0, import_react.useState)("");
    const [authPass, setAuthPass] = (0, import_react.useState)("");
    const [authUsername, setAuthUsername] = (0, import_react.useState)("");
    const [authLoading, setAuthLoading] = (0, import_react.useState)(false);
    const [authError, setAuthError] = (0, import_react.useState)("");
    const [friends, setFriends] = (0, import_react.useState)([]);
    const [friendRequests, setFriendRequests] = (0, import_react.useState)([]);
    const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
    const [searchResults, setSearchResults] = (0, import_react.useState)([]);
    const [battleRequests, setBattleRequests] = (0, import_react.useState)([]);
    const unsubRefs = (0, import_react.useRef)([]);
    (0, import_react.useEffect)(() => {
      try {
        localStorage.setItem("deck_save", JSON.stringify(game));
      } catch (e) {
      }
    }, [game]);
    (0, import_react.useEffect)(() => {
      const handlePop = () => {
        if (authScreen) {
          setAuthScreen(null);
          return;
        }
        if (screen === "battle" && battle) {
          setBattle(null);
          setScreen("home");
          return;
        }
        if (screen === "deckbuilder") {
          setScreen("decks");
          return;
        }
        if (screen !== "home") {
          setScreen("home");
          return;
        }
      };
      window.addEventListener("popstate", handlePop);
      return () => window.removeEventListener("popstate", handlePop);
    }, [screen, authScreen, battle]);
    (0, import_react.useEffect)(() => {
      if (screen !== "home" || authScreen) {
        window.history.pushState({ screen, authScreen }, "");
      }
    }, [screen, authScreen]);
    const toast = (0, import_react.useCallback)((msg, type = "info") => {
      const id = ++toastId;
      setToasts((t) => [...t, { id, msg, type }]);
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3e3);
    }, []);
    (0, import_react.useEffect)(() => {
      const today = getDayKey();
      if (game.questDay !== today) {
        setGame((g) => ({ ...g, questDay: today, quests: generateDailyQuests(today) }));
      }
    }, []);
    const updateQuestProgress = (0, import_react.useCallback)((type, amount) => {
      setGame((g) => {
        if (!g.quests || g.quests.length === 0) return g;
        const nq = g.quests.map((q) => q.type === type && !q.claimed ? { ...q, progress: Math.min(q.target, q.progress + amount) } : q);
        return { ...g, quests: nq };
      });
    }, []);
    const claimQuest = (0, import_react.useCallback)((qi) => {
      setGame((g) => {
        const q = g.quests[qi];
        if (!q || q.claimed || q.progress < q.target) return g;
        const nq = [...g.quests]; nq[qi] = { ...nq[qi], claimed: true };
        return { ...g, quests: nq, coins: g.coins + q.reward };
      });
      toast("Quest reward claimed!", "success");
    }, [toast]);
    (0, import_react.useEffect)(() => {
      const auth = getAuth();
      if (!auth) return;
      auth.getRedirectResult().then(async (result) => {
        if (result && result.user) {
          const db = getDb();
          if (db) {
            const doc = await db.collection("users").doc(result.user.uid).get();
            if (!doc.exists) {
              const uname = result.user.displayName || "Player" + Math.floor(Math.random() * 9999);
              await db.collection("users").doc(result.user.uid).set({ username: uname, usernameLC: uname.toLowerCase(), gameState: game, createdAt: window.firebase.firestore.FieldValue.serverTimestamp() });
            }
          }
          setAuthScreen(null);
        }
      }).catch(() => {
      });
      const unsub = auth.onAuthStateChanged(async (u) => {
        setUser(u);
        if (u) {
          const db = getDb();
          if (db) {
            const doc = await db.collection("users").doc(u.uid).get();
            if (doc.exists) {
              const d = doc.data();
              setUsername(d.username || "");
              if (d.gameState && d.gameState.stats && d.gameState.stats.totalGames > (game.stats?.totalGames || 0)) setGame(d.gameState);
            }
          }
          ;
          setupListeners(u.uid);
        } else {
          setUsername("");
          cleanupListeners();
        }
      });
      return () => unsub();
    }, []);
    (0, import_react.useEffect)(() => {
      if (!user) return;
      const db = getDb();
      if (!db) return;
      const t = setTimeout(() => {
        db.collection("users").doc(user.uid).set({ gameState: game }, { merge: true }).catch(() => {
        });
      }, 2e3);
      return () => clearTimeout(t);
    }, [game, user]);
    function setupListeners(myUid) {
      cleanupListeners();
      const db = getDb();
      if (!db) return;
      const u1 = db.collection("users").doc(myUid).collection("friends").onSnapshot((snap) => {
        const f = [];
        const r = [];
        snap.forEach((doc) => {
          const d = { id: doc.id, ...doc.data() };
          if (d.status === "accepted") f.push(d);
          else if (d.status === "pending" && d.sentBy !== myUid) r.push(d);
        });
        setFriends(f);
        setFriendRequests(r);
      });
      const u2 = db.collection("users").doc(myUid).collection("battleRequests").onSnapshot((snap) => {
        const reqs = [];
        snap.forEach((doc) => reqs.push({ id: doc.id, ...doc.data() }));
        setBattleRequests(reqs);
        reqs.forEach((req) => {
          if (req.status === "pending") toast(req.fromUsername + " wants to battle!", "info");
        });
      });
      unsubRefs.current = [u1, u2];
    }
    function cleanupListeners() {
      unsubRefs.current.forEach((u) => u && u());
      unsubRefs.current = [];
    }
    const handleRegister = (0, import_react.useCallback)(async () => {
      const auth = getAuth();
      const db = getDb();
      if (!auth || !db) {
        setAuthError("Firebase not loaded.");
        return;
      }
      if (!authEmail || !authPass || !authUsername) {
        setAuthError("Fill in all fields.");
        return;
      }
      if (authUsername.length < 3 || authUsername.length > 16) {
        setAuthError("Username 3-16 chars.");
        return;
      }
      if (!/^[a-zA-Z0-9_]+$/.test(authUsername)) {
        setAuthError("Letters, numbers, underscores only.");
        return;
      }
      setAuthLoading(true);
      setAuthError("");
      try {
        const ex = await db.collection("users").where("usernameLC", "==", authUsername.toLowerCase()).get();
        if (!ex.empty) {
          setAuthError("Username taken.");
          setAuthLoading(false);
          return;
        }
        const cred = await auth.createUserWithEmailAndPassword(authEmail, authPass);
        await db.collection("users").doc(cred.user.uid).set({ username: authUsername, usernameLC: authUsername.toLowerCase(), gameState: game, createdAt: window.firebase.firestore.FieldValue.serverTimestamp() });
        setAuthScreen(null);
        toast("Welcome, " + authUsername + "!", "success");
      } catch (e) {
        setAuthError(e.message);
      }
      setAuthLoading(false);
    }, [authEmail, authPass, authUsername, game, toast]);
    const handleLogin = (0, import_react.useCallback)(async () => {
      const auth = getAuth();
      if (!auth) {
        setAuthError("Firebase not loaded.");
        return;
      }
      if (!authEmail || !authPass) {
        setAuthError("Fill in all fields.");
        return;
      }
      setAuthLoading(true);
      setAuthError("");
      try {
        await auth.signInWithEmailAndPassword(authEmail, authPass);
        setAuthScreen(null);
        toast("Logged in!", "success");
      } catch (e) {
        setAuthError(e.message);
      }
      setAuthLoading(false);
    }, [authEmail, authPass, toast]);
    const handleLogout = (0, import_react.useCallback)(async () => {
      const auth = getAuth();
      if (auth) await auth.signOut();
      toast("Logged out.", "info");
      setScreen("home");
    }, [toast]);
    const handleGoogleLogin = (0, import_react.useCallback)(async () => {
      const auth = getAuth();
      const db = getDb();
      if (!auth || !db) {
        setAuthError("Firebase not loaded.");
        return;
      }
      setAuthLoading(true);
      setAuthError("");
      try {
        const provider = new window.firebase.auth.GoogleAuthProvider();
        await auth.signInWithRedirect(provider);
      } catch (e) {
        if (e.code !== "auth/popup-closed-by-user" && e.code !== "auth/cancelled-popup-request" && e.code !== "auth/redirect-cancelled-by-user") setAuthError(e.message || "Google login failed.");
      }
      setAuthLoading(false);
    }, [game, toast]);
    const handleChangeUsername = (0, import_react.useCallback)(async (newName) => {
      const db = getDb();
      if (!db || !user) return;
      if (newName.length < 3 || newName.length > 16) {
        toast("Username 3-16 chars.", "error");
        return;
      }
      if (!/^[a-zA-Z0-9_]+$/.test(newName)) {
        toast("Letters, numbers, underscores only.", "error");
        return;
      }
      try {
        const ex = await db.collection("users").where("usernameLC", "==", newName.toLowerCase()).get();
        if (!ex.empty) {
          toast("Username taken.", "error");
          return;
        }
        await db.collection("users").doc(user.uid).update({ username: newName, usernameLC: newName.toLowerCase() });
        setUsername(newName);
        toast("Username changed!", "success");
      } catch (e) {
        toast("Failed to change username.", "error");
      }
    }, [user, toast]);
    const handleChangePassword = (0, import_react.useCallback)(async (newPass) => {
      const auth = getAuth();
      if (!auth || !user) return;
      if (newPass.length < 6) {
        toast("Password must be at least 6 characters.", "error");
        return;
      }
      try {
        await user.updatePassword(newPass);
        toast("Password changed!", "success");
      } catch (e) {
        if (e.code === "auth/requires-recent-login") {
          toast("Please log out and log back in first, then try again.", "error");
        } else toast(e.message || "Failed.", "error");
      }
    }, [user, toast]);
    const handleDeleteAccount = (0, import_react.useCallback)(async () => {
      const auth = getAuth();
      const db = getDb();
      if (!auth || !db || !user) return;
      try {
        await db.collection("users").doc(user.uid).delete();
        await user.delete();
        toast("Account deleted.", "info");
        setScreen("home");
      } catch (e) {
        if (e.code === "auth/requires-recent-login") {
          toast("Please log out and log back in first, then try again.", "error");
        } else toast(e.message || "Failed.", "error");
      }
    }, [user, toast]);
    const handleResetPassword = (0, import_react.useCallback)(async () => {
      const auth = getAuth();
      if (!auth || !user?.email) return;
      try {
        await auth.sendPasswordResetEmail(user.email);
        toast("Reset email sent!", "success");
      } catch (e) {
        toast("Failed.", "error");
      }
    }, [user, toast]);
    const searchUsers = (0, import_react.useCallback)(async () => {
      const db = getDb();
      if (!db || !searchQuery.trim()) return;
      try {
        const snap = await db.collection("users").where("usernameLC", ">=", searchQuery.toLowerCase()).where("usernameLC", "<=", searchQuery.toLowerCase() + "\uF8FF").limit(10).get();
        const r = [];
        snap.forEach((doc) => {
          if (doc.id !== user?.uid) r.push({ uid: doc.id, ...doc.data() });
        });
        setSearchResults(r);
      } catch (e) {
        toast("Search failed.", "error");
      }
    }, [searchQuery, user, toast]);
    const sendFriendRequest = (0, import_react.useCallback)(async (tUid, tName) => {
      const db = getDb();
      if (!db || !user) return;
      try {
        await db.collection("users").doc(user.uid).collection("friends").doc(tUid).set({ username: tName, status: "pending", sentBy: user.uid, timestamp: window.firebase.firestore.FieldValue.serverTimestamp() });
        await db.collection("users").doc(tUid).collection("friends").doc(user.uid).set({ username, status: "pending", sentBy: user.uid, timestamp: window.firebase.firestore.FieldValue.serverTimestamp() });
        toast("Request sent to " + tName + "!", "success");
      } catch (e) {
        toast("Failed.", "error");
      }
    }, [user, username, toast]);
    const acceptFriend = (0, import_react.useCallback)(async (fUid) => {
      const db = getDb();
      if (!db || !user) return;
      try {
        await db.collection("users").doc(user.uid).collection("friends").doc(fUid).update({ status: "accepted" });
        await db.collection("users").doc(fUid).collection("friends").doc(user.uid).update({ status: "accepted" });
        toast("Friend added!", "success");
      } catch (e) {
        toast("Failed.", "error");
      }
    }, [user, toast]);
    const declineFriend = (0, import_react.useCallback)(async (fUid) => {
      const db = getDb();
      if (!db || !user) return;
      try {
        await db.collection("users").doc(user.uid).collection("friends").doc(fUid).delete();
        await db.collection("users").doc(fUid).collection("friends").doc(user.uid).delete();
      } catch (e) {
      }
    }, [user]);
    const sendBattleRequest = (0, import_react.useCallback)(async (tUid, tName) => {
      const db = getDb();
      if (!db || !user) return;
      const deck = game.decks.find((d) => d.id === game.activeDeckId);
      if (!deck || deck.cardIds.length !== DECK_SIZE) {
        toast("Select a valid deck!", "error");
        return;
      }
      try {
        await db.collection("users").doc(tUid).collection("battleRequests").add({ fromUid: user.uid, fromUsername: username, status: "pending", timestamp: window.firebase.firestore.FieldValue.serverTimestamp() });
        toast("Battle request sent to " + tName + "!", "success");
      } catch (e) {
        toast("Failed.", "error");
      }
    }, [user, username, game, toast]);
    const acceptBattleReq = (0, import_react.useCallback)(async (req) => {
      const db = getDb();
      if (!db || !user) return;
      try {
        await db.collection("users").doc(user.uid).collection("battleRequests").doc(req.id).update({ status: "accepted" });
        toast("Battle accepted! (PvP coming soon)", "success");
      } catch (e) {
      }
    }, [user, toast]);
    const declineBattleReq = (0, import_react.useCallback)(async (req) => {
      const db = getDb();
      if (!db || !user) return;
      try {
        await db.collection("users").doc(user.uid).collection("battleRequests").doc(req.id).delete();
      } catch (e) {
      }
    }, [user]);
    const handleOpenPack = (0, import_react.useCallback)((prem) => {
      const cost = prem ? 200 : 100;
      if (game.coins < cost) {
        toast("Not enough coins!", "error");
        return;
      }
      const cards = openPack();
      if (prem && !cards.some((c) => c.rarity === "epic" || c.rarity === "legendary")) {
        const pool = ALL_CARDS.filter((c) => c.rarity === "epic");
        cards[4] = { ...pick(pool), uid: uid() };
      }
      setGame((g) => ({ ...g, coins: g.coins - cost }));
      setPackCards(cards);
      setRevealedCards([]);
      updateQuestProgress("open_packs", 1);
    }, [game.coins, toast, updateQuestProgress]);
    const revealCard = (0, import_react.useCallback)((i) => {
      if (!packCards || revealedCards.includes(i)) return;
      setRevealedCards((r) => [...r, i]);
      const card = packCards[i];
      if (!game.collection.includes(card.id)) {
        setGame((g) => ({ ...g, collection: [...g.collection, card.id] }));
        toast("New: " + card.name + "!", "success");
      } else {
        const dc = card.rarity === "legendary" ? 50 : card.rarity === "epic" ? 25 : card.rarity === "rare" ? 10 : 5;
        setGame((g) => ({ ...g, coins: g.coins + dc }));
        toast("Dupe " + card.name + " \u2192 +" + dc, "info");
      }
    }, [packCards, revealedCards, game.collection, toast]);
    const revealAll = (0, import_react.useCallback)(() => {
      if (!packCards) return;
      packCards.forEach((_, i) => {
        if (!revealedCards.includes(i)) setTimeout(() => revealCard(i), i * 200);
      });
    }, [packCards, revealedCards, revealCard]);
    const craftCard = (0, import_react.useCallback)((cardId) => {
      const cardDef = ALL_CARDS.find((c) => c.id === cardId);
      if (!cardDef) return;
      const cost = CRAFT_COSTS[cardDef.rarity];
      if (game.coins < cost) { toast("Need " + cost + " coins!", "error"); return; }
      if (game.collection.includes(cardId)) { toast("Already owned!", "error"); return; }
      setGame((g) => ({ ...g, coins: g.coins - cost, collection: [...g.collection, cardId] }));
      toast("Crafted " + cardDef.name + "!", "success");
    }, [game.coins, game.collection, toast]);
    const startDeckEdit = (0, import_react.useCallback)((did) => {
      const deck = game.decks.find((d) => d.id === did);
      if (deck) {
        setDeckBuilderCards([...deck.cardIds]);
        setDeckName(deck.name);
        setEditDeckId(did);
      } else {
        setDeckBuilderCards([]);
        setDeckName("New Deck");
        setEditDeckId("new_" + uid());
      }
      setScreen("deckbuilder");
    }, [game.decks]);
    const saveDeck = (0, import_react.useCallback)(() => {
      if (deckBuilderCards.length !== DECK_SIZE) {
        toast("Need " + DECK_SIZE + " cards", "error");
        return;
      }
      setGame((g) => {
        const ex = g.decks.find((d) => d.id === editDeckId);
        const nd = { id: editDeckId, name: deckName, cardIds: [...deckBuilderCards] };
        return ex ? { ...g, decks: g.decks.map((d) => d.id === editDeckId ? nd : d) } : { ...g, decks: [...g.decks, nd] };
      });
      toast("Deck saved!", "success");
      setScreen("decks");
    }, [deckBuilderCards, deckName, editDeckId, toast]);
    const addToDeck = (0, import_react.useCallback)((cid) => {
      if (deckBuilderCards.length >= DECK_SIZE) {
        toast("Full!", "error");
        return;
      }
      if (deckBuilderCards.filter((id) => id === cid).length >= 2) {
        toast("Max 2 copies!", "error");
        return;
      }
      setDeckBuilderCards((c) => [...c, cid]);
    }, [deckBuilderCards, toast]);
    const removeFromDeck = (0, import_react.useCallback)((i) => {
      setDeckBuilderCards((c) => c.filter((_, j) => j !== i));
    }, []);
    const startBattle = (0, import_react.useCallback)(() => {
      const deck = game.decks.find((d) => d.id === game.activeDeckId);
      if (!deck || deck.cardIds.length !== DECK_SIZE) {
        toast("Select a valid deck!", "error");
        return;
      }
      setBattle(initBattle(deck.cardIds, game.aiTier));
      setScreen("battle");
      toast("Battle vs AI Tier " + game.aiTier + "!", "info");
    }, [game, toast]);
    const playCard = (0, import_react.useCallback)((hi) => {
      if (!battle || !battle.isPlayerTurn || battle.phase !== "playing") return;
      const card = battle.playerHand[hi];
      if (!card) return;
      if (card.cost > battle.playerMana) {
        toast("Not enough mana!", "error");
        return;
      }
      const cardDef = ALL_CARDS.find((c) => c.id === card.id) || card;
      if (cardDef.isSpell) {
        const nh2 = battle.playerHand.filter((_, i) => i !== hi);
        const effect = SPELL_EFFECTS[cardDef.spellEffect];
        if (!effect) {
          toast("Unknown spell!", "error");
          return;
        }
        let newState = { ...battle, playerHand: nh2, playerMana: battle.playerMana - card.cost, playerBoard: [...battle.playerBoard], aiBoard: [...battle.aiBoard], playerHp: battle.playerHp, aiHp: battle.aiHp, playerDeck: [...battle.playerDeck] };
        const msg = effect.fn(newState);
        setBattle((b) => ({ ...b, ...newState, log: [...b.log, "Cast " + card.name + "! " + msg], phase: newState.aiHp <= 0 ? "won" : b.phase }));
        updateQuestProgress("play_cards", 1);
        updateQuestProgress("play_spells", 1);
        if (cardDef.rarity === "rare" || cardDef.rarity === "epic" || cardDef.rarity === "legendary") updateQuestProgress("play_rares", 1);
        if (newState.aiHp <= 0) handleBattleEnd(true);
        return;
      }
      if (battle.playerBoard.length >= MAX_BOARD) {
        toast("Board full!", "error");
        return;
      }
      const bc = createBattleCard(card);
      const nb = [...battle.playerBoard, bc];
      const nh = battle.playerHand.filter((_, i) => i !== hi);
      let ab = [...battle.aiBoard];
      let ahp = battle.aiHp;
      const logs = [];
      const prevAiCount = battle.aiBoard.length;
      if (bc.abilityId === "blast") {
        ab = ab.map((c) => c.shielded ? { ...c, shielded: false } : { ...c, currentHp: c.currentHp - 2 }).filter((c) => c.currentHp > 0);
        logs.push(bc.name + " blasts for 2!");
      }
      if (bc.abilityId === "strike") {
        if (ab.length > 0) {
          const ti = Math.floor(Math.random() * ab.length);
          const t = ab[ti];
          ab[ti] = t.shielded ? { ...t, shielded: false } : { ...t, currentHp: t.currentHp - 3 };
          ab = ab.filter((c) => c.currentHp > 0);
          logs.push(bc.name + " strikes " + t.name + "!");
        } else {
          ahp -= 3;
          logs.push(bc.name + " strikes face!");
        }
      }
      if (bc.abilityId === "echo") logs.push(bc.name + " draws!");
      let nd = [...battle.playerDeck];
      let eh = [...nh];
      if (bc.abilityId === "echo" && nd.length > 0) eh = [...eh, nd.shift()];
      setBattle((b) => ({ ...b, playerMana: b.playerMana - card.cost, playerBoard: nb, playerHand: eh, playerDeck: nd, aiBoard: ab, aiHp: ahp, log: [...b.log, "Play " + card.name + ".", ...logs], phase: ahp <= 0 ? "won" : b.phase }));
      updateQuestProgress("play_cards", 1);
      if (cardDef.rarity === "rare" || cardDef.rarity === "epic" || cardDef.rarity === "legendary") updateQuestProgress("play_rares", 1);
      var killed = prevAiCount - ab.length; if (killed > 0) updateQuestProgress("kill_minions", killed);
      if (ahp <= 0) handleBattleEnd(true);
    }, [battle, toast, updateQuestProgress]);
    const attackWithCard = (0, import_react.useCallback)((bi, ti) => {
      if (!battle || !battle.isPlayerTurn || battle.phase !== "playing") return;
      const atk = battle.playerBoard[bi];
      if (!atk || atk.hasAttacked || !atk.canAttack && atk.justPlayed) return;
      const hasTaunt = battle.aiBoard.some((c) => c.abilityId === "taunt");
      if (ti === -1) {
        if (hasTaunt) {
          toast("Must attack taunt!", "error");
          return;
        }
        let hp2 = battle.aiHp - atk.currentAtk;
        let heal = atk.abilityId === "drain" ? atk.currentAtk : 0;
        setBattle((b) => ({ ...b, aiHp: hp2, playerHp: Math.min(STARTING_HP, b.playerHp + heal), playerBoard: b.playerBoard.map((c, i) => i === bi ? { ...c, hasAttacked: true } : c), log: [...b.log, atk.name + " attacks face!"], phase: hp2 <= 0 ? "won" : b.phase }));
        updateQuestProgress("deal_damage", atk.currentAtk);
        if (hp2 <= 0) handleBattleEnd(true);
      } else {
        const tgt = battle.aiBoard[ti];
        if (!tgt) return;
        if (hasTaunt && tgt.abilityId !== "taunt") {
          toast("Must attack taunt!", "error");
          return;
        }
        let th = tgt.shielded ? tgt.currentHp : tgt.currentHp - atk.currentAtk;
        let ah = atk.shielded ? atk.currentHp : atk.currentHp - tgt.currentAtk;
        let heal = atk.abilityId === "drain" && !tgt.shielded ? Math.min(atk.currentAtk, tgt.currentHp) : 0;
        setBattle((b) => ({ ...b, playerBoard: b.playerBoard.map((c, i) => i === bi ? { ...c, currentHp: ah, hasAttacked: true, shielded: false } : c).filter((c) => c.currentHp > 0), aiBoard: b.aiBoard.map((c, i) => i === ti ? { ...c, currentHp: th, shielded: false } : c).filter((c) => c.currentHp > 0), playerHp: Math.min(STARTING_HP, b.playerHp + heal), log: [...b.log, atk.name + " attacks " + tgt.name + "!"] }));
        if (th <= 0) updateQuestProgress("kill_minions", 1);
      }
    }, [battle, toast, updateQuestProgress]);
    const recallCard = (0, import_react.useCallback)((bi) => {
      if (!battle || !battle.isPlayerTurn || battle.phase !== "playing") return;
      const card = battle.playerBoard[bi];
      if (!card) return;
      if (battle.playerMana < 1) {
        toast("Need 1 mana!", "error");
        return;
      }
      const def = ALL_CARDS.find((c) => c.id === card.id) || card;
      setBattle((b) => ({ ...b, playerMana: b.playerMana - 1, playerBoard: b.playerBoard.filter((_, i) => i !== bi), playerHand: [...b.playerHand, { ...def, uid: uid() }], log: [...b.log, "Recall " + card.name + "."] }));
      updateQuestProgress("use_recall", 1);
    }, [battle, toast, updateQuestProgress]);
    const handleBattleEnd = (0, import_react.useCallback)((won) => {
      const coins = won ? 50 + game.aiTier * 20 : 10;
      setGame((g) => ({ ...g, coins: g.coins + coins, stats: { wins: g.stats.wins + (won ? 1 : 0), losses: g.stats.losses + (won ? 0 : 1), totalGames: g.stats.totalGames + 1 }, aiTier: won ? Math.min(g.aiTier + 1, 10) : Math.max(g.aiTier - 1, 1) }));
      toast(won ? "Victory! +" + coins + " coins!" : "Defeat. +" + coins + " coins.", won ? "success" : "error");
      if (won) updateQuestProgress("win_battles", 1);
    }, [game.aiTier, toast, updateQuestProgress]);
    const endTurn = (0, import_react.useCallback)(() => {
      if (!battle || !battle.isPlayerTurn || battle.phase !== "playing") return;
      let pb = battle.playerBoard.map((c) => ({ ...c, currentAtk: c.abilityId === "grow" ? c.currentAtk + 1 : c.currentAtk, currentHp: c.abilityId === "grow" ? c.currentHp + 1 : c.abilityId === "regen" ? c.currentHp + 1 : c.currentHp, hasAttacked: false, canAttack: true, justPlayed: false }));
      setBattle((b) => ({ ...b, playerBoard: pb, isPlayerTurn: false, log: [...b.log, "End turn."] }));
      setTimeout(() => runAITurn(), 800);
    }, [battle]);
    const runAITurn = (0, import_react.useCallback)(() => {
      setBattle((prev) => {
        if (!prev || prev.phase !== "playing") return prev;
        let b = { ...prev };
        let log = [...b.log, "AI's turn."];
        const nmm = Math.min(b.aiMaxMana + 1, MAX_MANA);
        let am = nmm;
        let ah = [...b.aiHand];
        let ad = [...b.aiDeck];
        let ab = [...b.aiBoard];
        let pb = [...b.playerBoard];
        let php = b.playerHp;
        let ahp = b.aiHp;
        let aiFatigue = b.aiFatigue || 0;
        if (ad.length > 0) ah.push(ad.shift());
        else {
          aiFatigue++;
          ahp -= aiFatigue;
          log.push("AI takes " + aiFatigue + " fatigue damage!");
        }
        const sorted = [...ah].sort((a, b2) => b2.cost - a.cost);
        const played = [];
        for (const card of sorted) {
          if (card.cost <= am && ab.length < MAX_BOARD) {
            am -= card.cost;
            const bc = createBattleCard(card);
            ab.push(bc);
            played.push(card);
            log.push("AI plays " + card.name + ".");
            if (bc.abilityId === "blast") {
              pb = pb.map((c) => c.shielded ? { ...c, shielded: false } : { ...c, currentHp: c.currentHp - 2 }).filter((c) => c.currentHp > 0);
            }
            if (bc.abilityId === "strike") {
              if (pb.length > 0) {
                const ti = Math.floor(Math.random() * pb.length);
                const t = pb[ti];
                pb[ti] = t.shielded ? { ...t, shielded: false } : { ...t, currentHp: t.currentHp - 3 };
                pb = pb.filter((c) => c.currentHp > 0);
              } else php -= 3;
            }
            if (bc.abilityId === "echo" && ad.length > 0) ah.push(ad.shift());
          }
        }
        ah = ah.filter((c) => !played.some((p) => p.uid === c.uid));
        for (let i = 0; i < ab.length; i++) {
          const c = ab[i];
          if (c.hasAttacked || !c.canAttack && c.justPlayed) continue;
          const ht = pb.some((pc) => pc.abilityId === "taunt");
          if (ht) {
            const ti = pb.findIndex((pc) => pc.abilityId === "taunt");
            if (ti !== -1) {
              const t = pb[ti];
              pb[ti] = { ...t, currentHp: t.shielded ? t.currentHp : t.currentHp - c.currentAtk, shielded: false };
              ab[i] = { ...c, currentHp: c.shielded ? c.currentHp : c.currentHp - t.currentAtk, hasAttacked: true, shielded: false };
              if (c.abilityId === "drain" && !t.shielded) ahp = Math.min(STARTING_HP, ahp + Math.min(c.currentAtk, t.currentHp));
            }
          } else if (pb.length > 0 && Math.random() > 0.3) {
            const ti = Math.floor(Math.random() * pb.length);
            const t = pb[ti];
            pb[ti] = { ...t, currentHp: t.shielded ? t.currentHp : t.currentHp - c.currentAtk, shielded: false };
            ab[i] = { ...c, currentHp: c.shielded ? c.currentHp : c.currentHp - t.currentAtk, hasAttacked: true, shielded: false };
            if (c.abilityId === "drain" && !t.shielded) ahp = Math.min(STARTING_HP, ahp + Math.min(c.currentAtk, t.currentHp));
          } else {
            php -= c.currentAtk;
            if (c.abilityId === "drain") ahp = Math.min(STARTING_HP, ahp + c.currentAtk);
            ab[i] = { ...c, hasAttacked: true };
          }
        }
        ab = ab.filter((c) => c.currentHp > 0);
        pb = pb.filter((c) => c.currentHp > 0);
        ab = ab.map((c) => ({ ...c, currentAtk: c.abilityId === "grow" ? c.currentAtk + 1 : c.currentAtk, currentHp: c.abilityId === "grow" ? c.currentHp + 1 : c.abilityId === "regen" ? c.currentHp + 1 : c.currentHp, hasAttacked: false, canAttack: true, justPlayed: false }));
        const npm = Math.min(b.playerMaxMana + 1, MAX_MANA);
        let pd = [...b.playerDeck];
        let phand = [...b.playerHand];
        let playerFatigue = b.playerFatigue || 0;
        if (pd.length > 0) phand.push(pd.shift());
        else {
          playerFatigue++;
          php -= playerFatigue;
          log.push("You take " + playerFatigue + " fatigue damage!");
        }
        return { ...b, playerHp: php, aiHp: ahp, playerBoard: pb, aiBoard: ab, aiHand: ah, aiDeck: ad, aiMaxMana: nmm, aiMana: am, playerMaxMana: npm, playerMana: npm, playerHand: phand, playerDeck: pd, turn: b.turn + 1, isPlayerTurn: true, phase: php <= 0 ? "lost" : ahp <= 0 ? "won" : "playing", log: [...log, "Your turn."], aiFatigue, playerFatigue };
      });
    }, []);
    (0, import_react.useEffect)(() => {
      if (battle && (battle.phase === "won" || battle.phase === "lost") && !battle._ended) {
        handleBattleEnd(battle.phase === "won");
        setBattle((b) => b ? { ...b, _ended: true } : b);
      }
    }, [battle?.phase]);
    const S = (0, import_react.useMemo)(() => ({
      app: { maxWidth: 420, margin: "0 auto", minHeight: "100vh", fontFamily: '"Anthropic Sans",system-ui,sans-serif', color: "#e8e6df", background: "#1a1a1e", position: "relative", overflow: "hidden" },
      content: { padding: "12px 16px", minHeight: "calc(100vh - 56px)", display: "flex", flexDirection: "column", gap: 12 },
      nav: { display: "flex", justifyContent: "space-around", alignItems: "center", padding: "10px 0", borderTop: "0.5px solid #333", background: "#232327", position: "sticky", bottom: 0 },
      navItem: (a) => ({ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, fontSize: 10, cursor: "pointer", userSelect: "none", color: a ? "#AFA9EC" : "#777", fontWeight: a ? 600 : 400 }),
      card: { background: "#232327", borderRadius: 12, padding: "14px 16px", border: "0.5px solid #333" },
      btn: (v) => ({
        padding: "10px 16px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        fontWeight: 500,
        fontSize: 13,
        textAlign: "center",
        ...v === "primary" ? { background: "#7F77DD", color: "#fff" } : v === "gold" ? { background: "#EF9F27", color: "#fff" } : v === "danger" ? { background: "#E24B4A", color: "#fff" } : v === "success" ? { background: "#1D9E75", color: "#fff" } : { background: "#2c2c30", color: "#e8e6df" }
      }),
      miniCard: (r, s) => ({ width: 64, minHeight: 88, borderRadius: 8, padding: "6px 4px", border: (s ? 2 : r === "legendary" ? 1.5 : 0.5) + "px solid " + (s ? "#AFA9EC" : r === "legendary" ? "#FAC775" : r === "epic" ? "#AFA9EC" : r === "rare" ? "#5DCAA5" : "#333"), background: s ? "#26215C" : "#232327", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, cursor: "pointer", position: "relative", flexShrink: 0, fontSize: 9, color: "#e8e6df" }),
      badge: (r) => ({ display: "inline-block", padding: "2px 8px", borderRadius: 8, fontSize: 10, fontWeight: 500, background: RARITIES[r]?.darkBg, color: RARITIES[r]?.color }),
      input: { padding: "10px 12px", borderRadius: 8, border: "0.5px solid #333", background: "#2c2c30", color: "#e8e6df", fontSize: 13, outline: "none", width: "100%" }
    }), []);
    const ShapeIcon = ({ shape, color, size = 24 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 32 32" }, SHAPES[shape]?.(color) || SHAPES.circle(color));
    const MiniCard = ({ cardDef, onClick, selected, showStats, battleCard }) => {
      const c = battleCard || cardDef;
      const r = RARITIES[cardDef.rarity];
      const ab = getAbility(cardDef.abilityId);
      const isSpell = cardDef.isSpell;
      const spellDesc = isSpell && SPELL_EFFECTS[cardDef.spellEffect] ? SPELL_EFFECTS[cardDef.spellEffect].desc : "";
      return /* @__PURE__ */ React.createElement("div", { style: S.miniCard(cardDef.rarity, selected), onClick, title: isSpell ? spellDesc : ab.desc || cardDef.name }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 3, left: 5, fontSize: 9, color: "#378ADD", fontWeight: 600 }, title: "Mana cost" }, "\u2B21", c.cost || cardDef.cost), isSpell && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 2, right: 4, fontSize: 7, color: "#AFA9EC", fontWeight: 600 } }, "SPELL"), battleCard?.shielded && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 2, right: 4, fontSize: 8, color: "#378ADD" } }, "\u25C8"), /* @__PURE__ */ React.createElement(ShapeIcon, { shape: cardDef.shape, color: r.color, size: 22 }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 8, fontWeight: 500, textAlign: "center", lineHeight: 1.1, maxWidth: 56, overflow: "hidden" } }, cardDef.name), isSpell ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 6, color: "#AFA9EC", textAlign: "center", lineHeight: 1.1, maxWidth: 56 } }, spellDesc) : /* @__PURE__ */ React.createElement(React.Fragment, null, ab.id !== "none" && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 7, color: r.color, fontWeight: 500 } }, ab.name), showStats !== false && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", width: "100%", padding: "0 4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: "#EF9F27", fontWeight: 600 }, title: "Attack" }, "\u2694", battleCard ? c.currentAtk : cardDef.atk), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: "#E24B4A", fontWeight: 600 }, title: "Health" }, "\u2665", battleCard ? c.currentHp : cardDef.hp))));
    };
    const Toasts = () => /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", top: 12, left: "50%", transform: "translateX(-50%)", zIndex: 999, display: "flex", flexDirection: "column", gap: 6, maxWidth: 380, width: "90%" } }, toasts.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.id, style: { padding: "10px 16px", borderRadius: 10, fontSize: 13, fontWeight: 500, background: t.type === "error" ? "#E24B4A" : t.type === "success" ? "#1D9E75" : "#7F77DD", color: "#fff", animation: "slideDown .3s ease", boxShadow: "0 4px 12px rgba(0,0,0,.15)" } }, t.msg)));
    const AuthScreenUI = () => /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "24px 0 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 600, letterSpacing: 2 } }, "DECK"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777", marginTop: 2 } }, authScreen === "register" ? "Create Account" : "Log In")), authError && /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 12px", borderRadius: 8, background: "#501313", color: "#F09595", fontSize: 12 } }, authError), /* @__PURE__ */ React.createElement("input", { style: S.input, placeholder: "Email", type: "email", value: authEmail, onChange: (e) => setAuthEmail(e.target.value) }), authScreen === "register" && /* @__PURE__ */ React.createElement("input", { style: S.input, placeholder: "Username (3-16 characters)", value: authUsername, onChange: (e) => setAuthUsername(e.target.value) }), /* @__PURE__ */ React.createElement("input", { style: S.input, placeholder: "Password", type: "password", value: authPass, onChange: (e) => setAuthPass(e.target.value) }), /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: authScreen === "register" ? handleRegister : handleLogin, disabled: authLoading }, authLoading ? "Loading..." : authScreen === "register" ? "Create Account" : "Log In"), /* @__PURE__ */ React.createElement("button", { style: S.btn("success"), onClick: handleGoogleLogin }, "Sign in with Google"), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontSize: 12, color: "#777" } }, authScreen === "register" ? /* @__PURE__ */ React.createElement("span", null, "Have an account? ", /* @__PURE__ */ React.createElement("span", { style: { color: "#AFA9EC", cursor: "pointer" }, onClick: () => {
      setAuthScreen("login");
      setAuthError("");
    } }, "Log in")) : /* @__PURE__ */ React.createElement("span", null, "Need an account? ", /* @__PURE__ */ React.createElement("span", { style: { color: "#AFA9EC", cursor: "pointer" }, onClick: () => {
      setAuthScreen("register");
      setAuthError("");
    } }, "Sign up"))), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), marginTop: 4 }, onClick: () => setAuthScreen(null) }, "Cancel"));
    const HomeScreen = () => {
      const wr = game.stats.totalGames > 0 ? Math.round(game.stats.wins / game.stats.totalGames * 100) : 0;
      const col = new Set(game.collection).size;
      const rank = getRank(game.stats.wins);
      const nextRank = RANKS.find((r) => r.minWins > game.stats.wins);
      return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "16px 0 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 600, letterSpacing: 2 } }, "DECK"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777", marginTop: 2 } }, "v", VERSION), user && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#AFA9EC", marginTop: 4 } }, username)), !user && /* @__PURE__ */ React.createElement("div", { style: { ...S.card, textAlign: "center", padding: "10px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777", marginBottom: 6 } }, "Log in for multiplayer and cloud saves"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1, fontSize: 11, padding: "8px" }, onClick: () => setAuthScreen("login") }, "Log In"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), flex: 1, fontSize: 11, padding: "8px" }, onClick: () => setAuthScreen("register") }, "Sign Up"))), battleRequests.filter((r) => r.status === "pending").length > 0 && /* @__PURE__ */ React.createElement("div", { style: { ...S.card, border: "1px solid #7F77DD" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#AFA9EC", marginBottom: 6 } }, "Battle Requests"), battleRequests.filter((r) => r.status === "pending").map((req) => /* @__PURE__ */ React.createElement("div", { key: req.id, style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12 } }, req.fromUsername), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("success"), fontSize: 10, padding: "4px 10px" }, onClick: () => acceptBattleReq(req) }, "Accept"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), fontSize: 10, padding: "4px 10px" }, onClick: () => declineBattleReq(req) }, "Decline"))))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#777" } }, "Cards"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 600 } }, col, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "#777" } }, "/", ALL_CARDS.length))), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#777" } }, "Win rate"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 600 } }, wr, "%")), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#777" } }, "Rank"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 600, color: rank.color } }, rank.name), /* @__PURE__ */ React.createElement("div", { style: { height: 4, borderRadius: 2, background: "#2c2c30", marginTop: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 4, borderRadius: 2, background: rank.color, width: nextRank ? (game.stats.wins - rank.minWins) / (nextRank.minWins - rank.minWins) * 100 + "%" : "100%" } })), nextRank && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "#555", marginTop: 2 } }, nextRank.minWins - game.stats.wins, " wins to ", nextRank.name)), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#777" } }, "Record"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 500 } }, game.stats.wins, "W \xB7 ", game.stats.losses, "L"))), game.quests && game.quests.length > 0 && /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#EF9F27", marginBottom: 8 } }, "Daily Quests"), game.quests.map((q, qi) => /* @__PURE__ */ React.createElement("div", { key: qi, style: { marginBottom: qi < game.quests.length - 1 ? 10 : 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 500, color: q.claimed ? "#555" : "#e8e6df", textDecoration: q.claimed ? "line-through" : "none" } }, q.desc), q.claimed ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: "#1D9E75" } }, "\u2713 Done") : q.progress >= q.target ? /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("gold"), fontSize: 9, padding: "3px 8px" }, onClick: () => claimQuest(qi) }, "+" + q.reward + " \u2B21") : /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: "#777" } }, q.progress, "/", q.target)), /* @__PURE__ */ React.createElement("div", { style: { height: 4, borderRadius: 2, background: "#2c2c30" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 4, borderRadius: 2, background: q.claimed ? "#555" : q.progress >= q.target ? "#1D9E75" : "#7F77DD", width: Math.min(100, q.progress / q.target * 100) + "%" } }))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 8 } }, /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: startBattle }, "Battle AI"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("gold"), flex: 1 }, onClick: () => setScreen("packs") }, "Open Packs")), user && /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), fontSize: 11, marginTop: 4 }, onClick: handleLogout }, "Log Out"));
    };
    const PackScreen = () => /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600 } }, "Pack Shop"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#777" } }, "Coins: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#EF9F27", fontWeight: 600 } }, game.coins)), !packCards ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { ...S.card, textAlign: "center", padding: "32px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 100, height: 130, margin: "0 auto", borderRadius: 12, border: "2px solid #7F77DD", background: "#26215C", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, borderRadius: "50%", border: "2px solid #7F77DD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#7F77DD" } }, "?"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#7F77DD" } }, "5 Cards")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, marginTop: 12 } }, "Standard Pack"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#777" } }, "1 guaranteed Rare+")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("gold"), flex: 1 }, onClick: () => handleOpenPack(false) }, "100 coins"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: () => handleOpenPack(true) }, "Premium \xB7 200"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, textAlign: "center" } }, "Tap to reveal!"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", padding: "8px 0" } }, packCards.map((card, i) => {
      const rev = revealedCards.includes(i);
      const r = RARITIES[card.rarity];
      return /* @__PURE__ */ React.createElement("div", { key: i, onClick: () => revealCard(i), style: { width: 72, height: 100, borderRadius: 10, cursor: "pointer", border: "1.5px solid " + (rev ? r.color : "#7F77DD"), background: rev ? r.darkBg : "#26215C", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 } }, rev ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ShapeIcon, { shape: card.shape, color: r.color, size: 24 }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 600 } }, card.name), /* @__PURE__ */ React.createElement("div", { style: S.badge(card.rarity) }, r.label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, fontSize: 9 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#EF9F27" } }, card.atk), /* @__PURE__ */ React.createElement("span", { style: { color: "#E24B4A" } }, card.hp))) : /* @__PURE__ */ React.createElement("div", { style: { fontSize: 24, color: "#7F77DD" } }, "?"));
    })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, revealedCards.length < 5 && /* @__PURE__ */ React.createElement("button", { style: S.btn(), onClick: revealAll }, "Reveal All"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: () => {
      setPackCards(null);
      setRevealedCards([]);
    } }, revealedCards.length === 5 ? "Done" : "Skip"))));
    const CollectionScreen = () => {
      const [filter, setFilter] = (0, import_react.useState)("all");
      const owned = new Set(game.collection);
      const filtered = ALL_CARDS.filter((c) => owned.has(c.id) && (filter === "all" || c.rarity === filter));
      return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600 } }, "Collection"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777" } }, owned.size, "/", ALL_CARDS.length)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, ["all", "common", "rare", "epic", "legendary"].map((f) => /* @__PURE__ */ React.createElement("button", { key: f, onClick: () => setFilter(f), style: { ...S.badge(f === "all" ? "common" : f), cursor: "pointer", border: "none", opacity: filter === f ? 1 : 0.5 } }, f === "all" ? "All" : RARITIES[f].label))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(68px,1fr))", gap: 6 } }, filtered.map((c) => /* @__PURE__ */ React.createElement(MiniCard, { key: c.id, cardDef: c, onClick: () => {
      } }))), filtered.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: 24, fontSize: 13, color: "#777" } }, "No cards"));
    };
    const DecksScreen = () => /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600 } }, "Decks"), /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: () => startDeckEdit(null) }, "+ New")), game.decks.map((d) => /* @__PURE__ */ React.createElement("div", { key: d.id, style: { ...S.card, display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 500 } }, d.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777" } }, d.cardIds.length, "/", DECK_SIZE)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { style: S.btn(game.activeDeckId === d.id ? "primary" : void 0), onClick: () => setGame((g) => ({ ...g, activeDeckId: d.id })) }, game.activeDeckId === d.id ? "Active" : "Use"), /* @__PURE__ */ React.createElement("button", { style: S.btn(), onClick: () => startDeckEdit(d.id) }, "Edit")))));
    const DeckBuilder = () => {
      const [bf, setBf] = (0, import_react.useState)("all");
      const owned = new Set(game.collection);
      const avail = ALL_CARDS.filter((c) => owned.has(c.id) && (bf === "all" || c.rarity === bf)).sort((a, b) => a.cost - b.cost);
      const dc = deckBuilderCards.map((id) => ALL_CARDS.find((c) => c.id === id)).filter(Boolean);
      return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("button", { style: S.btn(), onClick: () => setScreen("decks") }, "\u2190 Back"), /* @__PURE__ */ React.createElement("input", { value: deckName, onChange: (e) => setDeckName(e.target.value), style: { ...S.input, width: 120, textAlign: "center" } }), /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: saveDeck }, "Save")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777", textAlign: "center" } }, deckBuilderCards.length, "/", DECK_SIZE), /* @__PURE__ */ React.createElement("div", { style: { ...S.card, padding: "8px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 500, marginBottom: 6 } }, "Deck"), dc.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777", textAlign: "center", padding: 8 } }, "Add cards below") : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 } }, dc.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, onClick: () => removeFromDeck(i), style: { padding: "3px 8px", borderRadius: 6, fontSize: 10, fontWeight: 500, cursor: "pointer", background: RARITIES[c.rarity].darkBg, color: RARITIES[c.rarity].color, border: "0.5px solid " + RARITIES[c.rarity].color } }, c.cost, "\u2B21 ", c.name)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, ["all", "common", "rare", "epic", "legendary"].map((f) => /* @__PURE__ */ React.createElement("button", { key: f, onClick: () => setBf(f), style: { ...S.badge(f === "all" ? "common" : f), cursor: "pointer", border: "none", opacity: bf === f ? 1 : 0.5 } }, f === "all" ? "All" : RARITIES[f].label))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(68px,1fr))", gap: 6 } }, avail.map((c) => {
        const cnt = deckBuilderCards.filter((id) => id === c.id).length;
        return /* @__PURE__ */ React.createElement("div", { key: c.id, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(MiniCard, { cardDef: c, onClick: () => addToDeck(c.id), selected: cnt > 0 }), cnt > 0 && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: -4, right: -4, width: 16, height: 16, borderRadius: "50%", background: "#7F77DD", color: "#fff", fontSize: 9, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" } }, cnt));
      })));
    };
    const BattleScreen = () => {
      const [atk, setAtk] = (0, import_react.useState)(null);
      const logRef = (0, import_react.useRef)(null);
      (0, import_react.useEffect)(() => {
        if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
      }, [battle?.log]);
      if (!battle) return null;
      const over = battle.phase === "won" || battle.phase === "lost";
      return /* @__PURE__ */ React.createElement("div", { style: { ...S.content, gap: 6, padding: "8px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#777" } }, "AI Tier ", game.aiTier), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#E24B4A", fontSize: 10 } }, "HP"), /* @__PURE__ */ React.createElement("div", { style: { width: 60, height: 6, borderRadius: 3, background: "#2c2c30" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 6, borderRadius: 3, background: "#E24B4A", width: battle.aiHp / STARTING_HP * 100 + "%" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600 } }, battle.aiHp))), /* @__PURE__ */ React.createElement("div", { style: { minHeight: 80, padding: "6px 4px", borderRadius: 8, background: "rgba(226,75,74,.08)", display: "flex", gap: 4, alignItems: "center", justifyContent: "center", flexWrap: "wrap" } }, battle.aiBoard.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#777" } }, "Empty") : battle.aiBoard.map((bc, i) => {
        const def = ALL_CARDS.find((c) => c.id === bc.id) || bc;
        const sel = atk !== null ? battle.playerBoard[atk] : null;
        const canT = sel && !sel.hasAttacked && sel.canAttack && !sel.justPlayed;
        return /* @__PURE__ */ React.createElement("div", { key: bc.uid, onClick: () => {
          if (atk !== null && canT) {
            attackWithCard(atk, i);
            setAtk(null);
          }
        }, style: { cursor: canT ? "crosshair" : "default" } }, /* @__PURE__ */ React.createElement(MiniCard, { cardDef: def, battleCard: bc }));
      })), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontSize: 10, color: "#777" } }, "Turn ", battle.turn, " \xB7 ", over ? battle.phase === "won" ? "Victory!" : "Defeat" : battle.isPlayerTurn ? "Your turn" : "AI..."), battle.turn <= 3 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontSize: 9, color: "#555", padding: "2px 8px", background: "#2c2c30", borderRadius: 6, margin: "0 20px" } }, "\u2B21 = mana \xB7 \u2694 = attack \xB7 \u2665 = health", /* @__PURE__ */ React.createElement("br", null), `Tap your card \u2192 tap enemy card OR tap "Attack Face" to damage the AI's HP`), /* @__PURE__ */ React.createElement("div", { style: { minHeight: 80, padding: "6px 4px", borderRadius: 8, background: "rgba(127,119,221,.08)", display: "flex", gap: 4, alignItems: "center", justifyContent: "center", flexWrap: "wrap" } }, battle.playerBoard.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#777" } }, "Empty") : battle.playerBoard.map((bc, i) => {
        const def = ALL_CARDS.find((c) => c.id === bc.id) || bc;
        return /* @__PURE__ */ React.createElement("div", { key: bc.uid, onClick: () => {
          if (battle.isPlayerTurn && !over) setAtk(atk === i ? null : i);
        }, style: { cursor: battle.isPlayerTurn ? "pointer" : "default", outline: atk === i ? "2px solid #7F77DD" : "none", borderRadius: 10 } }, /* @__PURE__ */ React.createElement(MiniCard, { cardDef: def, battleCard: bc, selected: atk === i }));
      })), atk !== null && (() => {
        const sel = battle.playerBoard[atk];
        const canA = sel && !sel.hasAttacked && sel.canAttack && !sel.justPlayed;
        return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, canA && /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("danger"), fontSize: 13, padding: "10px 16px", flex: 2, fontWeight: 700 }, onClick: () => {
          attackWithCard(atk, -1);
          setAtk(null);
        } }, "\u2694 Attack Face"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("gold"), fontSize: 11, padding: "8px 12px", flex: 1 }, onClick: () => {
          recallCard(atk);
          setAtk(null);
        } }, "Recall"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), fontSize: 11, padding: "8px 12px" }, onClick: () => setAtk(null) }, "\u2715"));
      })(), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#E24B4A", fontSize: 10 } }, "HP"), /* @__PURE__ */ React.createElement("div", { style: { width: 60, height: 6, borderRadius: 3, background: "#2c2c30" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 6, borderRadius: 3, background: "#E24B4A", width: battle.playerHp / STARTING_HP * 100 + "%" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600 } }, battle.playerHp)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 2 } }, Array.from({ length: battle.playerMaxMana }, (_, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { width: 10, height: 10, borderRadius: "50%", border: "1px solid #378ADD", background: i < battle.playerMana ? "#378ADD" : "transparent" } }))), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "#777" } }, "Deck: ", battle.playerDeck.length)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, overflowX: "auto", padding: "4px 0", minHeight: 92 } }, battle.playerHand.map((card, i) => {
        const def = ALL_CARDS.find((c) => c.id === card.id) || card;
        const canP = card.cost <= battle.playerMana && battle.isPlayerTurn && !over && battle.playerBoard.length < MAX_BOARD;
        return /* @__PURE__ */ React.createElement("div", { key: card.uid, style: { opacity: canP ? 1 : 0.5 } }, /* @__PURE__ */ React.createElement(MiniCard, { cardDef: def, onClick: () => {
          if (canP) playCard(i);
        } }));
      })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, !over ? /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: endTurn, disabled: !battle.isPlayerTurn }, "End Turn") : /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: () => {
        setBattle(null);
        setScreen("home");
      } }, "Home")), /* @__PURE__ */ React.createElement("div", { ref: logRef, style: { maxHeight: 80, overflowY: "auto", fontSize: 10, color: "#777", padding: 6, borderRadius: 6, background: "#2c2c30" } }, battle.log.slice(-8).map((l, i) => /* @__PURE__ */ React.createElement("div", { key: i }, l))));
    };
    const SocialScreen = () => {
      if (!user) return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "40px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, marginBottom: 8 } }, "Social"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#777", marginBottom: 16 } }, "Log in to add friends and battle online"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center" } }, /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: () => setAuthScreen("login") }, "Log In"), /* @__PURE__ */ React.createElement("button", { style: S.btn(), onClick: () => setAuthScreen("register") }, "Sign Up"))));
      return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600 } }, "Social"), friendRequests.length > 0 && /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#EF9F27", marginBottom: 6 } }, "Requests (", friendRequests.length, ")"), friendRequests.map((r) => /* @__PURE__ */ React.createElement("div", { key: r.id, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "0.5px solid #333" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12 } }, r.username), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("success"), fontSize: 10, padding: "4px 10px" }, onClick: () => acceptFriend(r.id) }, "Accept"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), fontSize: 10, padding: "4px 10px" }, onClick: () => declineFriend(r.id) }, "Decline"))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("input", { style: { ...S.input, flex: 1 }, placeholder: "Search username...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), onKeyDown: (e) => {
        if (e.key === "Enter") searchUsers();
      } }), /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: searchUsers }, "Search")), searchResults.length > 0 && /* @__PURE__ */ React.createElement("div", { style: S.card }, searchResults.map((u) => {
        const isF = friends.some((f) => f.id === u.uid);
        return /* @__PURE__ */ React.createElement("div", { key: u.uid, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "0.5px solid #333" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 500 } }, u.username), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#777" } }, u.gameState?.stats?.wins || 0, "W \xB7 ", u.gameState?.stats?.losses || 0, "L")), isF ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "#1D9E75" } }, "Friends") : /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), fontSize: 10, padding: "4px 10px" }, onClick: () => sendFriendRequest(u.uid, u.username) }, "Add"));
      })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, marginTop: 4 } }, "Friends (", friends.length, ")"), friends.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777", textAlign: "center", padding: 16 } }, "No friends yet") : friends.map((f) => /* @__PURE__ */ React.createElement("div", { key: f.id, style: { ...S.card, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 28, height: 28, borderRadius: "50%", background: "#26215C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#AFA9EC" } }, f.username?.slice(0, 2).toUpperCase()), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 500 } }, f.username)), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), fontSize: 10, padding: "6px 12px" }, onClick: () => sendBattleRequest(f.id, f.username) }, "Battle"))));
    };
    const [settingsNewUsername, setSettingsNewUsername] = (0, import_react.useState)("");
    const [settingsNewPassword, setSettingsNewPassword] = (0, import_react.useState)("");
    const [deleteConfirm, setDeleteConfirm] = (0, import_react.useState)(false);
    const CraftScreen = () => {
      const [cf, setCf] = (0, import_react.useState)("all");
      const owned = new Set(game.collection);
      const filtered = ALL_CARDS.filter((c) => (cf === "all" || c.rarity === cf) && (cf === "all" ? true : true)).sort((a, b) => a.cost - b.cost);
      return /* @__PURE__*/ React.createElement("div", { style: S.content },
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600 } }, "Craft Cards"),
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#EF9F27", fontWeight: 600 } }, "\u2B21 ", game.coins)),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#777", marginBottom: 4 } }, "Spend coins to add cards to your collection. Owned cards shown with \u2713"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } },
          ["all", "common", "rare", "epic", "legendary"].map((f) =>
            /* @__PURE__ */ React.createElement("button", { key: f, onClick: () => setCf(f), style: { ...S.badge(f === "all" ? "common" : f), cursor: "pointer", border: "none", opacity: cf === f ? 1 : 0.5 } }, f === "all" ? "All" : RARITIES[f].label))),
        /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(90px,1fr))", gap: 8 } },
          filtered.map((c) => {
            const has = owned.has(c.id);
            const cost = CRAFT_COSTS[c.rarity];
            return /* @__PURE__ */ React.createElement("div", { key: c.id, style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 4 } },
              /* @__PURE__ */ React.createElement(MiniCard, { cardDef: c, selected: has }),
              has
                ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "#1D9E75", fontWeight: 600 } }, "\u2713 Owned")
                : /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(game.coins >= cost ? "gold" : void 0), fontSize: 9, padding: "4px 8px", opacity: game.coins >= cost ? 1 : 0.5 }, onClick: () => craftCard(c.id) }, "\u2B21 ", cost));
          })),
        filtered.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: 24, fontSize: 13, color: "#777" } }, "No cards"));
    };
    const SettingsScreen = () => {
      if (!user) return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "40px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, marginBottom: 8 } }, "Settings"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#777", marginBottom: 16 } }, "Log in to access account settings"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center" } }, /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: () => setAuthScreen("login") }, "Log In"), /* @__PURE__ */ React.createElement("button", { style: S.btn(), onClick: () => setAuthScreen("register") }, "Sign Up"))));
      return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600 } }, "Settings"), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#AFA9EC", marginBottom: 8 } }, "Account Info"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777" } }, "Email"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, marginBottom: 8 } }, user.email || "Google account"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777" } }, "Username"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, marginBottom: 8 } }, username), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777" } }, "User ID"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#555", wordBreak: "break-all" } }, user.uid)), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#AFA9EC", marginBottom: 8 } }, "Change Username"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("input", { style: { ...S.input, flex: 1 }, placeholder: "New username", value: settingsNewUsername, onChange: (e) => setSettingsNewUsername(e.target.value) }), /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: () => {
        handleChangeUsername(settingsNewUsername);
        setSettingsNewUsername("");
      } }, "Save"))), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#AFA9EC", marginBottom: 8 } }, "Change Password"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("input", { style: { ...S.input, flex: 1 }, placeholder: "New password", type: "password", value: settingsNewPassword, onChange: (e) => setSettingsNewPassword(e.target.value) }), /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: () => {
        handleChangePassword(settingsNewPassword);
        setSettingsNewPassword("");
      } }, "Save")), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), marginTop: 6, width: "100%", fontSize: 11 }, onClick: handleResetPassword }, "Send Password Reset Email")), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#AFA9EC", marginBottom: 8 } }, "Game Data"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#777", marginBottom: 4 } }, "Cards: ", new Set(game.collection).size, "/", ALL_CARDS.length, " \xB7 Wins: ", game.stats.wins, " \xB7 Losses: ", game.stats.losses), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), width: "100%", fontSize: 11 }, onClick: () => {
        if (confirm("Reset all local game data? Your cloud save will remain.")) {
          localStorage.removeItem("deck_save");
          setGame(makeInitialState());
          toast("Local data reset.", "info");
        }
      } }, "Reset Local Data")), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), width: "100%" }, onClick: handleLogout }, "Log Out"), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#E24B4A", marginBottom: 8 } }, "Danger Zone"), !deleteConfirm ? /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("danger"), width: "100%", fontSize: 11 }, onClick: () => setDeleteConfirm(true) }, "Delete Account") : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#F09595", marginBottom: 8 } }, "This will permanently delete your account, username, friends, and all cloud data. This cannot be undone."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("danger"), flex: 1, fontSize: 11 }, onClick: handleDeleteAccount }, "Yes, Delete Forever"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), flex: 1, fontSize: 11 }, onClick: () => setDeleteConfirm(false) }, "Cancel")))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontSize: 10, color: "#555", marginTop: 8 } }, "Deck v", VERSION));
    };
    const navItems = [{ id: "home", label: "Home", icon: "\u25C9" }, { id: "packs", label: "Packs", icon: "\u25C6" }, { id: "craft", label: "Craft", icon: "\u2726" }, { id: "collection", label: "Cards", icon: "\u25C7" }, { id: "decks", label: "Decks", icon: "\u2630" }, { id: "social", label: "Social", icon: "\u25CE" }, { id: "settings", label: "Settings", icon: "\u2699" }];
    if (authScreen) return /* @__PURE__ */ React.createElement("div", { style: S.app }, /* @__PURE__ */ React.createElement("style", null, `@keyframes slideDown{from{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}`), /* @__PURE__ */ React.createElement(Toasts, null), AuthScreenUI());
    return /* @__PURE__ */ React.createElement("div", { style: S.app }, /* @__PURE__ */ React.createElement("style", null, `@keyframes slideDown{from{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}*{box-sizing:border-box}::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-thumb{background:rgba(127,119,221,.3);border-radius:2px}`), /* @__PURE__ */ React.createElement(Toasts, null), screen === "home" && HomeScreen(), screen === "packs" && PackScreen(), screen === "collection" && /* @__PURE__ */ React.createElement(CollectionScreen, null), screen === "craft" && /* @__PURE__ */ React.createElement(CraftScreen, null), screen === "decks" && DecksScreen(), screen === "deckbuilder" && /* @__PURE__ */ React.createElement(DeckBuilder, null), screen === "battle" && /* @__PURE__ */ React.createElement(BattleScreen, null), screen === "social" && SocialScreen(), screen === "settings" && /* @__PURE__ */ React.createElement(SettingsScreen, null), screen !== "deckbuilder" && screen !== "battle" && /* @__PURE__ */ React.createElement("div", { style: S.nav }, navItems.map((n) => /* @__PURE__ */ React.createElement("div", { key: n.id, style: S.navItem(screen === n.id), onClick: () => setScreen(n.id) }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16 } }, n.icon), /* @__PURE__ */ React.createElement("span", null, n.label))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2, fontSize: 10, color: "#EF9F27", fontWeight: 500 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14 } }, "\u2B21"), /* @__PURE__ */ React.createElement("span", null, game.coins.toLocaleString()))));
  }
  return __toCommonJS(game_exports);
})();
