# WriCreate #
Try it out at https://wricreate.herokuapp.com/


## Inspiration
“Those who tell the stories rule the world”.
Everyone has a story. Storytelling connects us, helps us make sense of the world, and communicates our values and beliefs as a community. A good story makes us think and feel. It speaks to us in ways that numbers, data, and presentation slides simply can't. That is what 

## What it does
WriCreate is a web app which can be used to build stories and poems in a fun interactive way. It also has a fun user friendly game where users can build stories on the go with words and gestures of their choice! It also plays soothing music while playing out the stories.

## How we built it
We built it using Node.js as well as HTML, CSS and Javascript on the front end for the markup. We also implemented speech analysis, voice record, camera record as well as "media" community story sharing continuation section where users can interact. For the camera movement tracking, we used Tensorflow. We also implemented speech analysis, a  live story system with database implemented, a machine learning pose camera detector using Tensorflow as well as speech to text API. We used MongoDB to store the user information and their part of the stories. Next we also added music to the pages to immerse the user in the experience and theme of the site. 

## Challenges we ran into
- It was such a hard ordeal to make the camera run not in a different page but under the same div.
- It was our very first time working with pose machine learning.
- We also used the Paper CSS framework for the very first time ever which was tougher for us to manage and manipulate rather than Bootstrap which we are usually more used to.
- Also, the thing that came most in our way is the fact that three of our teammates actually started facing severe issues with their laptops during the end hours which really came in our way of getting things done on time or finishing everything as intended.

## Accomplishments that we're proud of
- We're proud of the UI that we developed in such a short time.
- We're also happy to have achieved a significant amount of functionalities along with the interactive interface.
- We're happy to be able to train a machine learning model to accuratly detect poses and translate it as an answer

## What we learned
- The first thing that we definitely learnt is that it's important to enjoy what we are building because that was pretty much the theme of the hackathon!
- We learnt to integrate a database for the very first time ever.

## What's next for WriCreate
- This is the first time for most of us to use pose machine learning and implement a live comment/community story system!
- We want to enhance the UI of the community story pages
- We also want to include a text to image converter in the build up story (with words) page
- We also want to include an option to share the stories
