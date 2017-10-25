# First we'll import the os module
# This will allow us to create file paths across operating systems
import csv

csvpath = 'Resources/netflix_ratings.csv'

movie_input = input('What movie are you interested in? ')

with open(csvpath, newline='') as csvfile:

    # CSV reader specifies delimiter and variable that holds contents
    csvreader = csv.reader(csvfile, delimiter=',')

    #  Each row is read as a row
    for row in csvreader:
        if row[0] == movie_input:
            print('%s is rated %s with a rating of %s' % (row[0], row[1], row[5]))
