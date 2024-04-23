import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Course.css";

const Course: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">course</div>
      </IonContent>
    </IonPage>
  );
};

export default Course;
