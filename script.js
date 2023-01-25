class pokerPlayer {
  constructor() {
    this.currentHand = []
    this.currentHandValues = []
    this.currentHandSuits = []
    this.handWorth = 0
    this.handTitle = ''
    this.pairCards = 0
  }
  resetPlayer() {
    this.currentHand = []
    this.currentHandValues = []
    this.currentHandSuits = []
    this.handWorth = 0
    this.handTitle = ''
    this.pairCards = 0
  }
}
class card {
  constructor(suit, value, imagePath) {
    this.suit = suit
    this.value = value
    this.imagePath = imagePath
  }
}
const userPlayer = new pokerPlayer()
const aiPlayer = new pokerPlayer()
let deck = []
let discardDeck = []
let redealArray = []
let c1Counter = 0
let c2Counter = 0
let c3Counter = 0
let c4Counter = 0
let c5Counter = 0
let displayMessage = document.querySelector('.displayMessage')
let cardList = document.querySelector('.userBar')
let aiCardList = document.querySelector('.aiBar')
let dealButton = document.querySelector('.deal')
let redealButton = document.querySelector('.redeal')
let resetButton = document.querySelector('.reset')
let middleArea = document.querySelector('.middleArea')
let winImg = document.querySelector('#winImg')
let loseImg = document.querySelector('#loseImg')

const s2 = new card('spades', 2, 'card-spades-2.png')
const s3 = new card('spades', 3, 'card-spades-3.png')
const s4 = new card('spades', 4, 'card-spades-4.png')
const s5 = new card('spades', 5, 'card-spades-5.png')
const s6 = new card('spades', 6, 'card-spades-6.png')
const s7 = new card('spades', 7, 'card-spades-7.png')
const s8 = new card('spades', 8, 'card-spades-8.png')
const s9 = new card('spades', 9, 'card-spades-9.png')
const s10 = new card('spades', 10, 'card-spades-10.png')
const sj = new card('spades', 11, 'card-spades-11.png')
const sq = new card('spades', 12, 'card-spades-12.png')
const sk = new card('spades', 13, 'card-spades-13.png')
const sa = new card('spades', 14, 'card-spades-1.png')

const h2 = new card('hearts', 2, 'card-hearts-2.png')
const h3 = new card('hearts', 3, 'card-hearts-3.png')
const h4 = new card('hearts', 4, 'card-hearts-4.png')
const h5 = new card('hearts', 5, 'card-hearts-5.png')
const h6 = new card('hearts', 6, 'card-hearts-6.png')
const h7 = new card('hearts', 7, 'card-hearts-7.png')
const h8 = new card('hearts', 8, 'card-hearts-8.png')
const h9 = new card('hearts', 9, 'card-hearts-9.png')
const h10 = new card('hearts', 10, 'card-hearts-10.png')
const hj = new card('hearts', 11, 'card-hearts-11.png')
const hq = new card('hearts', 12, 'card-hearts-12.png')
const hk = new card('hearts', 13, 'card-hearts-13.png')
const ha = new card('hearts', 14, 'card-hearts-1.png')

const d2 = new card('diamonds', 2, 'card-diamonds-2.png')
const d3 = new card('diamonds', 3, 'card-diamonds-3.png')
const d4 = new card('diamonds', 4, 'card-diamonds-4.png')
const d5 = new card('diamonds', 5, 'card-diamonds-5.png')
const d6 = new card('diamonds', 6, 'card-diamonds-6.png')
const d7 = new card('diamonds', 7, 'card-diamonds-7.png')
const d8 = new card('diamonds', 8, 'card-diamonds-8.png')
const d9 = new card('diamonds', 9, 'card-diamonds-9.png')
const d10 = new card('diamonds', 10, 'card-diamonds-10.png')
const dj = new card('diamonds', 11, 'card-diamonds-11.png')
const dq = new card('diamonds', 12, 'card-diamonds-12.png')
const dk = new card('diamonds', 13, 'card-diamonds-13.png')
const da = new card('diamonds', 14, 'card-diamonds-1.png')

