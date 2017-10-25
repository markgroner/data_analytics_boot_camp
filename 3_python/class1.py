from random import randint


def get_choices():
    rock_paper_scissors_list = ['r', 's', 'p']
    user_choice = input('Rock, paper, or scissors ("r","p", or "s")? ')
    while user_choice not in rock_paper_scissors_list:
        user_choice = input('Invalid Response. Rock, paper, or scissors ("r","p", or "s")? ')
    rock_paper_scissors_list = ['r', 's', 'p']
    computer_choice = rock_paper_scissors_list[randint(0, 2)]
    return [user_choice, computer_choice]


def determine_winner():
    player_choices =  get_choices()
    user_choice = player_choices[0]
    computer_choice = player_choices[1]
    if user_choice == computer_choice:
        print('You both played "%s". Pick again' % (user_choice))
    elif user_choice == 'r':
        if computer_choice == 's':
            print('Computer chose scissors. You win!')
        else:
            print('Computer chose paper. You lose!')
    elif user_choice == 's':
        if computer_choice == 'p':
            print('Computer chose paper. You win!')
        else:
            print('Computer chose rock. You lose!')
    elif user_choice == 'p':
        if computer_choice == 'r':
            print('Computer chose rock. You win!')
        else:
            print('Computer chose scissors. You lose!')


determine_winner()
