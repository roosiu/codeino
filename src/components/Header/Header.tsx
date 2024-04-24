import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonChip,
  IonIcon,
  IonLabel,
  IonContent,
  IonProgressBar,
} from "@ionic/react";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [progress, setProgress] = useState(0.2);

  return (
    <IonHeader>
      <IonToolbar>
        <IonChip
          slot="start"
          className="chip ion-margin-start"
          color={"primary"}
        >
          <IonAvatar>
            <img
              alt="Silhouette of a person's head"
              src="/src/assets/icons/point_icon.svg"
            />
          </IonAvatar>
          <IonLabel>324</IonLabel>
        </IonChip>
        <IonChip slot="end" className="chip ion-margin-end" color={"primary"}>
          <IonLabel>5</IonLabel>
          <IonAvatar>
            <img
              alt="Silhouette of a person's head"
              src="/src/assets/icons/energy_icon.svg"
            />
          </IonAvatar>
        </IonChip>
      </IonToolbar>

      <IonToolbar>
        <IonTitle color={"primary"} style={{ textAlign: "center" }}>
          Full-Stack Developer Junior
        </IonTitle>
        <IonProgressBar value={progress}></IonProgressBar>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
