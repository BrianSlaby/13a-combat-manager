# 13th Age Combat Manager

## Overview

The first solo project that I developed after learning JavaScript was a [13th Age Monster Damage Tracker](https://13th-age-monster-tracker.netlify.app/).  While this project is functional, I wanted to create an updated version of it for a few reasons.  First, the data structure is extremely flawed, and limits how information can be displayed on monster cards as well as potential expanded functionality.  Second, I thought it would be interesting to redesign the entire project using React and TypeScript, and having both versions to compare demonstrates the progress I've made as a developer.  I want the project to be more readable and maintainable that the first version was.  Finally, a second edition of the 13th Age Roleplaying Game (RPG) is currently under development.  I will likely make this app compatible with both editions of the game, and while I'm not sure how extensive the changes to monsters will be, a more maintainable code base will be easier to scale up to support both editions.

## Live Site URL

This project is currently in development, and has not been deployed yet.  

Similar functionality is available in an earlier project that I developed, the [13th Age Monster Damage Tracker](https://13th-age-monster-tracker.netlify.app/).  

## Features

- Filter monsters by level, and then select which monsters to include in your combat encounter.
- Each selected monster is displayed on an individual card containing all relevant information from its published stat block to be referenced during play.
- Damage input fields on each card automate the math for each monster's current hit points.  Current hit point text turns red when the monster becomes staggered.  
- Mook cards have an input for specifying how many individuals are in the mook group.  As the hit points of the mook group decrease, the card keeps an updated total for how many individuals are left in the group.

## Project Status / To Do List

This project is still a work in progress. It currently has the baseline functionality of the first version of this project (see Overview section), but it only contains the monsters from the 1st Edition 13th Age Core Rulebook.

- ~~Update monster data from the Core Rulebook~~
- Update monster data from Bestiary
- Enter monster data from 13 True Ways
- Enter monster data from 2nd Edition Core Rulebook
- Create toggle for 1st and 2nd Edition

## Dependencies

- React.js
- Vite

## Running This Project Locally

1. Clone the project locally from this GitHub repo.
2. Navigate to the project directory in your command line.
3. Run `npm install` in your command line.
4. Run `npm run dev` in your command line.
5. Access the app in your browser using the URL provided by Vite from the previous step.

## Note on Data Files

An initial goal I had for updating this project was to convert all of the monster data to JSON format.  Because that's generally how large data sets like this are stored.  When it came time to start working on the data, I ultimately decided against it.  Rather, I wanted to leverage TypeScript to catch as many errors as possible during development.  There's a lot of monster data, and writing it is monotonous.  Mistakes happened during my first version of the project, and sometimes I wouldn't notice them until weeks or months later when I happened to pull up a card for that monster in the app.  