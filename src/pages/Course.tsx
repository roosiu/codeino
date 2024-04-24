import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonThumbnail,
} from "@ionic/react";

import "./Course.css";
import ProgressCircle from "../components/ProgressCircle/ProgressCircle";

const Course: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="page" fullscreen>
        <div className="container">
          <IonCard color="light">
            <IonCardHeader>
              <IonItem color="light">
                <IonThumbnail slot="start">
                  <ProgressCircle />
                </IonThumbnail>
                <IonLabel>
                  <IonCardTitle className="course-card-title" color="primary">
                    Frontend Developer Junior
                  </IonCardTitle>
                  <IonCardSubtitle>
                    Learn the basic of web development
                  </IonCardSubtitle>
                </IonLabel>
              </IonItem>
            </IonCardHeader>
            <IonCardContent>Click to learn!</IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Course;
