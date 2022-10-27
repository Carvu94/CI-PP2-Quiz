# **Training Assistant**
Training Asisstant website is a quiz application. Main purpose and goal of the application is to assess and improve Front of House and Back of House staff knowledge on important subjects on workplace in catering and hospitality industry. 

![Training Assistant](/docs/ts-responsive.png)

[View Training Assistant on GitHub Pages](https://carvu94.github.io/CI-PP2-Quiz/index.html)


# **User Experience (UX)**

- User stories

    - First Time Visitor Goals
        - As a First Time Visitor, I want to easily understand the main purpose of the site and how can I take a part. 
        - As a First Time Visitor, I want to be able to easily find the rules and understand what is game about
        - As a First Time Visitor, I want to test my knowledge in certain categories. 
        - As a First Time Visitor, I want to be able to see the progress of I am making. 
        - As a First Time Visitor, I want quiz to be responsive no matter what device is played on.
        
    - Returning Visitor Goals
        - As a Returning Visitor, I want to see if I improved my knowlede in certain categories. 
   

## **Design**

## **Colour Scheme**

![Colour Palette](/docs/color-palette.png)

- Medium Sea Green colour was used for buttons and about quiz modal
- Dark Turqouise colour was used for hover effect on buttons. 
- Wild Blue Yonder colour was used for background of quiz section and header. 
- Black colour was used for body text. 
- White colour was used for text in buttons. 

## **Typography**

Google fonts was used for Ubuntu font with Sans Serif as fallback font. 


## **Imagery**

The image used was taken from free source which is credited in the credits section. 

## **Wireframes**

### **Mobile**


### **Tablet**


### **Desktop**


# **Features**

- Responsive on all device sizes.

- Interactive elements.

## **Existing Features**

- Header

    - Header contains titile of the document which is also a link to home page. It can bring user back to home page at any time. 

- Main Quiz Section

    - This section contains welcome message, brief description of the quiz and buttons for About Quiz and Start the quiz. 

- About us button 

    - This button brings up modal window which contains explanation of quiz purpose and how to play the quiz. 

- Start the Quiz button 

    - This button allows users to start the quiz and brings up categories. 

- Category pick

    - This section allows users to choose between four different quiz categories: Allergens, HACCP, Health & Safety and Diets. 

- Quiz HUD

    - Informs users on quiz progress and users score.

- Question section

    - This section contains the question and four buttons to choose the answer. 

- Feedback section 

    - This section contains feedback based on answer. If answer is correct, the feedback will be "Correct!". If answer is incorrect the feedback will contain correct answer to allow users to learn. 

    - This section also contains Next Question button. 

- Next Question button 

    - This button appears after users choose the answer. It allows users to review the question and correct answer with no time limit and proceed to next question when ready. 

- Results button 

    - This button appears after users completes last question. It still allows users to review the last question and proceed to final result when ready. 
    
    - This button brings users to the final result. 

- Final Result

    - this section contains final feedback, final score and Play again button. 

    - Play Again button will bring user back to home page of the quiz, from where users can review the quiz instructions and purpose, and start the quiz again with different or same category. 

- Footer

    - Footer contains links to social media sites which will open to a new tab to allow easy navigation for users. 

    - Footer also contains information about developer and link to gitHub page which will open in a new tab. 


## **Future Implementations**

- Add log in option to allow users to see all previous results. 

- Add highscore leaderboard. 

- Expand the pool of questions to make the quiz more challenging for returning users. 

# **Technologies Used**

## **Languages Used**

- HTML5
- CSS
- JS

## **Frameworks, Libraries & Programs Used**

[Balsamiq](https://balsamiq.com/) - Used to create wireframes.

Git - for version control.

[Github](https://github.com/) - To save and store files on website.

[Google Fonts](https://fonts.google.com/) - To import the fonts used on the website. 

[Coolors.co](https://coolors.co/) - For colour palletes.

[Font Awesome](https://fontawesome.com/) - For the iconography on the website. 

Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

[Favicon.io](https://favicon.io/) - To create favicon. 

[Am I Responsive?](https://ui.dev/amiresponsive) - To show the website image on a range of devices. 


# **Testing**

## **W3 Validators**

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

### **HTML Testing**

After initial HTML testing there were no issues.

![HTML test](/docs/w3-html-val.png)

### **CSS Testing**

After initial CSS testing the following issues were highlihgted by Validator:

![CSS initial test](/docs/w3-css-error1.png)
![CSS initial test 2](/docs/w3-css-error2.png)

The issues were fixed and there were no more warnings or errors.

![CSS final test](/docs/w3-css-val.png)

### **JS Testing**

JSHint Validator was used for JavaScript testing. 

**Script.js Testing**

After initial testing, following issues were found:

![JS script.js initial test](/docs/script-jshint.png)

The issues were fixed and there were no more warnings or errors.

![JS script.js final test](/docs/script-jshint-final.png)

**Questions.js Testing**

After initial testing, following issues were found:

![JS questions test](/docs/questions-jshint.png)

The issues were fixed and there were no more warnings or errors.

![JS questions final test](/docs/questions-jshint-final.png)

## **Performance**

For performance testing I used Google Lighthouse in Google Chrome Developer Tools

![Lighthouse test](/docs/lighthouse-test.png)


## **Testing User Stories from User Experience (UX) Section**

### **First Time Visitor Goals**

- As a First Time Visitor, I want to easily understand the main purpose of the site and how can I take a part. 

    - Verified that users upon entering the site have brief description of purpose of the site. Additionally if users click on About Quiz, they will have more information.

- As a First Time Visitor, I want to be able to easily find the rules and understand what is game about.

    - Verified that users upon clicking on About Quiz button can get description about quiz and information on how to play the quiz. 

- As a First Time Visitor, I want to test my knowledge in certain categories. 

    - Verified that users upon starting the quiz can choose between four different categories of questions. 

- As a First Time Visitor, I want to be able to see the progress of I am making. 

    - Verified that users upon starting the quiz have quiz HUD which is informing them on quiz progress and score. 

- As a First Time Visitor, I want quiz to be responsive no matter what device is played on.

    - Verified that the quiz is responsive and everything is working no matter of screen size. 


### **Returning User Goals**

- As a Returning Visitor, I want to see if I improved my knowlede in certain categories. 

    - Verified that returning users can choose between different categories. 

## **Solved Bugs**

Through whole development of the project I was testing it using Google Developer Tools. 

1. Question answers pupulated as "undefined". 

![Question answers bug](/docs/question-answ-bug.png)

Solution: After research and review of my code I realised that I did not target the element properly. 

2. Feedback showing a number of choice instead of correct answer. 

![Feedback bug](/docs/feedback-bug.png)

Solution: After research and review of my code I decided to add "correct" in group in questions file. 

3. Choices not fitting in buttons. 

![Choice bug](/docs/small-button-bug.png)

Solution: Adjust CSS code to fit the text.

4. Feedback section outside of Quiz section

![Feedback bug 2](/docs/feedback-bug2.png)

Solution: Adjust CSS code to fit the feedback in quiz section. 

5. White Edge on the bottom on all devices. 

![White edge](/docs/white-edge.png)

Solution: Adjust CSS code to make background cover everything. 

6. Final Score and feedback not showing. 

![Final score bug](/docs/final-score-error.png)

Solution: Change the place of the div in HTML code. 

# **Deployment**

## **GitHub Pages**

The project was deployed to GitHub Pages using the following steps:

1. Log in (or sign up) to GitHub.

2. Find the repository for this project.

3. Click on the Settings link.

4. Click on the Pages link in the left hand side navigation bar. 

5. In the Source section, choose main from the drop-down select branch menu. Select Root from the drop-down select frolder menu. 

6. Click Safe. Your live GitHu Pages site is not deployed at the URL shown. 


## **Forking the GitHub Repostiory**

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1. Log in (or sign up) to GitHub.

2. locate the GitHub Repository.

3. At the top of the Repository just above the "Settings" Button on the menu, locate the "Fork" Button.

4. You should now have a copy of the original repository in your GitHub account.

## **Making a Local Clone**

To clone the CI-PP1-gaming-den repository:

1. Log in (or sign up) to GitHub. 

2. Go to the repository for this project. 

3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.

4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory. 

4. Type 'git clone' into the terminal and then paste the link you copied in step 3. 

5. Press 'Enter'. 

# **Credits**

## **Code**

For inspiration and help with figuring out the code I used following resources:

[w3schools](https://www.w3schools.com/)

[Stack Overflow](https://stackoverflow.com/)

[MDN](https://developer.mozilla.org/en-US/)

Love Maths Institute Project


## **Content**

All content was written by developer. 

## **Media**

- Almost all images were taken from [Pexels.com](https://www.pexels.com/).

## **Acknowledgments**

Special thanks to:

- My girlfriend for feedback and support. 

- My parents and work colleagues for support. 

- Slack community for reviewing my project and pointing out weak spots. 

- My mentor for feedback and directing. 

- Tutor support at Code Institute for support. 