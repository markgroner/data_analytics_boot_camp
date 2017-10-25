def candy_store():
    # The list of candies to print to the screen
    candy_list = ["Snickers", "Kit Kat", "Sour Patch Kids", "Juicy Fruit", "Swedish Fish", "Skittles", "Hershey Bar", "Reeses", "Starbursts", "M&Ms"]

    # The amount of candy the user will be allowed to choose
    allowance = 5

    # The list used to store all of the candies selected inside of
    candyCart = []
    for i in range(len(candy_list)):
        print('[%s] ' % (str(i)) + candy_list[i])

    # Decide what candy you want
    for choice in range(allowance):
        candy_choice = int(input('Which candy would you like? '))
        while candy_choice not in list(range(len(candy_list))):
            candy_choice = int(input('Invalid choice. Which candy would you like? '))
        candyCart.append(candy_list[candy_choice])

    # Print the candies you brought home
    print('I brought home with me...')
    for candy in candyCart:
        print(candy)

candy_store()
