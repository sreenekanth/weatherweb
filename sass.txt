import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRedirect, browserHistory, Redirect} from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";
import {
  blue500,
  blue700,
  lightBlue200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack
} from "material-ui/styles/colors";
import {fade} from "material-ui/utils/colorManipulator";
import App from "./App";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import requireAuth from "./utils/authenticated";
import DashBoardDetails from "./components/DashBoardDetails";
import "./index.css";
injectTapEventPlugin();

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
// TODO: We should move this into config?
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: lightBlue200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  },
  appBar: {}
});

const AppRoutes = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to="/signin" component={SignIn}/>
        <Route path='signin' component={SignIn}/>
        <Route path='dashboard'
                  component={Dashboard}
                  onEnter={requireAuth}
      />
        <Route path='/dashBoardDetails/:userId'
               component={DashBoardDetails}
        />
      </Route>
      <Redirect from='*' to='/' />
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(<AppRoutes/>,
  document.getElementById('root'));
