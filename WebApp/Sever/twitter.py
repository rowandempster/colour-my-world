import sys
import tweepy
import os
import requests

def twitter_api():
  auth = tweepy.OAuthHandler('N5ym5uIVxrA1AEYqNsuPIUXOK', 'iKVjLTULz913P0nvuM8SYvC4tXid6w0Q616ZwZVqexveSMhIuv')
  auth.set_access_token('601485524-IWkk5xa1RNSa0GQOKmq7nkZM134mKFHFoHYZbIzA', 'LFQGGFan057j8PQWJWqJDDLwudcdIESlkm92EzpeC2icG')
  api = tweepy.API(auth)

  return api


def tweet_image(message):
    api = twitter_api()
    filename = './Sever/result.png'
    api.update_with_media(filename, status=message)

def main(argv):
    if len(sys.argv) > 1:
        message = argv[1]
        tweet_image(message)
    else:
        tweet_image('error')

if __name__ == '__main__':
  main(sys.argv)
