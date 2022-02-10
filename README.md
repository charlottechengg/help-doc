# HelpDoc! 
 <img src="https://user-images.githubusercontent.com/59659987/150670490-5fbc39e6-2bd9-4053-b5a8-010253ebf254.png" width="100" height="100">

## Developers
Manyi Cheng(@manyicheng), Daniel Ko(@Dandoko), Senni Tan(@senni0418), William Song(@williamssong)

## Inspiration

A doctor’s note has always been seen as a scribble, never anything legible. Statistics across the nations describe patients being harmed by these misinterpretations, and thus, technology should come into play to allow for better communication.

<img width="1440" alt="helpdoc" src="https://user-images.githubusercontent.com/59659987/153343147-70c747e7-41fa-4ef6-a762-5e4e1adf1b6b.png">


## What it does

Help-Doc is a simple software that translates and records the speech from a patient to a doctor, or vice versa. It is able to translate various languages, and pick up human speech into a readable and saveable form. This allows for complete transparency between the doctor and patient, and the doctor does not have to worry about messy handwriting or language barriers.
<img width="1440" alt="Screen Shot 2022-01-23 at 03 36 47" src="https://user-images.githubusercontent.com/59659987/150671080-36af43fc-70ba-41df-a489-e5058d412d3c.png">


## How we built it

Fundamentally built on NodeJS and React, using the integration of AssemblyAI, doctor’s are able to speak into the application and see their words transcribed. Now that the words are recorded, the use of Google Cloud’s translation API allows various target languages to be displayed. To enhance the user experience, we utilized the MUI React package and prototyped the design on Figma. 

## Challenges we ran into
Configuring and setting up the environment was very time costly. Getting the API to link up with our web application was another challenge..

## Accomplishments that we're proud of
We were able to create a web application from scratch that uses React as the front-end and several external APIs for the back-end with the goal to help doctors deliver information to their patients. 

## What we learned
We learned to integrate AssemblyAI and Google Cloud API seamlessly into our React web application.


## What's next for Help-Doc
As input, we will add a feature that allows users to upload medical audio files to translate them to the desired language. For output, we intend to implement a download feature, allowing users to download the English text and the translated text into one file for ease of use.
![help available 247](https://user-images.githubusercontent.com/59659987/150670618-9bd07c0b-3927-4410-b77b-62ae4e1ef3e0.png)


## To Test 
* Run `npm install` in the backend and frontend folder
* To use the Google Cloud Translate API, you need a valid Google Cloud service account
  * Store the details of the service account in a `.env` file in the top level of the frontend folder
* To use the AssemblyAI API, you need to insert a valid API key in the `server.js` file in the backend folder
