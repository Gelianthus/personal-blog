# About

My personal blog site. Mostly going to talk about my journey into Web Development.

# Notes

The rating system hasn't been implemented yet properly. Feel free to leave a feedback through my email for the time being.
The website is still under development, but is already deployed since there is already a content available.

# Tech Stacks

- HTML
- JavaScript
- CSS
- Vite (React) - [https://vitejs.dev/]

# Want to make your own blog?

Try it with react. With reusable components, you can easily populate your blog by creating a template that you can plug your content into. With the use of the special type of props "props.children", you can save a lot of time, but most importantly, it makes your code cleaner and easier to read.

# Deployment - Vite App

Deployed with the help of gh-pages.

- Make sure you're into the right folder directory

- If you're using Vite, install gh-pages as one of your devDependencies with the following step:

  $ npm install gh-pages --save-dev

- At the top of your package.json add the following key-value pair:

  "homepage": "https://(your-github-username).github.io/(name-of-your-github-repo)" - change the value inside the parenthesis

- Add the following scripts into your package.json:

  "predeploy": "npm run build",

  "deploy": "gh-pages -d dist",

- Go to your vite.config.js file and add a base to your defineConfig object

  base: "/(name-of-your-github-repo)/", replace the value inside the parenthesis

- If you still haven't made a repo for your project yet, go to your github account and click "New repository"

- Make sure the name matches the one that you put in the base property in your vite.config.js file

- Go back to your project and into your terminal, type the following commands in order:

  $ git init

  $ git add .

  $ git commit -m "first-commit"

  $ git branch -M main

  $ git remote add origin https://github.com/(your-github-username)/(name-of-your-github-repo).git - again replace the value inside the parenthesis

  $ git push -u origin main

- After that, you can simply run the following command to deploy your site:

  $ npm run deploy
