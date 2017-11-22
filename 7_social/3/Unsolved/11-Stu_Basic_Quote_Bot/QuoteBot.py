# Dependencies
import tweepy
import time
import os


# Twitter API Keys
consumer_key = os.getenv("consumer_key")
consumer_secret = os.getenv("consumer_secret")
access_token = os.getenv("access_token")
access_token_secret = os.getenv("access_token_secret")


# Twitter credentials
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth, parser=tweepy.parsers.JSONParser())

    
# Create quotes to tweet
quote_list = []


# Create function for tweeting
def QuoteItUp(quote_num):

    # Tweet the next quote

    # Print success message


# Create a loop that tweets one quote per minute until
# all of the quotes have been tweeted

