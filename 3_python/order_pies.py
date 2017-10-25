
def order_pies():
    pie_list = ["Pecan", "Apple Crisp", "Bean", "Banoffee", "Black Bun", "Blueberry", "Buko", "Burek", "Tamale", "Steak"]
    pie_counter = 0
    pie_options = ''
    continue_ordering_flag = 'y'
    for i in range(len(pie_list)):
        if len(pie_options) == 0:
            pie_options = '(%s) ' % (str(i+1)) + pie_list[i]
        else:
            pie_options = pie_options + ', (%s) ' % (str(i+1)) + pie_list[i]
    while continue_ordering_flag == 'y':
        print(pie_options)
        pie_index = int(input('Which would you like? ')) - 1
        while pie_index not in list(range(0, len(pie_list))):
            pie_index = int(input('Invalid choice. Which would you like? ')) - 1
        pie_choice = pie_list[pie_index]
        print("Great! We'll have that %s right out for you" % (pie_choice))
        pie_counter += 1
        continue_ordering_flag = input('Would you like to make another purchase: (y)es or (n)o? ')
        while continue_ordering_flag not in ['y', 'n']:
            continue_ordering_flag = input('Invalid response. Would you like to make another purchase: (y)es or (n)o? ')
    print('You purchased a total of %s pies.' % (str(pie_counter)))
order_pies()
