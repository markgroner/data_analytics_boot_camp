# Search for the Worst

In this activity, you will perform analysis in Pandas to find the player with the worst stats for a given position.

## Instructions:

* Read the csv file `Soccer2018Data.csv` into a pandas DataFrame and display the first 5 rows.

* List of all of the unique values within the "Preferred Position" column

* Filter the position to only include Strikers (ST)

    * Save this to a new DataFrame called `strikers_2018_df`

* Sort the DataFrame by the values in the "ST" column

* Reset the index of the sorted DataFrame so that the worst player is at index 0

* Show the first 10 stats for the worst player