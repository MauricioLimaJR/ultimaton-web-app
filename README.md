# Ultimaton Web App

That's the mobile first Ultimaton application to search and favourite characters and comics from Marvel's develop API.

## About it structure

### Mobile first web app
![home page](https://user-images.githubusercontent.com/20580967/109273607-2f573480-77f1-11eb-8312-96fbe7e627a9.png)
![search-page](https://user-images.githubusercontent.com/20580967/109273887-91b03500-77f1-11eb-8846-346de7d650b5.png)
![favourite-character-page](https://user-images.githubusercontent.com/20580967/109273717-531a7a80-77f1-11eb-8f0a-3dcec7df05e4.png)

See full design system at: https://www.figma.com/file/gIreuDppJvbpRzgIqHHHMt/Mobile-Wireframe-UI-Kit-Community?node-id=11%3A3306

### App Use Flux - BPMN
![bpmn](https://user-images.githubusercontent.com/20580967/109274184-f79cbc80-77f1-11eb-9bec-168112006466.png)

See full document at: just email me in jmauriciolm38@gmail.com (this website tools can't share the bpmn process)

## Framework

This is a React app. So, it's quite simple. For more infos about how to use React.js,  check the official website: https://pt-br.reactjs.org/docs/getting-started.html

## Development Setup

1. Clone this repository on your machine
2. In the project's folder at terminal, install dependencies:
```bash
yarn
```
3. Check out the env.example and create an .env in the same folder.
4. Make sure Ultimaton Service App is running (to config the server go to https://github.com/MauricioLimaJR/ultimaton-server)
5. Just run in terminal:
```bash
yarn start:dev
```

## Production Deploy

This applications is running in heroku and connected to it automatic deploy.
So, just pull request any branch to master and merge the codes.  The deploy will start by itself after the merge.
