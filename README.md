[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5726/s300/icon-white-on-murple-copy.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Javascript Capstone Project - RPG Game</h3>
  <p align="center">
    <img src="https://gamedevacademy.org/wp-content/uploads/2018/05/rpg.png.webp" alt="Logo" width="240" height="240">
  </p>
  <p align="center">
    Microverse Full-Stack Web Development Education
    <br />
    <a href="https://microverse.org/"><strong> Microverse Page »</strong></a>
    <br />
    <br />
    <a href="https://rpg-game-capstone.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/300ms/js-capstone-project/issues">Report Bug & Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Game Design](#game-design)
    * [Scenes](#scenes)
    * [Units](#units)
    * [Menus](#menus)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Testing](#testing)
* [Authors](#authors)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

### Game Design
We have been asked to build a platform game such as the turn-based RPG game. We tried to design a simple but creative game, and implement it using Phaser.

The Game logic is, player walks around the map, find enemies and destroy them. In a fight, for each enemy unit gets destroyed, player earns 10 points. For each player character unit gets destroyed, player loses 10 points. 

The Game contains:

#### Scenes

* BootScene: This is the first scene displayed. It contains directions to a new game or to the Highscores Scene.

* WorldScene: This is the scene that displayed when player starts to a new game. Player has a character to move on the map in boundaries. There are several, invisible, randomly spawned boxes on this scene. When character collides with one of these boxes, battle begins and this scene gets swapped with the BattleScene. When player press on "ESC" button on this scene, player score gets registered by LeaderBoard API request.

* BattleScene: This is the scene that displayed when user gets into a battle. Enemy characters are at the left side, player characters are at the right side. 3 different action menus at the bottom of the screen.


* UIScene: This is the scene that controls the UI elements in the Battle Scene like action menus and characters on the screen. It gets the Battle Scene and works with it.

* Highscores Scene: This is the scene that displays the top 5 scores of this game. It gets all scores by LeaderBoard API request, filter the highest 5 of them and print on the screen.

#### Units

* Player Character: Character type belongs to the player which is being used to fight against enemies.
* Enemy Character: Simple enemy characters which must be found and destroyed to earn points.

#### Menus

* Heroes Menu, contains the list of player characters. Characters are picked by the turn, not the player.
* Action Menu, contains the list of actions. Action is picked by the player. In this game, there is only one action named "Attack".
* Enemies Menu, contains the list of enemies. Enemy is picked by the player.


### Built With
Components of this project is listed below;

* Javascript - ES6
* [Phaser 3](https://phaser.io/)
* [WebPack](https://webpack.js.org/)
* [VsCode](https://code.visualstudio.com/)
* [EsLint](https://eslint.org/)



<!-- GETTING STARTED -->
## Getting Started

This project has been deployed on heroku as an application, you can visit the app on heroku to play the game on your browser.

If you want to download and try the application in your local,
  * Setup NodeJs on your local machine from https://nodejs.org/en/,
  * Clone the project into your local machine,
  * By using proper command shell, get into the application folder and use "npm install" to install the components,
  * Use "npm run start" to start the application in your local machine,
  * Open your browser and visit the "localhost/8080" to play the game.


<!-- USAGE EXAMPLES -->
## Usage

* On the boot scene, click on Highscores button to see the top 5 highscores
* Enter a name into the input field and click on New Game button to start a new game.
* Use arrow keys to walk around the map, there are invisible, randomly spawned enemies. Find and destroy :)
* For each enemy unit you destroy, earn 10 pts. For each hero of yours gets destroyed, lose 10 pts.
* Click "ESC" button to save your score and turn back to the boot scene.


## Authors

👤 **İlhan Sönmez**

- Github: [Github Repository](https://github.com/300ms)
- Twitter: [@twitterhandle](https://twitter.com/cse_Han)
- Linkedin: [linkedin](https://www.linkedin.com/in/ilhan-s%C3%B6nmez/)


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License.


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Microverse Education](https://microverse.org)
* [ODIN Project](https://www.theodinproject.com/)
* [GitHub](https://github.com/)
* [GameDevAcademy](https://gamedevacademy.org/)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors-anon/300ms/rails-capstone-project?color=1
[contributors-url]: https://github.com/300ms/js-capstone-project/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/300ms/rails-capstone-project
[forks-url]: https://github.com/300ms/js-capstone-project/network/members
[stars-shield]: https://img.shields.io/github/stars/300ms/rails-capstone-project
[stars-url]: https://github.com/300ms/js-capstone-project/stargazers
[issues-shield]: https://img.shields.io/github/issues/300ms/rails-capstone-project
[issues-url]: https://github.com/300ms/js-capstone-project/issues
[license-shield]: https://img.shields.io/github/license/300ms/rails-capstone-project
[license-url]: https://github.com/300ms/js-capstone-project/blob/development/LICENSE
[product-screenshot]: images/screenshot.png
