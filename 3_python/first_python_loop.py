def print_input_loop(start_number):
    user_input = int(input('How many numbers? '))
    i = 0
    while i <= user_input:
        start_number += 1
        print(start_number)
        i += 1
    continue_input = input('Continue (y/n)? ')
    while continue_input not in ['y','n']:
        continue_input = input('Invalid response. Continue (y/n)? ')
    return (continue_input, start_number)

def main():
    start_number = 0
    user_input = 'y'
    while user_input == 'y':
        loop_return = print_input_loop(start_number)
        user_input = loop_return[0]
        start_number = loop_return[1]

main()
