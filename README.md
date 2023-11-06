# Flex Flow: Fitness Tracking App
## Description
Flex Flow is a fitness tracking app that allows users to track their workout sessions and provides access to information about various cardio and weight training exercises.
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Authors](#authors)
## Installation
https://mighty-bastion-82183-178fd50e41a1.herokuapp.com/
## Usage
The user is prompted to sign up for a Flex Flow account, providing basic information such as a username and password. Passwords are securely encrypted using bcrypt hashing and stored in a MySQL database, along with the initial username. Users can later add additional details to their profiles, including height, weight, and age. The app calculates and stores the user's BMI based on the input data.
In the "Exercises" section, users can select cardio and weight training exercises and save them to their profiles. Users can specify parameters such as the number of reps, sets, distance, and duration for each exercise. The exercise data is stored in the database through a set of modularized JavaScript models, using GET, POST, and UPDATE routes that target specific elements and buttons on the website.
User authentication ensures that users must be logged in to access specific sections of the webpage. Environment variables, including API keys and MySQL database passwords, are hidden using the `.gitignore` file and passport technology. The project is deployed on Heroku.
## License
This project is licensed under the MIT License.
## Credits
This project was a collaborative effort between four group members:
- Jakob Pfeifer: Front End Design, Back End Encryption, Presentation.
- Christian Richard: Handlebars creation and implementation of Home Routes. Also created Seed files for database testing.
- Conor Reed: Implemented JavaScript models, set up the initial database, and created GET, POST, and PUT routes for the models. He also authored the project proposal and this README.
- Justin Patty: Integrated a third-party API and is the owner of the GitHub repository.
The team worked together to establish a strong connection between the back end and front end.
We would like to express our gratitude to Leif Hetland and Fred Kamm for their invaluable expertise and assistance during the latter part of the development cycle. They helped us with multiple debugging and refactoring sessions, contributing significantly to the project's success.
## Tests
Please refer to the presentation video and demo for test instructions.
## Authors
- Christian Richard
- Conor Reed
- Jakob Pfeifer
- Justin Patty
# Lessons for Future Development
During the development of Flex Flow, our team gained valuable insights and identified areas for improvement in future projects:
- **Effective Collaboration:** We recognized the importance of clear and efficient developer collaboration. In future projects, we aim to refine our communication and teamwork to enhance productivity.
- **Time Management:** With a tight development schedule, we learned to optimize time management. We plan to further improve our time allocation strategies for future projects.
- **Project Planning:** Early planning proved crucial when dealing with complex file structures. We intend to prioritize detailed project planning to minimize disruptions in future developments.
- **Pseudocoding:** Pseudocoding was a valuable tool for outlining project structure, but we realized we could have utilized it even more effectively. We plan to make pseudocoding a central part of our workflow in future projects to enhance project efficiency.
- **Division of Tasks:** Learning to divide and conquer effectively was a key skill we developed. In future projects, we plan to refine our task allocation process to boost project progress.
- **Continuous Learning:** This project marked our second official collaboration. Embracing the lessons learned will pave the way for more successful projects and learning opportunities in the future.
