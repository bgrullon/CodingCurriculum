import random

class Blackjack:

    def __init__(self, name):
        self.name = name

    def gamestart(self):
        return self.name+' received two cards:'


class Player(Blackjack):

    cards = []

    def deal(self):
        for x in range(2):
            if random.randint(1, 52) % 4 == 0:
                self.cards.append(10)
            else:
                self.cards.append(random.randint(1,9))
        return self.cards

    def hit(self):
        self.cards.append(random.randint(1, 10))
        return self.cards

    def stay(self):
        if 1 in self.cards:
            if sum(self.cards) < 11:
                return sum(self.cards) + 10
            else:
                return sum(self.cards)
        else:
            return sum(self.cards)

class Dealer(Blackjack):

    cards = []

    def deal(self):
        for x in range(2):
            if random.randint(1, 52) % 4 == 0:
                self.cards.append(10)
            else:
                self.cards.append(random.randint(1,9))
        return self.cards[0]

    def hit(self):
        self.cards.append(random.randint(1, 10))
        return self.cards

    def stay(self):
        if 1 in self.cards:
            if sum(self.cards) < 11:
                return sum(self.cards) + 10
            else:
                return sum(self.cards)
        else:
            return sum(self.cards)




print("\nTIME FOR SOME BLACKJACK!!!! \n ARE YOU READY ???? \n")
playerOne = Player(input("What is your name?"))
dealer = Dealer("Dealer")

print(playerOne.gamestart())
print(playerOne.deal())
print("Current Total: ", playerOne.stay())
print("Dealers cards: [", dealer.deal(), ", ?]")
nextmove = input("Would you like to stay or hit ?: [0] Stay [1] Hit ")

if int(nextmove) == 1:
    print(playerOne.hit())
    print("Current Total: ", playerOne.stay())
else:
    print("Current Total: ", playerOne.stay())

print("Dealers current Total: ", dealer.stay())

