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

//// Functions

const refreshDeck = () => {
  deck = []
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
}
refreshDeck()
let deckLength = deck.length
let randDeckNum = Math.floor(Math.random() * deckLength)

const dealCards = (pokerPlayer) => {
  for (i = 0; i < 5; i++) {
    deckLength = deck.length
    randDeckNum = Math.floor(Math.random() * deckLength)

    pokerPlayer.currentHand.push(deck[randDeckNum])

    discardDeck = deck.splice(randDeckNum, 1)
  }
  //remove this hard code
  // pokerPlayer.currentHand.push(deck[0])
  // pokerPlayer.currentHand.push(deck[13])
  // pokerPlayer.currentHand.push(deck[26])
  // pokerPlayer.currentHand.push(deck[3])
  // pokerPlayer.currentHand.push(deck[4])
}
const checkStraight = (pokerPlayer) => {
  let case1 = [2, 3, 4, 5, 14]
  let case2 = [2, 3, 4, 5, 6]
  let case3 = [3, 4, 5, 6, 7]
  let case4 = [4, 5, 6, 7, 8]
  let case5 = [5, 6, 7, 8, 9]
  let case6 = [6, 7, 8, 9, 10]
  let case7 = [7, 8, 9, 10, 11]
  let case8 = [8, 9, 10, 11, 12]
  let case9 = [9, 10, 11, 12, 13]
  let case10 = [10, 11, 12, 13, 14]
  pokerPlayer.currentHandValues.sort((a, b) => a - b)
  if (pokerPlayer.currentHandValues.toString() === case1.toString()) {
    return 5.01
  } else if (pokerPlayer.currentHandValues.toString() === case2.toString()) {
    return 5.02
  } else if (pokerPlayer.currentHandValues.toString() === case3.toString()) {
    return 5.03
  } else if (pokerPlayer.currentHandValues.toString() === case4.toString()) {
    return 5.04
  } else if (pokerPlayer.currentHandValues.toString() === case5.toString()) {
    return 5.05
  } else if (pokerPlayer.currentHandValues.toString() === case6.toString()) {
    return 5.06
  } else if (pokerPlayer.currentHandValues.toString() === case7.toString()) {
    return 5.07
  } else if (pokerPlayer.currentHandValues.toString() === case8.toString()) {
    return 5.08
  } else if (pokerPlayer.currentHandValues.toString() === case9.toString()) {
    return 5.09
  } else if (pokerPlayer.currentHandValues.toString() === case10.toString()) {
    return 5.1
  } else {
    return 0
  }
}
const checkPairs = (pokerPlayer) => {
  let pairNum = 0
  let gapNum = 0
  pokerPlayer.currentHandValues.sort((a, b) => a - b)
  for (i = 0; i < 4; i++) {
    let nextNum = i + 1

    if (
      pokerPlayer.currentHandValues[i].toString() ===
      pokerPlayer.currentHandValues[nextNum].toString()
    ) {
      pairNum++
    }
  }
  if (
    (pokerPlayer.currentHandValues[0].toString() ===
      pokerPlayer.currentHandValues[1].toString() &&
      pokerPlayer.currentHandValues[0].toString() ===
        pokerPlayer.currentHandValues[2].toString()) ||
    (pokerPlayer.currentHandValues[2].toString() ===
      pokerPlayer.currentHandValues[3].toString() &&
      pokerPlayer.currentHandValues[2].toString() ===
        pokerPlayer.currentHandValues[4].toString())
  ) {
    pairNum++
  }
  if (
    (pokerPlayer.currentHandValues[0].toString() ===
      pokerPlayer.currentHandValues[1].toString() &&
      pokerPlayer.currentHandValues[0].toString() ===
        pokerPlayer.currentHandValues[2].toString() &&
      pokerPlayer.currentHandValues[0].toString() ===
        pokerPlayer.currentHandValues[3].toString()) ||
    (pokerPlayer.currentHandValues[1].toString() ===
      pokerPlayer.currentHandValues[2].toString() &&
      pokerPlayer.currentHandValues[1].toString() ===
        pokerPlayer.currentHandValues[3].toString() &&
      pokerPlayer.currentHandValues[1].toString() ===
        pokerPlayer.currentHandValues[4].toString())
  ) {
    pairNum++
  }
  return pairNum
}

