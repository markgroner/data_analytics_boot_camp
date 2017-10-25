import csv
import os

filepath = os.path.join('resources','myfile.txt')

def read_files(filepath):

    total_sum = 0
    with open(filepath, newline='') as text:
        for line in text:
            total_sum += int(line)
    print(total_sum)

read_files(filepath)
