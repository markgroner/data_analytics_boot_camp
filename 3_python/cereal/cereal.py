import csv
import os

csvpath = os.path.join('resouces','cereal.csv')
csvpath = 'resources/cereal.csv'
cereal_list = []

def cereal():
    with open(csvpath, newline='') as csvfile:
        # CSV reader specifies delimiter and variable that holds contents
        csvreader = csv.reader(csvfile, delimiter=',')
        for cereal in csvreader:
            fiber = cereal[7]
            if float(fiber) >= 5:
                cereal_list.append(cereal[0])
        print(cereal_list)
cereal()
