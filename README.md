# Openbank test

## Description

This is a test for Openbank that simulates a password creation wizzard. <br>
It is a simple web application that uses the following technologies:
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React-router](https://reactrouter.com/)
- [Redux](https://redux.js.org/)
- [Redux-toolkit](https://redux-toolkit.js.org/)
- [React-hook-form](https://react-hook-form.com/)
- [Jest](https://jestjs.io/)
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [react-query](https://react-query.tanstack.com/)
- [react-i18next](https://react.i18next.com/)
- [material-ui](https://material-ui.com/)

## App description

The app is a wizzard that allows the user to create a password. <br>

### First step
At the landing, the user will be asked to check a checkbox with a tooltip and confirm that he/she accepts the service terms. Once checked, the button to next view will be enabled.<br>
### Second step
The second view is a form that asks for a password, a confirmation of the password and a hint (optional). The password must be at least 8 characters long and must contain at least one uppercase letter, one lowercase letter and one number. The hint must be less than 255 characters long. The form has a validation that will show an error message if the button is clicked and the password, the repeat password field or the hint are not valid. The button to next view will be enabled only if the form is valid and, when submitted, will show a loading icon.<br>

### Third step
The third view will show a success message or a error message depending on the password used in the previous step. To trigger the error message/view, the password must be "pruebaKO123". Any other password created will trigger the success message/view. The button in this view will take to the landing.<br>

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm coverage`

Launches the test runner in the interactive watch mode and generates a test coverage file.<br>

