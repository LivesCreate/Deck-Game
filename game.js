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
    common: { label: "Common", color: "#888780", bg: "#F1EFE8", darkBg: "#2C2C2A", pity: 0 },
    rare: { label: "Rare", color: "#1D9E75", bg: "#E1F5EE", darkBg: "#085041", pity: 0 },
    epic: { label: "Epic", color: "#534AB7", bg: "#EEEDFE", darkBg: "#26215C", pity: 0 },
    legendary: { label: "Legendary", color: "#BA7517", bg: "#FAEEDA", darkBg: "#412402", pity: 0 }
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
    { id: 40, name: "Axiom", cost: 9, atk: 8, hp: 9, rarity: "legendary", shape: "cross", abilityId: "grow" }
  ];
  var getAbility = (id) => ABILITIES.find((a) => a.id === id) || ABILITIES[0];
  var uid = () => Math.random().toString(36).slice(2, 10);
  var shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  var pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  var STARTER_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 20, 36];
  var DECK_SIZE = 15;
  var HAND_SIZE = 4;
  var MAX_BOARD = 5;
  var STARTING_HP = 20;
  var MAX_MANA = 10;
  function makeInitialState() {
    return {
      coins: 500,
      collection: STARTER_IDS.map((id) => id),
      decks: [{ id: "starter", name: "Starter Deck", cardIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 15, 20, 36, 5] }],
      activeDeckId: "starter",
      stats: { wins: 0, losses: 0, totalGames: 0 },
      aiTier: 1
    };
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
    const maxCost = Math.min(4 + tier, 10);
    const pool = ALL_CARDS.filter((c) => c.cost <= maxCost);
    const deck = [];
    for (let i = 0; i < DECK_SIZE; i++) {
      deck.push({ ...pick(pool), uid: uid() });
    }
    return deck;
  }
  function createBattleCard(cardDef) {
    return {
      ...cardDef,
      uid: uid(),
      currentHp: cardDef.hp,
      currentAtk: cardDef.atk,
      hasAttacked: false,
      canAttack: cardDef.abilityId === "rush",
      shielded: cardDef.abilityId === "shield",
      justPlayed: true
    };
  }
  function initBattle(playerDeckIds, aiTier) {
    const pCards = shuffle(playerDeckIds.map((id) => {
      const def = ALL_CARDS.find((c) => c.id === id);
      return def ? { ...def, uid: uid() } : { ...ALL_CARDS[0], uid: uid() };
    }));
    const aCards = buildAIDeck(aiTier);
    const pHand = pCards.splice(0, HAND_SIZE);
    const aHand = aCards.splice(0, HAND_SIZE);
    return {
      playerHp: STARTING_HP,
      aiHp: STARTING_HP,
      playerMana: 1,
      playerMaxMana: 1,
      aiMana: 1,
      aiMaxMana: 1,
      playerBoard: [],
      aiBoard: [],
      playerHand: pHand,
      aiHand: aHand,
      playerDeck: pCards,
      aiDeck: aCards,
      turn: 1,
      isPlayerTurn: true,
      phase: "playing",
      log: ["Battle started! Your turn."],
      selectedCard: null,
      attackingCard: null
    };
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
    const aiThinking = (0, import_react.useRef)(false);
    (0, import_react.useEffect)(() => {
      try {
        localStorage.setItem("deck_save", JSON.stringify(game));
      } catch (e) {
      }
    }, [game]);
    const toast = (0, import_react.useCallback)((msg, type = "info") => {
      const id = ++toastId;
      setToasts((t) => [...t, { id, msg, type }]);
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3e3);
    }, []);
    const handleOpenPack = (0, import_react.useCallback)((premium) => {
      const cost = premium ? 200 : 100;
      if (game.coins < cost) {
        toast("Not enough coins!", "error");
        return;
      }
      const cards = openPack();
      if (premium) {
        if (!cards.some((c) => c.rarity === "epic" || c.rarity === "legendary")) {
          const pool = ALL_CARDS.filter((c) => c.rarity === "epic");
          cards[4] = { ...pick(pool), uid: uid() };
        }
      }
      setGame((g) => ({ ...g, coins: g.coins - cost }));
      setPackCards(cards);
      setRevealedCards([]);
    }, [game.coins, toast]);
    const revealCard = (0, import_react.useCallback)((index) => {
      if (!packCards || revealedCards.includes(index)) return;
      setRevealedCards((r) => [...r, index]);
      const card = packCards[index];
      const isNew = !game.collection.includes(card.id);
      if (isNew) {
        setGame((g) => ({ ...g, collection: [...g.collection, card.id] }));
        toast(`New card: ${card.name}!`, "success");
      } else {
        const dupeCoins = card.rarity === "legendary" ? 50 : card.rarity === "epic" ? 25 : card.rarity === "rare" ? 10 : 5;
        setGame((g) => ({ ...g, coins: g.coins + dupeCoins }));
        toast(`Duplicate ${card.name} \u2192 +${dupeCoins} coins`, "info");
      }
    }, [packCards, revealedCards, game.collection, toast]);
    const revealAll = (0, import_react.useCallback)(() => {
      if (!packCards) return;
      packCards.forEach((card, i) => {
        if (!revealedCards.includes(i)) {
          setTimeout(() => revealCard(i), i * 200);
        }
      });
    }, [packCards, revealedCards, revealCard]);
    const startDeckEdit = (0, import_react.useCallback)((deckId) => {
      const deck = game.decks.find((d) => d.id === deckId);
      if (deck) {
        setDeckBuilderCards([...deck.cardIds]);
        setDeckName(deck.name);
        setEditDeckId(deckId);
      } else {
        setDeckBuilderCards([]);
        setDeckName("New Deck");
        setEditDeckId("new_" + uid());
      }
      setScreen("deckbuilder");
    }, [game.decks]);
    const saveDeck = (0, import_react.useCallback)(() => {
      if (deckBuilderCards.length !== DECK_SIZE) {
        toast(`Deck needs exactly ${DECK_SIZE} cards (has ${deckBuilderCards.length})`, "error");
        return;
      }
      setGame((g) => {
        const exists = g.decks.find((d) => d.id === editDeckId);
        const newDeck = { id: editDeckId, name: deckName, cardIds: [...deckBuilderCards] };
        if (exists) {
          return { ...g, decks: g.decks.map((d) => d.id === editDeckId ? newDeck : d) };
        }
        return { ...g, decks: [...g.decks, newDeck] };
      });
      toast("Deck saved!", "success");
      setScreen("decks");
    }, [deckBuilderCards, deckName, editDeckId, toast]);
    const addToDeck = (0, import_react.useCallback)((cardId) => {
      if (deckBuilderCards.length >= DECK_SIZE) {
        toast("Deck is full!", "error");
        return;
      }
      const count = deckBuilderCards.filter((id) => id === cardId).length;
      if (count >= 2) {
        toast("Max 2 copies per card!", "error");
        return;
      }
      setDeckBuilderCards((c) => [...c, cardId]);
    }, [deckBuilderCards, toast]);
    const removeFromDeck = (0, import_react.useCallback)((index) => {
      setDeckBuilderCards((c) => c.filter((_, i) => i !== index));
    }, []);
    const startBattle = (0, import_react.useCallback)(() => {
      const deck = game.decks.find((d) => d.id === game.activeDeckId);
      if (!deck || deck.cardIds.length !== DECK_SIZE) {
        toast("Select a valid deck with 15 cards!", "error");
        return;
      }
      setBattle(initBattle(deck.cardIds, game.aiTier));
      setScreen("battle");
      toast(`Battle vs AI Tier ${game.aiTier}!`, "info");
    }, [game, toast]);
    const playCard = (0, import_react.useCallback)((handIndex) => {
      if (!battle || !battle.isPlayerTurn || battle.phase !== "playing") return;
      const card = battle.playerHand[handIndex];
      if (!card) return;
      if (card.cost > battle.playerMana) {
        toast("Not enough mana!", "error");
        return;
      }
      if (battle.playerBoard.length >= MAX_BOARD) {
        toast("Board is full!", "error");
        return;
      }
      const bc = createBattleCard(card);
      const newBoard = [...battle.playerBoard, bc];
      const newHand = battle.playerHand.filter((_, i) => i !== handIndex);
      let newAiBoard = [...battle.aiBoard];
      let newAiHp = battle.aiHp;
      let newPlayerHp = battle.playerHp;
      const logs = [];
      if (bc.abilityId === "blast") {
        newAiBoard = newAiBoard.map((c) => {
          const dmg = c.shielded ? 0 : 2;
          if (c.shielded) return { ...c, shielded: false };
          return { ...c, currentHp: c.currentHp - dmg };
        }).filter((c) => c.currentHp > 0);
        logs.push(`${bc.name} blasts all enemies for 2!`);
      }
      if (bc.abilityId === "strike") {
        if (newAiBoard.length > 0) {
          const target = Math.floor(Math.random() * newAiBoard.length);
          const t = newAiBoard[target];
          const dmg = t.shielded ? 0 : 3;
          newAiBoard[target] = t.shielded ? { ...t, shielded: false } : { ...t, currentHp: t.currentHp - dmg };
          newAiBoard = newAiBoard.filter((c) => c.currentHp > 0);
          logs.push(`${bc.name} strikes ${t.name} for 3!`);
        } else {
          newAiHp -= 3;
          logs.push(`${bc.name} strikes face for 3!`);
        }
      }
      if (bc.abilityId === "echo") {
        logs.push(`${bc.name} draws a card!`);
      }
      let newDeck = [...battle.playerDeck];
      let extraHand = [...newHand];
      if (bc.abilityId === "echo" && newDeck.length > 0) {
        extraHand = [...extraHand, newDeck.shift()];
      }
      setBattle((b) => ({
        ...b,
        playerMana: b.playerMana - card.cost,
        playerBoard: newBoard,
        playerHand: extraHand,
        playerDeck: newDeck,
        aiBoard: newAiBoard,
        aiHp: newAiHp,
        playerHp: newPlayerHp,
        log: [...b.log, `You play ${card.name} (${card.cost} mana).`, ...logs],
        phase: newAiHp <= 0 ? "won" : b.phase
      }));
      if (newAiHp <= 0) {
        handleBattleEnd(true);
      }
    }, [battle, toast]);
    const attackWithCard = (0, import_react.useCallback)((boardIndex, targetIndex) => {
      if (!battle || !battle.isPlayerTurn || battle.phase !== "playing") return;
      const attacker = battle.playerBoard[boardIndex];
      if (!attacker || attacker.hasAttacked || !attacker.canAttack && attacker.justPlayed) return;
      const hasTaunt = battle.aiBoard.some((c) => c.abilityId === "taunt");
      if (targetIndex === -1) {
        if (hasTaunt) {
          toast("Must attack taunt minion!", "error");
          return;
        }
        let newAiHp = battle.aiHp - attacker.currentAtk;
        let heal = 0;
        if (attacker.abilityId === "drain") {
          heal = attacker.currentAtk;
        }
        const newBoard = battle.playerBoard.map(
          (c, i) => i === boardIndex ? { ...c, hasAttacked: true } : c
        );
        setBattle((b) => ({
          ...b,
          aiHp: newAiHp,
          playerHp: Math.min(STARTING_HP, b.playerHp + heal),
          playerBoard: newBoard,
          log: [...b.log, `${attacker.name} attacks face for ${attacker.currentAtk}!${heal ? ` Heals ${heal}.` : ""}`],
          phase: newAiHp <= 0 ? "won" : b.phase
        }));
        if (newAiHp <= 0) handleBattleEnd(true);
      } else {
        const target = battle.aiBoard[targetIndex];
        if (!target) return;
        if (hasTaunt && target.abilityId !== "taunt") {
          toast("Must attack taunt minion!", "error");
          return;
        }
        let atkDmg = attacker.currentAtk;
        let defDmg = target.currentAtk;
        let targetHp = target.shielded ? target.currentHp : target.currentHp - atkDmg;
        let attackerHp = attacker.shielded ? attacker.currentHp : attacker.currentHp - defDmg;
        let targetShielded = false;
        let attackerShielded = false;
        if (target.shielded) {
          targetShielded = false;
          targetHp = target.currentHp;
        }
        if (attacker.shielded) {
          attackerShielded = false;
          attackerHp = attacker.currentHp;
        }
        let heal = 0;
        if (attacker.abilityId === "drain" && !target.shielded) {
          heal = Math.min(atkDmg, target.currentHp);
        }
        const newPBoard = battle.playerBoard.map(
          (c, i) => i === boardIndex ? { ...c, currentHp: attackerHp, hasAttacked: true, shielded: attackerShielded } : c
        ).filter((c) => c.currentHp > 0);
        const newABoard = battle.aiBoard.map(
          (c, i) => i === targetIndex ? { ...c, currentHp: targetHp, shielded: targetShielded } : c
        ).filter((c) => c.currentHp > 0);
        setBattle((b) => ({
          ...b,
          playerBoard: newPBoard,
          aiBoard: newABoard,
          playerHp: Math.min(STARTING_HP, b.playerHp + heal),
          log: [...b.log, `${attacker.name} attacks ${target.name}!${heal ? ` Heals ${heal}.` : ""}`]
        }));
      }
    }, [battle, toast]);
    const recallCard = (0, import_react.useCallback)((boardIndex) => {
      if (!battle || !battle.isPlayerTurn || battle.phase !== "playing") return;
      const card = battle.playerBoard[boardIndex];
      if (!card) return;
      const RECALL_COST = 1;
      if (battle.playerMana < RECALL_COST) {
        toast("Need 1 mana to recall!", "error");
        return;
      }
      const def = ALL_CARDS.find((c) => c.id === card.id) || card;
      const handCard = { ...def, uid: uid() };
      const newBoard = battle.playerBoard.filter((_, i) => i !== boardIndex);
      setBattle((b) => ({
        ...b,
        playerMana: b.playerMana - RECALL_COST,
        playerBoard: newBoard,
        playerHand: [...b.playerHand, handCard],
        log: [...b.log, `You recall ${card.name} to hand. (-${RECALL_COST} mana)`]
      }));
      toast(`${card.name} recalled to hand`, "info");
    }, [battle, toast]);
    const handleBattleEnd = (0, import_react.useCallback)((won) => {
      const coins = won ? 50 + game.aiTier * 20 : 10;
      setGame((g) => ({
        ...g,
        coins: g.coins + coins,
        stats: {
          wins: g.stats.wins + (won ? 1 : 0),
          losses: g.stats.losses + (won ? 0 : 1),
          totalGames: g.stats.totalGames + 1
        },
        aiTier: won ? Math.min(g.aiTier + 1, 10) : Math.max(g.aiTier - 1, 1)
      }));
      toast(won ? `Victory! +${coins} coins!` : `Defeat. +${coins} coins.`, won ? "success" : "error");
    }, [game.aiTier, toast]);
    const endTurn = (0, import_react.useCallback)(() => {
      if (!battle || !battle.isPlayerTurn || battle.phase !== "playing") return;
      let pBoard = battle.playerBoard.map((c) => ({
        ...c,
        currentAtk: c.abilityId === "grow" ? c.currentAtk + 1 : c.currentAtk,
        currentHp: c.abilityId === "grow" ? c.currentHp + 1 : c.abilityId === "regen" ? c.currentHp + 1 : c.currentHp,
        hasAttacked: false,
        canAttack: true,
        justPlayed: false
      }));
      setBattle((b) => ({
        ...b,
        playerBoard: pBoard,
        isPlayerTurn: false,
        log: [...b.log, "You end your turn."]
      }));
      aiThinking.current = true;
      setTimeout(() => runAITurn(), 800);
    }, [battle]);
    const runAITurn = (0, import_react.useCallback)(() => {
      setBattle((prev) => {
        if (!prev || prev.phase !== "playing") return prev;
        let b = { ...prev };
        let log = [...b.log, "AI's turn."];
        const newMaxMana = Math.min(b.aiMaxMana + 1, MAX_MANA);
        let aiMana = newMaxMana;
        let aiHand = [...b.aiHand];
        let aiDeck = [...b.aiDeck];
        let aiBoard = [...b.aiBoard];
        let playerBoard = [...b.playerBoard];
        let playerHp = b.playerHp;
        let aiHp = b.aiHp;
        if (aiDeck.length > 0) {
          aiHand.push(aiDeck.shift());
        }
        const sorted = [...aiHand].sort((a, b2) => b2.cost - a.cost);
        const played = [];
        for (const card of sorted) {
          if (card.cost <= aiMana && aiBoard.length < MAX_BOARD) {
            aiMana -= card.cost;
            const bc = createBattleCard(card);
            aiBoard.push(bc);
            played.push(card);
            log.push(`AI plays ${card.name}.`);
            if (bc.abilityId === "blast") {
              playerBoard = playerBoard.map((c) => {
                if (c.shielded) return { ...c, shielded: false };
                return { ...c, currentHp: c.currentHp - 2 };
              }).filter((c) => c.currentHp > 0);
              log.push(`${bc.name} blasts your board for 2!`);
            }
            if (bc.abilityId === "strike") {
              if (playerBoard.length > 0) {
                const ti = Math.floor(Math.random() * playerBoard.length);
                const t = playerBoard[ti];
                if (t.shielded) {
                  playerBoard[ti] = { ...t, shielded: false };
                } else {
                  playerBoard[ti] = { ...t, currentHp: t.currentHp - 3 };
                }
                playerBoard = playerBoard.filter((c) => c.currentHp > 0);
                log.push(`${bc.name} strikes ${t.name} for 3!`);
              } else {
                playerHp -= 3;
                log.push(`${bc.name} strikes your face for 3!`);
              }
            }
            if (bc.abilityId === "echo" && aiDeck.length > 0) {
              aiHand.push(aiDeck.shift());
              log.push(`${bc.name} draws a card.`);
            }
          }
        }
        aiHand = aiHand.filter((c) => !played.some((p) => p.uid === c.uid));
        for (let i = 0; i < aiBoard.length; i++) {
          const c = aiBoard[i];
          if (c.hasAttacked || !c.canAttack && c.justPlayed) continue;
          const hasTaunt = playerBoard.some((pc) => pc.abilityId === "taunt");
          if (hasTaunt) {
            const tauntIdx = playerBoard.findIndex((pc) => pc.abilityId === "taunt");
            if (tauntIdx !== -1) {
              const t = playerBoard[tauntIdx];
              const tHp = t.shielded ? t.currentHp : t.currentHp - c.currentAtk;
              const cHp = c.shielded ? c.currentHp : c.currentHp - t.currentAtk;
              playerBoard[tauntIdx] = { ...t, currentHp: tHp, shielded: t.shielded ? false : t.shielded };
              aiBoard[i] = { ...c, currentHp: cHp, hasAttacked: true, shielded: c.shielded ? false : c.shielded };
              if (c.abilityId === "drain" && !t.shielded) aiHp = Math.min(STARTING_HP, aiHp + Math.min(c.currentAtk, t.currentHp));
              log.push(`AI's ${c.name} attacks ${t.name}.`);
            }
          } else if (playerBoard.length > 0 && Math.random() > 0.3) {
            const ti = Math.floor(Math.random() * playerBoard.length);
            const t = playerBoard[ti];
            const tHp = t.shielded ? t.currentHp : t.currentHp - c.currentAtk;
            const cHp = c.shielded ? c.currentHp : c.currentHp - t.currentAtk;
            playerBoard[ti] = { ...t, currentHp: tHp, shielded: t.shielded ? false : t.shielded };
            aiBoard[i] = { ...c, currentHp: cHp, hasAttacked: true, shielded: c.shielded ? false : c.shielded };
            if (c.abilityId === "drain" && !t.shielded) aiHp = Math.min(STARTING_HP, aiHp + Math.min(c.currentAtk, t.currentHp));
            log.push(`AI's ${c.name} attacks ${t.name}.`);
          } else {
            playerHp -= c.currentAtk;
            let heal = 0;
            if (c.abilityId === "drain") {
              heal = c.currentAtk;
              aiHp = Math.min(STARTING_HP, aiHp + heal);
            }
            aiBoard[i] = { ...c, hasAttacked: true };
            log.push(`AI's ${c.name} attacks your face for ${c.currentAtk}!${heal ? ` Heals ${heal}.` : ""}`);
          }
        }
        aiBoard = aiBoard.filter((c) => c.currentHp > 0);
        playerBoard = playerBoard.filter((c) => c.currentHp > 0);
        aiBoard = aiBoard.map((c) => ({
          ...c,
          currentAtk: c.abilityId === "grow" ? c.currentAtk + 1 : c.currentAtk,
          currentHp: c.abilityId === "grow" ? c.currentHp + 1 : c.abilityId === "regen" ? c.currentHp + 1 : c.currentHp,
          hasAttacked: false,
          canAttack: true,
          justPlayed: false
        }));
        const newPMaxMana = Math.min(b.playerMaxMana + 1, MAX_MANA);
        let pDeck = [...b.playerDeck];
        let pHand = [...b.playerHand];
        if (pDeck.length > 0) pHand.push(pDeck.shift());
        const phase = playerHp <= 0 ? "lost" : aiHp <= 0 ? "won" : "playing";
        log.push("Your turn. Draw a card.");
        aiThinking.current = false;
        return {
          ...b,
          playerHp,
          aiHp,
          playerBoard,
          aiBoard,
          aiHand,
          aiDeck,
          aiMaxMana: newMaxMana,
          aiMana,
          playerMaxMana: newPMaxMana,
          playerMana: newPMaxMana,
          playerHand: pHand,
          playerDeck: pDeck,
          turn: b.turn + 1,
          isPlayerTurn: true,
          phase,
          log
        };
      });
    }, []);
    (0, import_react.useEffect)(() => {
      if (battle && (battle.phase === "won" || battle.phase === "lost") && battle.log.length > 0) {
        if (battle.phase === "won" && !battle._ended) {
          handleBattleEnd(true);
          setBattle((b) => b ? { ...b, _ended: true } : b);
        } else if (battle.phase === "lost" && !battle._ended) {
          handleBattleEnd(false);
          setBattle((b) => b ? { ...b, _ended: true } : b);
        }
      }
    }, [battle?.phase]);
    const isDark = true;
    const S = (0, import_react.useMemo)(() => ({
      app: {
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        fontFamily: '"Anthropic Sans", system-ui, sans-serif',
        color: "var(--color-text-primary, #e8e6df)",
        background: "var(--color-background-tertiary, #1a1a1e)",
        position: "relative",
        overflow: "hidden"
      },
      topBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        borderBottom: "0.5px solid var(--color-border-tertiary, #333)",
        background: "var(--color-background-primary, #232327)"
      },
      content: {
        padding: "12px 16px",
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        flexDirection: "column",
        gap: 12
      },
      nav: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px 0",
        borderTop: "0.5px solid var(--color-border-tertiary, #333)",
        background: "var(--color-background-primary, #232327)",
        position: "sticky",
        bottom: 0
      },
      navItem: (active) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        fontSize: 10,
        cursor: "pointer",
        userSelect: "none",
        color: active ? "#AFA9EC" : "var(--color-text-tertiary, #777)",
        fontWeight: active ? 600 : 400,
        transition: "color .15s"
      }),
      card: {
        background: "var(--color-background-primary, #232327)",
        borderRadius: 12,
        padding: "14px 16px",
        border: "0.5px solid var(--color-border-tertiary, #333)"
      },
      btn: (variant) => ({
        padding: "10px 16px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        fontWeight: 500,
        fontSize: 13,
        textAlign: "center",
        transition: "all .15s",
        ...variant === "primary" ? { background: "#7F77DD", color: "#fff" } : variant === "gold" ? { background: "#EF9F27", color: "#fff" } : variant === "danger" ? { background: "#E24B4A", color: "#fff" } : { background: "var(--color-background-secondary, #2c2c30)", color: "var(--color-text-primary, #e8e6df)" }
      }),
      miniCard: (rarity, selected) => ({
        width: 64,
        minHeight: 88,
        borderRadius: 8,
        padding: "6px 4px",
        border: `${selected ? 2 : rarity === "legendary" ? 1.5 : 0.5}px solid ${selected ? "#AFA9EC" : rarity === "legendary" ? "#FAC775" : rarity === "epic" ? "#AFA9EC" : rarity === "rare" ? "#5DCAA5" : "var(--color-border-tertiary, #333)"}`,
        background: selected ? "#26215C" : "var(--color-background-primary, #232327)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        cursor: "pointer",
        position: "relative",
        transition: "all .15s",
        flexShrink: 0,
        fontSize: 9,
        color: "var(--color-text-primary, #e8e6df)"
      }),
      badge: (rarity) => ({
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 8,
        fontSize: 10,
        fontWeight: 500,
        background: RARITIES[rarity]?.darkBg,
        color: RARITIES[rarity]?.color
      })
    }), [isDark]);
    const ShapeIcon = ({ shape, color, size = 24 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 32 32" }, SHAPES[shape]?.(color) || SHAPES.circle(color));
    const MiniCard = ({ cardDef, onClick, selected, showStats, battleCard }) => {
      const c = battleCard || cardDef;
      const r = RARITIES[cardDef.rarity];
      const ab = getAbility(cardDef.abilityId);
      return /* @__PURE__ */ React.createElement("div", { style: S.miniCard(cardDef.rarity, selected), onClick, title: ab.desc ? `${ab.name}: ${ab.desc}` : cardDef.name }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 3, left: 5, fontSize: 9, color: "#378ADD", fontWeight: 600 } }, c.cost || cardDef.cost), battleCard?.shielded && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 2, right: 4, fontSize: 8, color: "#378ADD" } }, "\u25C8"), /* @__PURE__ */ React.createElement(ShapeIcon, { shape: cardDef.shape, color: r.color, size: 22 }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 8, fontWeight: 500, textAlign: "center", lineHeight: 1.1, maxWidth: 56, overflow: "hidden" } }, cardDef.name), ab.id !== "none" && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 7, color: r.color, fontWeight: 500 } }, ab.name), showStats !== false && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", width: "100%", padding: "0 4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: "#EF9F27", fontWeight: 600 } }, battleCard ? c.currentAtk : cardDef.atk), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, color: "#E24B4A", fontWeight: 600 } }, battleCard ? c.currentHp : cardDef.hp)));
    };
    const Toasts = () => /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", top: 12, left: "50%", transform: "translateX(-50%)", zIndex: 999, display: "flex", flexDirection: "column", gap: 6, maxWidth: 380, width: "90%" } }, toasts.map((t) => /* @__PURE__ */ React.createElement("div", { key: t.id, style: {
      padding: "10px 16px",
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 500,
      background: t.type === "error" ? "#E24B4A" : t.type === "success" ? "#1D9E75" : "#7F77DD",
      color: "#fff",
      animation: "slideDown .3s ease",
      boxShadow: "0 4px 12px rgba(0,0,0,.15)"
    } }, t.msg)));
    const HomeScreen = () => {
      const wr = game.stats.totalGames > 0 ? Math.round(game.stats.wins / game.stats.totalGames * 100) : 0;
      const collected = new Set(game.collection).size;
      return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "16px 0 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" } }, "Deck"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--color-text-tertiary, #999)", marginTop: 2 } }, "v1.0")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "Cards collected"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 600 } }, collected, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "var(--color-text-tertiary)" } }, "/", ALL_CARDS.length))), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "Win rate"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 600 } }, wr, "%")), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "AI Tier"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 600 } }, "Tier ", game.aiTier), /* @__PURE__ */ React.createElement("div", { style: { height: 4, borderRadius: 2, background: "var(--color-background-secondary)", marginTop: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { height: 4, borderRadius: 2, background: "#7F77DD", width: `${game.aiTier * 10}%`, transition: "width .3s" } }))), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "Coins"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 18, fontWeight: 600, color: "#EF9F27" } }, game.coins.toLocaleString()))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "Record"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 500 } }, game.stats.wins, "W \xB7 ", game.stats.losses, "L")), /* @__PURE__ */ React.createElement("div", { style: S.card }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "Games played"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 500 } }, game.stats.totalGames))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 8 } }, /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: startBattle }, "Battle AI"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("gold"), flex: 1 }, onClick: () => setScreen("packs") }, "Open Packs")));
    };
    const PackScreen = () => /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600 } }, "Pack Shop"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--color-text-secondary)" } }, "Coins: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#EF9F27", fontWeight: 600 } }, game.coins)), !packCards ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { ...S.card, textAlign: "center", padding: "32px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 100, height: 130, margin: "0 auto", borderRadius: 12, border: "2px solid #7F77DD", background: "#26215C", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 36, height: 36, borderRadius: "50%", border: "2px solid #7F77DD", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#7F77DD" } }, "?"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#7F77DD" } }, "5 Cards")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, marginTop: 12 } }, "Standard Pack"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "1 guaranteed Rare or better")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("gold"), flex: 1 }, onClick: () => handleOpenPack(false) }, "Open \xB7 100 coins"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: () => handleOpenPack(true) }, "Premium \xB7 200"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 500, textAlign: "center" } }, "Tap cards to reveal!"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", padding: "8px 0" } }, packCards.map((card, i) => {
      const revealed = revealedCards.includes(i);
      const r = RARITIES[card.rarity];
      return /* @__PURE__ */ React.createElement("div", { key: i, onClick: () => revealCard(i), style: {
        width: 72,
        height: 100,
        borderRadius: 10,
        cursor: "pointer",
        border: `1.5px solid ${revealed ? r.color : "#7F77DD"}`,
        background: revealed ? r.darkBg : "#26215C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        transition: "all .4s",
        transform: revealed ? "rotateY(0deg) scale(1.05)" : "rotateY(0deg)"
      } }, revealed ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ShapeIcon, { shape: card.shape, color: r.color, size: 24 }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontWeight: 600 } }, card.name), /* @__PURE__ */ React.createElement("div", { style: S.badge(card.rarity) }, r.label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, fontSize: 9 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#EF9F27" } }, card.atk), /* @__PURE__ */ React.createElement("span", { style: { color: "#E24B4A" } }, card.hp))) : /* @__PURE__ */ React.createElement("div", { style: { fontSize: 24, color: "#7F77DD" } }, "?"));
    })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, revealedCards.length < 5 && /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), flex: 1 }, onClick: revealAll }, "Reveal All"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: () => {
      setPackCards(null);
      setRevealedCards([]);
    } }, revealedCards.length === 5 ? "Done" : "Skip"))));
    const CollectionScreen = () => {
      const [filter, setFilter] = (0, import_react.useState)("all");
      const owned = new Set(game.collection);
      const filtered = ALL_CARDS.filter((c) => owned.has(c.id) && (filter === "all" || c.rarity === filter));
      return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600 } }, "Collection"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--color-text-tertiary)" } }, owned.size, "/", ALL_CARDS.length)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } }, ["all", "common", "rare", "epic", "legendary"].map((f) => /* @__PURE__ */ React.createElement("button", { key: f, onClick: () => setFilter(f), style: {
        ...S.badge(f === "all" ? "common" : f),
        cursor: "pointer",
        border: "none",
        opacity: filter === f ? 1 : 0.5,
        transition: "opacity .15s"
      } }, f === "all" ? "All" : RARITIES[f].label))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(68px, 1fr))", gap: 6 } }, filtered.map((c) => /* @__PURE__ */ React.createElement(MiniCard, { key: c.id, cardDef: c, onClick: () => {
      } }))), filtered.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: 24, fontSize: 13, color: "var(--color-text-tertiary)" } }, "No cards found"));
    };
    const DecksScreen = () => /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600 } }, "Decks"), /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: () => startDeckEdit(null) }, "+ New Deck")), game.decks.map((d) => /* @__PURE__ */ React.createElement("div", { key: d.id, style: { ...S.card, display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 500 } }, d.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--color-text-tertiary)" } }, d.cardIds.length, "/", DECK_SIZE, " cards")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { style: S.btn(game.activeDeckId === d.id ? "primary" : void 0), onClick: () => setGame((g) => ({ ...g, activeDeckId: d.id })) }, game.activeDeckId === d.id ? "Active" : "Use"), /* @__PURE__ */ React.createElement("button", { style: S.btn(), onClick: () => startDeckEdit(d.id) }, "Edit")))), game.decks.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: 24, fontSize: 13, color: "var(--color-text-tertiary)" } }, "No decks yet. Create one!"));
    const DeckBuilder = () => {
      const [builderFilter, setBuilderFilter] = (0, import_react.useState)("all");
      const owned = new Set(game.collection);
      const available = ALL_CARDS.filter((c) => owned.has(c.id) && (builderFilter === "all" || c.rarity === builderFilter)).sort((a, b) => a.cost - b.cost);
      const deckCards = deckBuilderCards.map((id) => ALL_CARDS.find((c) => c.id === id)).filter(Boolean);
      return /* @__PURE__ */ React.createElement("div", { style: S.content }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("button", { style: S.btn(), onClick: () => setScreen("decks") }, "\u2190 Back"), /* @__PURE__ */ React.createElement(
        "input",
        {
          value: deckName,
          onChange: (e) => setDeckName(e.target.value),
          style: {
            fontSize: 14,
            fontWeight: 500,
            border: "none",
            background: "transparent",
            textAlign: "center",
            color: "var(--color-text-primary)",
            outline: "none",
            width: 120
          }
        }
      ), /* @__PURE__ */ React.createElement("button", { style: S.btn("primary"), onClick: saveDeck }, "Save")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--color-text-tertiary)", textAlign: "center" } }, deckBuilderCards.length, "/", DECK_SIZE, " cards"), /* @__PURE__ */ React.createElement("div", { style: { ...S.card, padding: "8px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 500, marginBottom: 6 } }, "Deck"), deckCards.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--color-text-tertiary)", textAlign: "center", padding: 8 } }, "Add cards from below") : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 } }, deckCards.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, onClick: () => removeFromDeck(i), style: {
        padding: "3px 8px",
        borderRadius: 6,
        fontSize: 10,
        fontWeight: 500,
        cursor: "pointer",
        background: RARITIES[c.rarity].darkBg,
        color: RARITIES[c.rarity].color,
        border: `0.5px solid ${RARITIES[c.rarity].color}`
      }, title: "Click to remove" }, c.cost, "\u2B21 ", c.name)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 } }, ["all", "common", "rare", "epic", "legendary"].map((f) => /* @__PURE__ */ React.createElement("button", { key: f, onClick: () => setBuilderFilter(f), style: {
        ...S.badge(f === "all" ? "common" : f),
        cursor: "pointer",
        border: "none",
        opacity: builderFilter === f ? 1 : 0.5
      } }, f === "all" ? "All" : RARITIES[f].label))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(68px, 1fr))", gap: 6 } }, available.map((c) => {
        const count = deckBuilderCards.filter((id) => id === c.id).length;
        return /* @__PURE__ */ React.createElement("div", { key: c.id, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(MiniCard, { cardDef: c, onClick: () => addToDeck(c.id), selected: count > 0 }), count > 0 && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: -4, right: -4, width: 16, height: 16, borderRadius: "50%", background: "#7F77DD", color: "#fff", fontSize: 9, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center" } }, count));
      })));
    };
    const BattleScreen = () => {
      const [selectedHand, setSelectedHand] = (0, import_react.useState)(null);
      const [attackMode, setAttackMode] = (0, import_react.useState)(null);
      const logRef = (0, import_react.useRef)(null);
      (0, import_react.useEffect)(() => {
        if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
      }, [battle?.log]);
      if (!battle) return null;
      const isOver = battle.phase === "won" || battle.phase === "lost";
      return /* @__PURE__ */ React.createElement("div", { style: { ...S.content, gap: 6, padding: "8px 12px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--color-text-tertiary)" } }, "AI Tier ", game.aiTier), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: 8, fontSize: 10, color: "var(--color-text-tertiary)" } }, "Cards: ", battle.aiHand.length + battle.aiDeck.length)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#E24B4A", fontSize: 10 } }, "HP"), /* @__PURE__ */ React.createElement("div", { style: { width: 60, height: 6, borderRadius: 3, background: "var(--color-background-secondary)" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 6, borderRadius: 3, background: "#E24B4A", width: `${battle.aiHp / STARTING_HP * 100}%`, transition: "width .3s" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600, minWidth: 18 } }, battle.aiHp))), /* @__PURE__ */ React.createElement("div", { style: { minHeight: 80, padding: "6px 4px", borderRadius: 8, background: "rgba(226,75,74,.08)", display: "flex", gap: 4, alignItems: "center", justifyContent: "center", flexWrap: "wrap" } }, battle.aiBoard.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "Empty") : battle.aiBoard.map((bc, i) => {
        const def = ALL_CARDS.find((c) => c.id === bc.id) || bc;
        const selCard = attackMode !== null ? battle.playerBoard[attackMode] : null;
        const canTarget = selCard && !selCard.hasAttacked && selCard.canAttack && !selCard.justPlayed;
        return /* @__PURE__ */ React.createElement("div", { key: bc.uid, onClick: () => {
          if (attackMode !== null && canTarget) {
            attackWithCard(attackMode, i);
            setAttackMode(null);
          }
        }, style: { cursor: canTarget ? "crosshair" : "default" } }, /* @__PURE__ */ React.createElement(MiniCard, { cardDef: def, battleCard: bc, showStats: true }));
      })), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", fontSize: 10, color: "var(--color-text-tertiary)" } }, "Turn ", battle.turn, " \xB7 ", isOver ? battle.phase === "won" ? "Victory!" : "Defeat" : battle.isPlayerTurn ? "Your turn" : "AI thinking..."), /* @__PURE__ */ React.createElement("div", { style: { minHeight: 80, padding: "6px 4px", borderRadius: 8, background: "rgba(127,119,221,.08)", display: "flex", gap: 4, alignItems: "center", justifyContent: "center", flexWrap: "wrap" } }, battle.playerBoard.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "Empty") : battle.playerBoard.map((bc, i) => {
        const def = ALL_CARDS.find((c) => c.id === bc.id) || bc;
        const canAtk = !bc.hasAttacked && bc.canAttack && !bc.justPlayed && battle.isPlayerTurn && !isOver;
        const canSelect = battle.isPlayerTurn && !isOver;
        return /* @__PURE__ */ React.createElement("div", { key: bc.uid, onClick: () => {
          if (canSelect) setAttackMode(attackMode === i ? null : i);
        }, style: {
          cursor: canSelect ? "pointer" : "default",
          outline: attackMode === i ? "2px solid #7F77DD" : "none",
          borderRadius: 10
        } }, /* @__PURE__ */ React.createElement(MiniCard, { cardDef: def, battleCard: bc, selected: attackMode === i }));
      })), attackMode !== null && (() => {
        const sel = battle.playerBoard[attackMode];
        const canAtk = sel && !sel.hasAttacked && sel.canAttack && !sel.justPlayed;
        return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, canAtk && /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("danger"), fontSize: 11, padding: "6px 12px", flex: 1 }, onClick: () => {
          attackWithCard(attackMode, -1);
          setAttackMode(null);
        } }, "Attack Face"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("gold"), fontSize: 11, padding: "6px 12px", flex: 1 }, onClick: () => {
          recallCard(attackMode);
          setAttackMode(null);
        } }, "Recall (1 mana)"), /* @__PURE__ */ React.createElement("button", { style: { ...S.btn(), fontSize: 11, padding: "6px 12px" }, onClick: () => setAttackMode(null) }, "Cancel"));
      })(), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#E24B4A", fontSize: 10 } }, "HP"), /* @__PURE__ */ React.createElement("div", { style: { width: 60, height: 6, borderRadius: 3, background: "var(--color-background-secondary)" } }, /* @__PURE__ */ React.createElement("div", { style: { height: 6, borderRadius: 3, background: "#E24B4A", width: `${battle.playerHp / STARTING_HP * 100}%`, transition: "width .3s" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 600 } }, battle.playerHp)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 2 } }, Array.from({ length: battle.playerMaxMana }, (_, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { width: 10, height: 10, borderRadius: "50%", border: "1px solid #378ADD", background: i < battle.playerMana ? "#378ADD" : "transparent", transition: "all .2s" } }))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--color-text-tertiary)" } }, "Deck: ", battle.playerDeck.length)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, overflowX: "auto", padding: "4px 0", minHeight: 92 } }, battle.playerHand.map((card, i) => {
        const def = ALL_CARDS.find((c) => c.id === card.id) || card;
        const canPlay = card.cost <= battle.playerMana && battle.isPlayerTurn && !isOver && battle.playerBoard.length < MAX_BOARD;
        return /* @__PURE__ */ React.createElement("div", { key: card.uid, style: { opacity: canPlay ? 1 : 0.5, transition: "opacity .15s" } }, /* @__PURE__ */ React.createElement(MiniCard, { cardDef: def, onClick: () => {
          if (canPlay) playCard(i);
        }, selected: selectedHand === i }));
      })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, !isOver ? /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: endTurn, disabled: !battle.isPlayerTurn }, "End Turn") : /* @__PURE__ */ React.createElement("button", { style: { ...S.btn("primary"), flex: 1 }, onClick: () => {
        setBattle(null);
        setScreen("home");
      } }, "Back to Home")), /* @__PURE__ */ React.createElement("div", { ref: logRef, style: { maxHeight: 80, overflowY: "auto", fontSize: 10, color: "var(--color-text-tertiary)", padding: 6, borderRadius: 6, background: "var(--color-background-secondary)" } }, battle.log.slice(-8).map((l, i) => /* @__PURE__ */ React.createElement("div", { key: i }, l))));
    };
    const navItems = [
      { id: "home", label: "Home", icon: "\u25C9" },
      { id: "packs", label: "Packs", icon: "\u25C6" },
      { id: "collection", label: "Cards", icon: "\u25C7" },
      { id: "decks", label: "Decks", icon: "\u2630" },
      { id: "battle", label: "Battle", icon: "\u2694" }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: S.app }, /* @__PURE__ */ React.createElement("style", null, `
        @keyframes slideDown { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(127,119,221,.3); border-radius: 2px; }
      `), /* @__PURE__ */ React.createElement(Toasts, null), /* @__PURE__ */ React.createElement("div", { style: S.topBar }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600, letterSpacing: 1 } }, "DECK"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 500, color: "#EF9F27" } }, "\u2B21 ", game.coins.toLocaleString())), screen === "home" && /* @__PURE__ */ React.createElement(HomeScreen, null), screen === "packs" && /* @__PURE__ */ React.createElement(PackScreen, null), screen === "collection" && /* @__PURE__ */ React.createElement(CollectionScreen, null), screen === "decks" && /* @__PURE__ */ React.createElement(DecksScreen, null), screen === "deckbuilder" && /* @__PURE__ */ React.createElement(DeckBuilder, null), screen === "battle" && /* @__PURE__ */ React.createElement(BattleScreen, null), screen !== "deckbuilder" && /* @__PURE__ */ React.createElement("div", { style: S.nav }, navItems.map((n) => /* @__PURE__ */ React.createElement("div", { key: n.id, style: S.navItem(screen === n.id), onClick: () => {
      if (n.id === "battle") {
        startBattle();
      } else setScreen(n.id);
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16 } }, n.icon), /* @__PURE__ */ React.createElement("span", null, n.label)))));
  }
  return __toCommonJS(game_exports);
})();