//check flush returns a lower float decimal because in a straight flush, high card matters more than suit
const checkFlush = (pokerPlayer) => {
  let suitCase1 = ['clubs', 'clubs', 'clubs', 'clubs', 'clubs']
  let suitCase2 = ['diamonds', 'diamonds', 'diamonds', 'diamonds', 'diamonds']
  let suitCase3 = ['hearts', 'hearts', 'hearts', 'hearts', 'hearts']
  let suitCase4 = ['spades', 'spades', 'spades', 'spades', 'spades']
  if (pokerPlayer.currentHandSuits.toString() === suitCase1.toString()) {
    return 6.001
  } else if (pokerPlayer.currentHandSuits.toString() === suitCase2.toString()) {
    return 6.002
  } else if (pokerPlayer.currentHandSuits.toString() === suitCase3.toString()) {
    return 6.003
  } else if (pokerPlayer.currentHandSuits.toString() === suitCase4.toString()) {
    return 6.004
  } else {
    return 0
  }
}
const checkHighCard = (pokerPlayer) => {}

const checkHand = (pokerPlayer) => {
  //add values and suits
  pokerPlayer.currentHand.forEach((element) => {
    pokerPlayer.currentHandValues.push(element.value)
    pokerPlayer.currentHandSuits.push(element.suit)
  })

  if (checkStraight(pokerPlayer) != 0 && checkFlush != 0) {
    pokerPlayer.handWorth = checkStraight(pokerPlayer) + checkFlush(pokerPlayer)
  } else if (checkPairs(pokerPlayer) === 5) {
    pokerPlayer.handWorth = 8
  } else if (checkPairs(pokerPlayer) === 4) {
    pokerPlayer.handWorth = 7
  } else if (checkFlush(pokerPlayer) != 0) {
    pokerPlayer.handWorth = checkFlush(pokerPlayer)
  } else if (checkStraight(pokerPlayer) != 0) {
    pokerPlayer.handWorth = checkStraight(pokerPlayer)
  } else if (checkPairs(pokerPlayer) === 3) {
    pokerPlayer.handWorth = 4
  } else if (checkPairs(pokerPlayer) === 2) {
    pokerPlayer.handWorth = 3
  } else if (checkPairs(pokerPlayer) === 1) {
    pokerPlayer.handWorth = 2
  } else {
    pokerPlayer.handWorth = 0
  }
}
const reDealCards = (...arguments) => {
  arguments.forEach((cardIndex) => {
    deckLength = deck.length
    randDeckNum = Math.floor(Math.random() * deckLength)
    userPlayer.currentHand[cardIndex] = deck[randDeckNum]
    discardDeck = deck.splice(randDeckNum, 1)
  })
}

const updateCards = () => {
  userPlayer.currentHand.forEach((element) => {
    let crdVal = document.createElement('p')
    crdVal.innerText = element.value
    let crdSut = document.createElement('p')
    crdSut.innerText = element.suit
    cardList.append(crdSut, crdVal)
  })
}

// checkHand(userPlayer)
// checkHand(aiPlayer)

//DOM Manipulation
let cardList = document.querySelector('.cardList')
let dealButton = document.querySelector('.deal')
let button = document.querySelector('.redeal')
let c1button = document.querySelector('.card1out')

button.addEventListener('click', function (event) {
  reDealCards(redealArray)
  while (cardList.firstChild) {
    cardList.removeChild(cardList.firstChild)
  }
  updateCards()
})
dealButton.addEventListener('click', () => {
  dealCards(userPlayer)
  dealCards(aiPlayer)
  updateCards()
  document.querySelector('.deal').remove()
})
