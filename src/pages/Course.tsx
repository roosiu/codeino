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
  IonThumbnail,
} from "@ionic/react";

import "./Course.css";
import ProgressCircle from "../components/ProgressCircle/ProgressCircle";
import { useEffect, useState } from "react";

const Course: React.FC = () => {
  const [progress, setProgress] = useState(0);
  // Update the progress state
  // This is a placeholder, the actual updating logic will depend on the requirements of your application
  const updateProgress = () => {
    setProgress((prevProgress) => prevProgress + 1);
  };

  // Call the updateProgress function every second
  useEffect(() => {
    if (progress === 100) return;
    const interval = setInterval(updateProgress, 100);
    return () => clearInterval(interval);
  }, [progress]);
  return (
    <IonPage>
      <IonContent className="page" fullscreen>
        <div className="container">
          <IonCard color="light">
            <IonCardHeader>
              <IonItem color="light">
                <IonThumbnail slot="start">
                  <ProgressCircle progress={progress} />
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
