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

### Error view
This view is displayed when the user tries to access a route that does not exist. It has a button that takes the user to the landing.<br>

## Folder structure

The project source root contains the following folders/files:
- **components**: Contains all the components used in the app. It is divided in common and passwordManager folders. The common folder contains the components that are used in more than one view. The passwordManager folder contains the components that are used only in one of the three steps. Each presentational component has its own folder with the component, the styles and the tests. 
- **views**: Contains all the views used in the app, each one in a folder with the same name. There's two folders in this case, one for passwordManager and one for errors views. The passwordManager folder contains the three views of the app. The errors folder contains the error views, in this case one for Error404. Each folder contains the view, the styles and the tests.
- **hooks**: Contains all the custom hooks used in the app, in this case just one, useSubmitPasswordMutation. This hook is used in the second view to submit the password and get the result. It wraps a react-query mutation and the call to the API and returns isLoading and the submitPasswordMutation function. The folder contains the hooks and the tests for them.
- **redux**: Contains two folders, the features with the slices (passwordManagerSlice) of the state and the store one, with the configuration for the app.
- **services**: Contains the service used to check the password, the passwordApi.
- **utils**: Contains the utils used in the app, in this case a folder named test-utils with a mockProvider inside, used for testing.
- **i18n**: Contains the configuration for the internationalization.
- **App.tsx**: The main component of the app.
- **index.js**: The entry point of the app.
- **.env**: The environment variables (none actually).
- **.gitignore**: The gitignore file.
- **package.json**: The package.json file.
- **README.md**: The readme file.

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
You can see the coverage report in the coverage folder.
