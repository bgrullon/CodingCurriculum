import random

loopIteration = 0


class Blackjack:

    def __init__(self, name):
        self.name = name

    def gamestart(self):
        return self.name+' received two cards:'

    def hit(self):
        raise NotImplementedError("Abstract method not implemented")

    def stay(self):
        raise NotImplementedError("Abstract method not implemented")

    def check(self):
        raise NotImplementedError("Abstract method not implemented")


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
        print("Current total: ", sum(self.cards))
        return self.cards

    def stay(self):
        global loopIteration
        if 1 in self.cards:
            if sum(self.cards) < 11:
                if sum(self.cards) + 10 == 21:
                    loopIteration = 1
                    print("YOU WIN!", sum(self.cards))
                else:
                    return sum(self.cards) + 10
            else:
                if sum(self.cards) > 21:
                    loopIteration = 1
                    print(sum(self.cards), " BUST! Dealer wins!")
                elif sum(self.cards) == 21:
                    loopIteration = 1
                    print("YOU WIN!", sum(self.cards))
                else:
                    return sum(self.cards)
        else:
            if sum(self.cards) > 21:
                loopIteration = 1
                print(sum(self.cards), " BUST! Dealer wins!")
            elif sum(self.cards) == 21:
                loopIteration = 1
                print("YOU WIN!", sum(self.cards))
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
        global loopIteration
        while sum(self.cards) < 17 or sum(self.cards) > 21:
            if 1 in self.cards:
                if sum(self.cards) < 11:
                    if sum(self.cards) + 10 == 21:
                        loopIteration = 1
                        print("Dealer wins with: ", sum(self.cards))
                    else:
                        return sum(self.cards) + 10
                else:
                    if sum(self.cards) > 21:
                        loopIteration = 1
                        print(sum(self.cards), " BUST! Player wins!")
                        break
                    elif sum(self.cards) == 21:
                        loopIteration = 1
                        print("Dealer wins with ", sum(self.cards))
                    else:
                        print("Dealer Hits!", dealer.hit())
            else:
                if sum(self.cards) > 21:
                    loopIteration = 1
                    print(sum(self.cards), " BUST! Player wins!")
                    break
                elif sum(self.cards) == 21:
                    loopIteration = 1
                    print("Dealer wins with ", sum(self.cards))
                else:
                    print("Dealer Hits!", dealer.hit())
        return sum(self.cards)


print("\nTIME FOR SOME BLACKJACK!!!! \n ARE YOU READY ???? \n")
playerOne = Player(input("What is your name?"))
dealer = Dealer("Dealer")

print(playerOne.gamestart())
print(playerOne.deal())
print("Your current total: ", playerOne.stay())
print("Dealers cards: [", dealer.deal(), ", ?]")

while loopIteration == 0:
    pTotal = 0
    dTotal = 0
    nextmove = input("Would you like to stay or hit ?: [0] Stay [1] Hit ")

    if int(nextmove) == 1:
        print(playerOne.hit())
        pTotal = playerOne.stay()
        continue
    else:
        print("Your current total: ", playerOne.stay())
        pTotal = playerOne.stay()
        print("Dealers current Total: ", dealer.stay())
        dTotal = dealer.stay()
        if pTotal > dTotal:
            loopIteration = 1
            print("YOU WIN! ", pTotal)
        elif pTotal < dTotal:
            loopIteration = 1
            print("Dealer wins! ", dTotal)
        else:
            loopIteration = 1
            print("It's a TIE! Player: ", pTotal, " and Dealer: ", dTotal)

