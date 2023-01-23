class pokerPlayer {
  constructor() {
    this.currentHand = []
    this.currentHandValues = []
    this.currentHandSuits = []
    this.handWorth = 0
  }
}
class card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }
}
const userPlayer = new pokerPlayer()
const aiPlayer = new pokerPlayer()

let deck = []
let discardDeck = []

const s2 = new card('spades', 2)
const s3 = new card('spades', 3)
const s4 = new card('spades', 4)
const s5 = new card('spades', 5)
const s6 = new card('spades', 6)
const s7 = new card('spades', 7)
const s8 = new card('spades', 8)
const s9 = new card('spades', 9)
const s10 = new card('spades', 10)
const sj = new card('spades', 11)
const sq = new card('spades', 12)
const sk = new card('spades', 13)
const sa = new card('spades', 14)

const h2 = new card('hearts', 2)
const h3 = new card('hearts', 3)
const h4 = new card('hearts', 4)
const h5 = new card('hearts', 5)
const h6 = new card('hearts', 6)
const h7 = new card('hearts', 7)
const h8 = new card('hearts', 8)
const h9 = new card('hearts', 9)
const h10 = new card('hearts', 10)
const hj = new card('hearts', 11)
const hq = new card('hearts', 12)
const hk = new card('hearts', 13)
const ha = new card('hearts', 14)

const d2 = new card('diamonds', 2)
const d3 = new card('diamonds', 3)
const d4 = new card('diamonds', 4)
const d5 = new card('diamonds', 5)
const d6 = new card('diamonds', 6)
const d7 = new card('diamonds', 7)
const d8 = new card('diamonds', 8)
const d9 = new card('diamonds', 9)
const d10 = new card('diamonds', 10)
const dj = new card('diamonds', 11)
const dq = new card('diamonds', 12)
const dk = new card('diamonds', 13)
const da = new card('diamonds', 14)

const c2 = new card('clubs', 2)
const c3 = new card('clubs', 3)
const c4 = new card('clubs', 4)
const c5 = new card('clubs', 5)
const c6 = new card('clubs', 6)
const c7 = new card('clubs', 7)
const c8 = new card('clubs', 8)
const c9 = new card('clubs', 9)
const c10 = new card('clubs', 10)
const cj = new card('clubs', 11)
const cq = new card('clubs', 12)
const ck = new card('clubs', 13)
const ca = new card('clubs', 14)

deck.push(
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  sj,
  sq,
  sk,
  sa,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  h10,
  hj,
  hq,
  hk,
  ha,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  d10,
  dj,
  dq,
  dk,
  da,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  cj,
  cq,
  ck,
  ca
)
let deckLength = deck.length
let randDeckNum = Math.floor(Math.random() * deckLength)
//// Functions

// userPlayer.currentHand.forEach((Element) => {
//   alert(`You have the ${Element.value} of ${Element.suit}`)
// })
const dealCards = (pokerPlayer) => {
  for (i = 0; i < 5; i++) {
    deckLength = deck.length
    randNum = Math.floor(Math.random() * deckLength)
    pokerPlayer.currentHand.push(deck[randDeckNum])
    discardDeck = deck.splice(randDeckNum, 1)
  }
}

const checkStraight = (pokerPlayer) => {
  if (pokerPlayer.currentHandValues.includes(14, 2, 3, 4, 5)) {
    return 6.01
  } else if (pokerPlayer.currentHandValues.includes(2, 3, 4, 5, 6)) {
    return 6.02
  } else if (pokerPlayer.currentHandValues.includes(3, 4, 5, 6, 7)) {
    return 6.03
  } else if (pokerPlayer.currentHandValues.includes(4, 5, 6, 7, 8)) {
    return 6.04
  } else if (pokerPlayer.currentHandValues.includes(5, 6, 7, 8, 9)) {
    return 6.05
  } else if (pokerPlayer.currentHandValues.includes(6, 7, 8, 9, 10)) {
    return 6.06
  } else if (pokerPlayer.currentHandValues.includes(7, 8, 9, 10, 11)) {
    return 6.07
  } else if (pokerPlayer.currentHandValues.includes(8, 9, 10, 11, 12)) {
    return 6.08
  } else if (pokerPlayer.currentHandValues.includes(9, 10, 11, 12, 13)) {
    return 6.09
  } else if (pokerPlayer.currentHandValues.includes(10, 11, 12, 13, 14)) {
    return 6.1
  } else {
    return 0
  }
}
const checkFlush = (pokerPlayer) => {
  if (
    pokerPlayer.currentHandSuits.includes(
      'clubs',
      'clubs',
      'clubs',
      'clubs',
      'clubs'
    )
  ) {
    return 7.001
  }
  if (
    pokerPlayer.currentHandSuits.includes(
      'diamonds',
      'diamonds',
      'diamonds',
      'diamonds',
      'diamonds'
    )
  ) {
    return 7.002
  }
  if (
    pokerPlayer.currentHandSuits.includes(
      'hearts',
      'hearts',
      'hearts',
      'hearts',
      'hearts'
    )
  )
    return 7.003
}
if (
  pokerPlayer.currentHandSuits.includes(
    'spades',
    'spades',
    'spades',
    'spades',
    'spades'
  )
) {
  return 7.004
}

const checkHand = (pokerPlayer) => {
  //add values and suits
  pokerPlayer.currentHand.forEach((element) => {
    pokerPlayer.currentHandValues.push(element.value)
    pokerPlayer.currentHandSuits.push(element.suit)
  })
  //check straight
  checkStraight(pokerPlayer)
}

dealCards(userPlayer)
dealCards(aiPlayer)
checkHand(userPlayer)
