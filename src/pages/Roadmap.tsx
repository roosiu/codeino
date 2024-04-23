import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Roadmap.css";

const Roadmap: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="page" fullscreen>
        <div className="container">
          <IonButton className="button-big" shape="round">
            HTML
          </IonButton>
          <IonButton className="outline-button">Learn the basics</IonButton>
          <IonButton className="outline-button">Forms</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Roadmap;
