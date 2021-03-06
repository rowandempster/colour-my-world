# Colour My World
Automatically colour your sketches using Wacom WILL API on a Deep Learning image recognition framework and post them automatically on twitter with smart hashtags.

Youtube demo (Click Image):
[![here](http://i.imgur.com/cvzJY8T.jpg)](https://www.youtube.com/watch?v=IqWQWgmjnH4&feature=youtu.be  "Colour My World")

To use:

1. Install caffe on your machine
2. Clone repository
3. Download colorization_release_v0.caffemodel using: 
    wget http://eecs.berkeley.edu/~rich.zhang/projects/2016_colorization/files/demo_v0/colorization_release_v0.caffemodel
   Place model in the Webapp folder
4. Install Clarifai python api client
5. Install tweepy and replace token values on twitter.py with your twitter api keys
4. Run server using "node Sever/app.js"
5. Open index on webpage

Using the caffe convolutional neural network framework, our team has created a drawing web app using the Wacom WILL (Universal Ink) API for artists to bring their creations to life with the press of a few buttons in amazing times. Wacom offers a wide range of artist tools that cater towards the most advanced artists and designers. Our tool allows these skilled artists to instantly colourize their sketches using object and feature extraction to intelligently match colours to the sampling pixels on the sketch. This not only adds productivity to the creative process using advanced algorithms in Berkley's deep learning image framework, but also adds a new dimension of creativity to someone's art. It's not everyday that you can say that a computer helped you re-imagine a piece of art. 

On top of the accurate colourization model, our team added hue, saturation, vibrance, and sampling rate features to give the artist even more freedom in which they colourize and gain inspiration. The best thing about this project is that it is completely online and can possibly be used in the Wacom's Inkspace cloud system. Soon everyone may have access to deep learning at their fingertips. As an extra add on, using feature extraction, we created smart hashtags that automatically post the photo and it's hashtags to the world on twitter at the press of one button. This is a novel way of creating art and could have potential to streamline the entire design process. 

This is Colour My World. AngelHacks 2016

Stay tuned for updates.

