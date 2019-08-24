# UCBSOJ's 2019 Unseen Project
A multimedia project produced by 2018-2019 second-year students in the New Media program at UC Berkeley's Graduate School of Journalism.

## Project Setup
In this repo, all the project repos are pulled in as git submodules, that way students can work and update their project in their own repo and just pull changes in this repo when ready to update. Instructions below on how to update the live site.

## Requirements
- NodeJS/NPM
- The Grunt command line utility (grunt-cli, installed globally)

## Installing project
Clone project
```
git clone git@github.com:ucbsoj/unseen-landing.git
```
Install Node Modules
```
npm install
```

## Running Project locally
Just run `grunt` in the terminal and it will switch all project git submodules to their "site" branch and should load up on [localhost:8000](localhost:8000)

## Instructions on updating live site
Here is a list of the NPM scripts and their functions that are listed in `package.json` file. You run each script by running `npm run ____` :
- `publish` – Will generate all the static files for the entire project, including the all 8 of the projects/submodules.
- `pull-all` – Pulls all latest changes from each project's repo and generates all the static files needed to update/publish.
- `pub-all` – Runs `pull-all` and `publish` scripts.
- `pull-dirtybiz` – Pulls the new changes made in the Dirty Business project repo (master branch) and generates the static files needed to update.
- `pull-newpath` – Pulls the new changes made in the New Path project repo (master branch) and generates the static files needed to update.
- `pull-ontheline` – Pulls the new changes made in the On The Line project repo (master branch) and generates the static files needed to update.
- `pull-pennies` – Pulls the new changes made in the Pennies Per Hour project repo (master branch) and generates the static files needed to update.
- `pull-secondclass` – Pulls the new changes made in the Second Class project repo (master branch) and generates the static files needed to update.
- `pull-smoke` – Pulls the new changes made in the Smoke and Mirrors project repo (master branch) and generates the static files needed to update.
- `pull-uneven` – Pulls the new changes made in the Uneven Ground project repo (master branch) and generates the static files needed to update.
- `pull-stolen` – Pulls the new changes made in the Stolen project repo (master branch) and generates the static files needed to update.


### Updating a sinlge project
Run the script for the specific project to update. For example, if you need to update the Stolen project, run
```
npm run pull-stolen
```
Then publish your new changes to the live site:
```
npm run publish
```
Commit and push your changes:
```
git add .
git commit -m "updated ____ project"
git push origin master
```
### Updating all projects
To update all the projects run the following command to pull changes from all 8 projects:
```
npm run pull-all
```
Then publish all changes to the live site:
```
npm run publish
```
Commit and push your changes.

### Update all an publish
If you just want to run one command that pulls all projects and publishes the site, run this one command:
```
npm run pub-all
```
Commit and push your changes.
