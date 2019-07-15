answer = []

answer.append('   ')
answer.append('   ')
answer.append('   ')
answer.append('   ')
answer.append('   ')
answer.append('   ')
answer.append('   ')
answer.append('   ')
answer.append('   ')

player_choice = 0
game_start = 0
player_tile = 0





print("Welcome to this game of Tic Tac Toe!!")
while player_choice == 0:
    player_start = input('Would you like to be X or O ?')

    if player_start.upper() == 'X':
        player1 = ' X '
        player2 = ' O '
        player_choice = 1
    elif player_start.upper() == 'O':
        player1 = ' O '
        player2 = ' X '
        player_choice = 1
    else:
        player_start = input('Would you like to be X or O ?')

while game_start != 2:

    ticTacToe_board = []
    ticTacToe_board.append("    |       |             |       |")
    ticTacToe_board.append(f"{answer[0]} |  {answer[1]}  | {answer[2]}      1  |   2   |  3")
    ticTacToe_board.append("------------------    ------------------")
    ticTacToe_board.append("    |       |             |       |")
    ticTacToe_board.append(f"{answer[3]} |  {answer[4]}  | {answer[5]}      4  |   5   |  6")
    ticTacToe_board.append("    |       |             |       |")
    ticTacToe_board.append("------------------    ------------------")
    ticTacToe_board.append(f"{answer[6]} |  {answer[7]}  | {answer[8]}      7  |   8   |  9")
    ticTacToe_board.append("    |       |             |       |")

    for item in ticTacToe_board:
        print(item)

    if game_start == 0:
        player_tile = int(input('Player One please Pick a tile by one of the numbers shown: '))
        answer[player_tile-1] = player1
        game_start = 1
    elif game_start == 1:
        player_tile = int(input('Player Two please Pick a tile by one of the numbers shown: '))
        answer[player_tile-1] = player2
        game_start = 0

    if answer[0] == player1 and answer[1] == player1 and answer[2] == player1 or answer[3] == player1 and answer[4] == player1 and answer[5] == player1 or answer[6] == player1 and answer[7] == player1 and answer[8] == player1 or answer[0] == player1 and answer[3] == player1 and answer[6] == player1 or answer[1] == player1 and answer[4] == player1 and answer[7] == player1 or answer[2] == player1 and answer[5] == player1 and answer[8] == player1 or answer[2] == player1 and answer[4] == player1 and answer[6] == player1 or answer[0] == player1 and answer[4] == player1 and answer[8] == player1:
        for item in ticTacToe_board:
            print(item)
        print("Player One is the winner!")
        game_start = 2
    elif answer[0] == player2 and answer[1] == player2 and answer[2] == player2 or answer[3] == player2 and answer[4] == player2 and answer[5] == player2 or answer[6] == player2 and answer[7] == player2 and answer[8] == player2 or answer[0] == player2 and answer[3] == player2 and answer[6] == player2 or answer[1] == player2 and answer[4] == player2 and answer[7] == player2 or answer[2] == player2 and answer[5] == player2 and answer[8] == player2 or answer[2] == player2 and answer[4] == player2 and answer[6] == player2 or answer[0] == player2 and answer[4] == player2 and answer[8] == player2:
        for item in ticTacToe_board:
            print(item)
        print("Player Two is the winner!")
        game_start = 2
