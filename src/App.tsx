import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Tab2 from "./pages/Learn";
import Tab3 from "./pages/Course";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';
import "./App.css";
/* Theme variables */
import "./theme/variables.css";
import Header from "./components/Header/Header";
import Welcome from "./pages/Welcome";
import Learn from "./pages/Learn";
import Course from "./pages/Course";
import Profile from "./pages/Profile";
import Roadmap from "./pages/Roadmap";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Header />
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/learn">
            <Learn />
          </Route>
          <Route exact path="/course">
            <Course />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/roadmap">
            <Roadmap />
          </Route>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="learn" href="/learn">
            <IonIcon aria-hidden="true" src="/assets/icons/learn_icon.svg" />
            <IonLabel className="label">LEARN</IonLabel>
          </IonTabButton>
          <IonTabButton tab="course" href="/course">
            <IonIcon aria-hidden="true" src="/assets/icons/course_icon.svg" />
            <IonLabel className="label">COURSE</IonLabel>
          </IonTabButton>
          <IonTabButton tab="roadmap" href="/roadmap">
            <IonIcon aria-hidden="true" src="/assets/icons/roadmap_icon.svg" />
            <IonLabel className="label">ROADMAP</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" src="/assets/icons/profile_icon.svg" />
            <IonLabel className="label">PROFILE</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
