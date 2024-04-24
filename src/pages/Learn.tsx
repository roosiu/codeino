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
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Learn.css";
import { informationCircleOutline, play, refreshOutline } from "ionicons/icons";
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
          <IonTextarea
            id="code-area"
            className="code-container code-font"
            labelPlacement="floating"
            value="Lorem Ipsum"
          ></IonTextarea>
          <IonToolbar className="answers-toolbar">
            <IonButtons slot="start">
              <IonButton
                color={"primary"}
                fill="outline"
                className="code-font ion-text-lowercase "
              >{`<button>Click me!</button>`}</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonToolbar>
            <IonButton slot="start" shape="round">
              <IonIcon
                slot="icon-only"
                className="ion-padding"
                icon={refreshOutline}
              ></IonIcon>
            </IonButton>

            <IonButton slot="end" shape="round">
              <IonIcon
                slot="icon-only"
                className="ion-padding"
                icon={play}
              ></IonIcon>
            </IonButton>
          </IonToolbar>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Learn;
