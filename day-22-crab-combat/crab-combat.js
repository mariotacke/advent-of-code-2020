const PRINT_COMBAT_TEXT = false;

function print () {
  if (PRINT_COMBAT_TEXT) {
    const args = Array.from(arguments);

    console.log(...args);
  }
}

class Node {
  constructor (value) {
    this.value = value;
    this._previous = null;
    this._next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addLast (value) {
    const newNode = new Node(value);

    if (this.tail) {
      newNode._previous = this.tail;
      this.tail._next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  removeFirst () {
    if (!this.head) {
      return null;
    }

    const removedNode = this.head;

    if (this.head._next) {
      this.head = this.head._next;
      this.head._previous = null;
    } else {
      this.head = null;
    }

    this.size--;

    return removedNode.value;
  }
}

const linkedListToArray = (linkedList) => {
  const array = [];

  let node = linkedList.head;

  while (node !== null) {
    array.push(node.value);

    node = node._next;
  }

  return array;
};

module.exports = (input) => {
  const decks = input.split('\n\n').map((cards) => {
    const deck = new LinkedList();

    cards.split('\n').slice(1).forEach((card) => deck.addLast(+card));

    return deck;
  });

  let round = 1;

  while (decks[0].size && decks[1].size) {
    print(`-- Round ${round} --`);
    print(`Player 1's deck: ${linkedListToArray(decks[0]).join(', ')}`);
    print(`Player 2's deck: ${linkedListToArray(decks[1]).join(', ')}`);

    const card1 = decks[0].removeFirst();
    const card2 = decks[1].removeFirst();

    print(`Player 1 plays: ${card1}`);
    print(`Player 2 plays: ${card2}`);

    if (card1 > card2) {
      print('Player 1 wins the round!\n');
      decks[0].addLast(card1);
      decks[0].addLast(card2);
    } else {
      print('Player 2 wins the round!\n');
      decks[1].addLast(card2);
      decks[1].addLast(card1);
    }

    round++;
  }

  print('== Post-game results==');
  print(`Player 1's deck: ${linkedListToArray(decks[0]).join(', ')}`);
  print(`Player 2's deck: ${linkedListToArray(decks[1]).join(', ')}`);

  const winningDeck = linkedListToArray(decks[0].size > 0 ? decks[0] : decks[1]);
  const winningScore = winningDeck.reverse().reduce((score, card, i) => score + card * (i + 1), 0);

  return winningScore;
};
