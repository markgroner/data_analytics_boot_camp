# Frequent Twitter Miles

Airlines get a lot of flack on twitter, especially from big time Journalists who think they are the only ones affected by flying. Well lets see what kind of tone everyone else takes when tweeting at them.

## Instructions

Your goal is to collect ~1000 tweets each for 7 popular airlines. Filter the results using our "Real Person" filter criteria, and then run a VADER sentiment analysis on these values. You should have approximately 300-500 results per airline after filtering.

For each airline, take the averages for "Compound", "Positive", "Negative" and "Netural" results and create a `sentiment` dictionary with these results. Print this summarization dictionary for each airline.

```
{'User': '@SouthwestAir', 'Compound': 0.19493321917808218, 'Positive': 0.14038356164383561, 'Neutral': 0.047453767123287673, 'Negative': 0.81215924657534244, 'Tweet Count': 584}
```

### HINTS

* Start with a subset of data for each airline while testing. Then run the file to collect all 1000 tweets per airline. 

- - -

### Copyright

Trilogy Education Services © 2017. All Rights Reserved.
