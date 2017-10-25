import csv
import os


def add_value(item_dictionary):
    add_value_flag = input('Would you like to add an item (y/n)? ')
    while add_value_flag not in ['y', 'n']:
        add_value_flag = input('Invalid response. Would you like to add an item (y/n)? ')
    if add_value_flag == 'y':
        key = input('Which item would you like to add? ')
        while key not in item_dictionary.keys():
            key = input('Invalid response. Which item would you like to add? ')
        value = int(input('How many items would you like to add? '))
        item_dictionary[key] = item_dictionary[key] + value
    else:
        pass
    return item_dictionary

def remove_value(item_dictionary):
    remove_value_flag = input('Would you like to remove an item (y/n)? ')
    while remove_value_flag not in ['y', 'n']:
        remove_value_flag = input('Invalid response. Would you like to remove an item (y/n)? ')
    if remove_value_flag == 'y':
        key = input('Which item would you like to remove? ')
        while key not in item_dictionary.keys():
            key = input('Invalid response. Which item would you like to remove? ')
        value = int(input('How many items would you like to remove? '))
        item_dictionary[key] = item_dictionary[key] - value
    else:
        pass
    return item_dictionary

def display_list(item_dictionary):
    display_results_flag = input('Would you like to display the items (y/n)? ')
    while display_results_flag not in ['y', 'n']:
        display_results_flag = input('Invalid response. Would you like to display the items (y/n)? ')
    if display_results_flag == 'y':
        for key, value in item_dictionary.items():
            print('%s - %s' % (key, value))
    else:
        pass




def main():
    csvpath = os.path.join('resources','store_items.csv')
    item_dictionary = {}
    with open(csvpath, newline='') as csvfile:
        csvreader = csv.reader(csvfile, delimiter=',')
        for item in csvreader:
            item_dictionary[item[0]] = int(item[1])
    print(item_dictionary)

    item_dictionary = add_value(item_dictionary)
    print(item_dictionary)


    item_dictionary = remove_value(item_dictionary)
    print(item_dictionary)

    display_list(item_dictionary)

main()
