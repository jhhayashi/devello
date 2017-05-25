# Devello
This is the code for rn-bootcamp's implementation of Trello

## Components
- [ ] App
- [ ] Board
- [ ] List
- [ ] Card
- [ ] Button


### App
This is the wrapper for the whole app.
#### state
  - board
    - name
  - user
    - name

### Board
This is the board.
#### props
  - name
#### state
  - list (Array<object>)
    - Title
    - Cards (Array<object>)
      - id
      - text
      - moveForward
      - moveBackward

### List
Has a title and keeps a few cards(tasks)
#### props
  - title
  - cards (Array<object>)
    - id
    - text
    - moveForward
    - moveBackward

### Card
A to-do item
#### props
  - id
  - text
  - moveForward
  - moveBackward

### Button
Click to move cards through lists
#### props
  - text
  - onClick

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
