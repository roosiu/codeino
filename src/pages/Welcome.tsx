import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Welcome.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="page" fullscreen>
        <div className="container flex-center-column">
          <IonImg className="logo" src="/assets/images/logo.svg" alt="logo" />
          <div className="title">Learn the code!</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          </div>
          <p>
            <IonButton
              className="button-big"
              onClick={() => {
                console.log("start");
              }}
              shape="round"
            >
              START
            </IonButton>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
