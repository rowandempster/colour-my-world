import sys
import tweepy
import os
import requests

def twitter_api():
  auth = tweepy.OAuthHandler('1Qgl0mVHnpgVDjwpQsgUmnWqt', 'WOjYhPMBuYBhfKVd62HRbfIA3cIXrOABKhN63psQOth5Ey3HiJ')  #  (Consumer Key (API Key),  Consumer Secret (API Secret))
  auth.set_access_token('741698627161063425-Jr4gCVs4NncC8pq5Z0ujKgJcVN506uW', 'fOYX56Nfz571EoD7Y2Vd8Uzgb49HAdnFPfNI4ERb0LX5v') # (Access Token, Access Token Secret)
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
