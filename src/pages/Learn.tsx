import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Learn.css";
import { informationCircleOutline, play } from "ionicons/icons";
const Learn: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="page" fullscreen>
        <div className="container">
          learns
          <div className="text">
            To create a button, we use <b>{`<button>Like</button>`}</b>. These
            are called HTML TAGS <p>Try it yourself.</p>
            <span className="info-span">
              <IonIcon icon={informationCircleOutline} />
              Tap the snippets below
            </span>
          </div>
          <IonToolbar>
            <IonSegment value="all">
              <IonSegmentButton value="all">
                <IonLabel>index.html</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="favorites">
                <IonLabel>Browser</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
          <div className="code-container">ds</div>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton>Button</IonButton>
            </IonButtons>
            <IonTitle>Default Buttons</IonTitle>
          </IonToolbar>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Learn;