const c2 = new card('clubs', 2, 'card-clubs-2.png')
const c3 = new card('clubs', 3, 'card-clubs-3.png')
const c4 = new card('clubs', 4, 'card-clubs-4.png')
const c5 = new card('clubs', 5, 'card-clubs-5.png')
const c6 = new card('clubs', 6, 'card-clubs-6.png')
const c7 = new card('clubs', 7, 'card-clubs-7.png')
const c8 = new card('clubs', 8, 'card-clubs-8.png')
const c9 = new card('clubs', 9, 'card-clubs-9.png')
const c10 = new card('clubs', 10, 'card-clubs-10.png')
const cj = new card('clubs', 11, 'card-clubs-11.png')
const cq = new card('clubs', 12, 'card-clubs-12.png')
const ck = new card('clubs', 13, 'card-clubs-13.png')
const ca = new card('clubs', 14, 'card-clubs-1.png')

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
  if (pokerPlayer.currentHandValues.toString() === case1.toString()) {
    pokerPlayer.handTitle = '5 High Straight'
    return 5.01
  } else if (pokerPlayer.currentHandValues.toString() === case2.toString()) {
    pokerPlayer.handTitle = '6 High Straight'
    return 5.02
  } else if (pokerPlayer.currentHandValues.toString() === case3.toString()) {
    pokerPlayer.handTitle = '7 High Straight'
    return 5.03
  } else if (pokerPlayer.currentHandValues.toString() === case4.toString()) {
    pokerPlayer.handTitle = '8 High Straight'
    return 5.04
  } else if (pokerPlayer.currentHandValues.toString() === case5.toString()) {
    pokerPlayer.handTitle = '9 High Straight'
    return 5.05
  } else if (pokerPlayer.currentHandValues.toString() === case6.toString()) {
    pokerPlayer.handTitle = '10 High Straight'
    return 5.06
  } else if (pokerPlayer.currentHandValues.toString() === case7.toString()) {
    pokerPlayer.handTitle = 'Jack High Straight'
    return 5.07
  } else if (pokerPlayer.currentHandValues.toString() === case8.toString()) {
    pokerPlayer.handTitle = 'Queen High Straight'
    return 5.08
  } else if (pokerPlayer.currentHandValues.toString() === case9.toString()) {
    pokerPlayer.handTitle = 'King High Straight'
    return 5.09
  } else if (pokerPlayer.currentHandValues.toString() === case10.toString()) {
    pokerPlayer.handTitle = 'Ace High Straight'
    return 5.1
  } else {
    return 0
  }
}
const checkPairs = (pokerPlayer) => {
  let pairNum = 0
  for (i = 0; i < 4; i++) {
    let nextNum = i + 1
    if (
      pokerPlayer.currentHandValues[i].toString() ===
      pokerPlayer.currentHandValues[nextNum].toString()
    ) {
      pokerPlayer.pairCards = pokerPlayer.currentHandValues[i]
      pairNum++
    }
  }

  for (i = 0; i < 3; i++) {
    if (
      pokerPlayer.currentHandValues[i].toString() ===
        pokerPlayer.currentHandValues[i + 1].toString() &&
      pokerPlayer.currentHandValues[i].toString() ===
        pokerPlayer.currentHandValues[i + 2].toString()
    ) {
      pairNum++
      pokerPlayer.pairCards = pokerPlayer.currentHandValues[i]
    }
  }
  for (i = 0; i < 2; i++) {
    if (
      pokerPlayer.currentHandValues[i].toString() ===
        pokerPlayer.currentHandValues[i + 1].toString() &&
      pokerPlayer.currentHandValues[i].toString() ===
        pokerPlayer.currentHandValues[i + 2].toString() &&
      pokerPlayer.currentHandValues[i].toString() ===
        pokerPlayer.currentHandValues[i + 3].toString()
    ) {
      pokerPlayer.pairCards = pokerPlayer.currentHandValues[i]
      pairNum++
    }
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
    pokerPlayer.handTitle = 'Clubs Flush'
    return 6.001
  } else if (pokerPlayer.currentHandSuits.toString() === suitCase2.toString()) {
    pokerPlayer.handTitle = 'Diamonds Flush'
    return 6.002
  } else if (pokerPlayer.currentHandSuits.toString() === suitCase3.toString()) {
    pokerPlayer.handTitle = 'Hearts Flush'
    return 6.003
  } else if (pokerPlayer.currentHandSuits.toString() === suitCase4.toString()) {
    pokerPlayer.handTitle = 'Spades Flush'
    return 6.004
  } else {
    return 0
  }
}
const checkHighCard = (pokerPlayer, card) => {
  switch (card.toString()) {
    case '14':
      pokerPlayer.handWorth += 0.14
      return 'Ace'
      break
    case '13':
      pokerPlayer.handWorth += 0.13
      return 'King'
      break
    case '12':
      pokerPlayer.handWorth += 0.12
      return 'Queen'
      break
    case '11':
      pokerPlayer.handWorth += 0.11
      return 'Jack'
      break
    case '10':
      pokerPlayer.handWorth += 0.1
      return '10'
      break
    case '9':
      pokerPlayer.handWorth += 0.09
      return '9'
      break
    case '8':
      pokerPlayer.handWorth += 0.08
      return '8'
      break
    case '7':
      pokerPlayer.handWorth += 0.07
      return '7'
      break
    case '6':
      pokerPlayer.handWorth += 0.06
      return '6'
      break
    case '5':
      pokerPlayer.handWorth += 0.05
      return '5'
      break
    case '4':
      pokerPlayer.handWorth += 0.04
      return '4'
      break
    case '3':
      pokerPlayer.handWorth += 0.03
      return '3'
      break
    case '2':
      pokerPlayer.handWorth += 0.02
      return '2'
      break
  }
}

const checkHand = (pokerPlayer) => {
  //add values and suits
  pokerPlayer.currentHand.forEach((element) => {
    pokerPlayer.currentHandValues.push(element.value)
    pokerPlayer.currentHandSuits.push(element.suit)
  })
  pokerPlayer.currentHandValues.sort((a, b) => a - b)

  if (checkStraight(pokerPlayer) != 0 && checkFlush != 0) {
    pokerPlayer.handWorth = checkStraight(pokerPlayer) + checkFlush(pokerPlayer)
    pokerPlayer.handTitle = 'Straight Flush'
    return
  } else if (checkPairs(pokerPlayer) === 5) {
    pokerPlayer.handWorth += 8
    pokerPlayer.handTitle = `4 ${checkHighCard(
      pokerPlayer,
      pokerPlayer.pairCards
    )}'s!!`
    return
  } else if (checkPairs(pokerPlayer) === 4) {
    pokerPlayer.handWorth += 7
    pokerPlayer.handTitle = `Full House with 3 ${checkHighCard(
      pokerPlayer,
      pokerPlayer.pairCards
    )}'s`
    return
  } else if (checkFlush(pokerPlayer) != 0) {
    pokerPlayer.handWorth = checkFlush(pokerPlayer)
    return
  } else if (checkStraight(pokerPlayer) != 0) {
    pokerPlayer.handWorth = checkStraight(pokerPlayer)
    return
  } else if (checkPairs(pokerPlayer) === 3) {
    pokerPlayer.handWorth += 4
    pokerPlayer.handTitle = `3 ${checkHighCard(
      pokerPlayer,
      pokerPlayer.pairCards
    )}'s`
    return
  } else if (checkPairs(pokerPlayer) === 2) {
    pokerPlayer.handWorth = 3
    pokerPlayer.handTitle = '2 pair'
    return
  } else if (checkPairs(pokerPlayer) === 1) {
    pokerPlayer.handWorth += 2

    pokerPlayer.handTitle = `a pair of ${checkHighCard(
      pokerPlayer,
      pokerPlayer.pairCards
    )}'s`
    return
  } else if (checkHighCard(pokerPlayer, pokerPlayer.currentHandValues[4])) {
    pokerPlayer.handTitle = `${checkHighCard(
      pokerPlayer,
      pokerPlayer.currentHandValues[4]
    )} High`
  } else {
    alert('error in checking hand worth')
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

const compareHandWorth = (userPlayer, aiPlayer) => {
  checkHand(userPlayer)
  checkHand(aiPlayer)
  if (userPlayer.handWorth > aiPlayer.handWorth) {
    displayMessage.innerText = 'You win! '
    winImg.classList.toggle('invisible')
  } else if (aiPlayer.handWorth > userPlayer.handWorth) {
    displayMessage.innerText = 'You lose! '
    loseImg.classList.toggle('invisible')
  } else if (aiPlayer.handWorth === userPlayer.handWorth) {
    displayMessage.innerText = 'It`s a draw! '
  }

  displayMessage.innerText += `You had ${userPlayer.handTitle} and they had ${aiPlayer.handTitle}`
  document.querySelector('.reset').classList.toggle('invisible')
}
const updateCards = () => {
  userPlayer.currentHand.forEach((element) => {
    let displayCardImage = document.createElement('img')
    displayCardImage.src = 'images/Playing_Cards/' + element.imagePath
    cardList.append(displayCardImage)
    displayCardImage.classList.toggle('selectableCard')
    let aiDisplayCardImage = document.createElement('img')
    aiDisplayCardImage.src = 'images/Playing_Cards/card-back2.png'
    aiCardList.append(aiDisplayCardImage)
  })
}
const resetGame = () => {
  refreshDeck()
  userPlayer.resetPlayer()
  aiPlayer.resetPlayer()
  redealArray = []
  c1Counter = 0
  c2Counter = 0
  c3Counter = 0
  c4Counter = 0
  c5Counter = 0
  while (cardList.firstChild) {
    cardList.removeChild(cardList.firstChild)
  }
  while (aiCardList.firstChild) {
    aiCardList.removeChild(aiCardList.firstChild)
  }
  displayMessage.innerText = 'Click the deal button to begin'
  dealButton.classList.toggle('invisible')
  resetButton.classList.toggle('invisible')
  loseImg.classList = 'invisible'
  winImg.classList = 'invisible'
}

//DOM Manipulation

//Buttons to remove each individual card
const addCardListeners = () => {
  let selectableCard = document.querySelectorAll('.selectableCard')
  selectableCard[0].addEventListener('click', () => {
    if (c1Counter % 2 === 0) {
      redealArray.push(`0`)
      c1Counter++
    } else if (c1Counter % 2 != 0) {
      redealArray.pop()
      c1Counter++
    }
    selectableCard[0].classList.toggle('selected')
  })
  selectableCard[1].addEventListener('click', () => {
    if (c2Counter % 2 === 0) {
      redealArray.push(`1`)
      c2Counter++
    } else if (c2Counter % 2 != 0) {
      redealArray.pop()
      c2Counter++
    }
    selectableCard[1].classList.toggle('selected')
  })
  selectableCard[2].addEventListener('click', () => {
    if (c3Counter % 2 === 0) {
      redealArray.push(`2`)
      c3Counter++
    } else if (c3Counter % 2 != 0) {
      redealArray.pop()
      c3Counter++
    }
    selectableCard[2].classList.toggle('selected')
  })
  selectableCard[3].addEventListener('click', () => {
    if (c4Counter % 2 === 0) {
      redealArray.push(`3`)
      c4Counter++
    } else if (c4Counter % 2 != 0) {
      redealArray.pop()
      c4Counter++
    }
    selectableCard[3].classList.toggle('selected')
  })
  selectableCard[4].addEventListener('click', () => {
    if (c5Counter % 2 === 0) {
      redealArray.push(`4`)
      c5Counter++
    } else if (c5Counter % 2 != 0) {
      redealArray.pop()
      c5Counter++
    }
    selectableCard[4].classList.toggle('selected')
  })
}

dealButton.addEventListener('click', () => {
  dealCards(userPlayer)
  dealCards(aiPlayer)
  updateCards()
  addCardListeners()

  dealButton.classList.toggle('invisible')
  redealButton.classList.toggle('invisible')
  displayMessage.innerText =
    'Select up to 4 cards to change out then click the Redeal button.'
})

redealButton.addEventListener('click', () => {
  reDealCards(...redealArray)
  while (cardList.firstChild) {
    cardList.removeChild(cardList.firstChild)
  }
  updateCards()
  while (aiCardList.firstChild) {
    aiCardList.removeChild(aiCardList.firstChild)
  }
  //shows ais dealt cards
  aiPlayer.currentHand.forEach((element) => {
    let displayCardImage = document.createElement('img')
    displayCardImage.src = 'images/Playing_Cards/' + element.imagePath
    aiCardList.append(displayCardImage)
  })
  redealButton.classList.toggle('invisible')
  compareHandWorth(userPlayer, aiPlayer)
})

resetButton.addEventListener('click', () => {
  resetGame()
})
