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
import { GetFromDatabase } from "../services/GetFromDatabase";

interface CourseData {
  title: string;
  text: string;
  difficulty: number;
}

const Course: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [courseArray, setCourseArray] = useState<CourseData[]>([]);

  // Update the progress state
  const updateProgress = () => {
    setProgress((prevProgress) => prevProgress + 1);
  };

  // progress circle animation
  useEffect(() => {
    if (progress === 100) return;
    const interval = setInterval(updateProgress, 100);
    return () => clearInterval(interval);
  }, [progress]);

  // read array from database
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetFromDatabase("/roadmaps");
      setCourseArray(data || []);
    };
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonContent className="page" fullscreen>
        <div className="container">
          {courseArray.map((course: CourseData, index: number) => (
            <IonCard color="light" key={index}>
              <IonCardHeader>
                <IonItem color="light">
                  <IonThumbnail slot="start">
                    <ProgressCircle progress={progress} />
                  </IonThumbnail>
                  <IonLabel>
                    <IonCardTitle className="course-card-title" color="primary">
                      {course.title}
                    </IonCardTitle>
                    <IonCardSubtitle>{course.text}</IonCardSubtitle>
                  </IonLabel>
                </IonItem>
              </IonCardHeader>
              <IonCardContent>Click to learn!</IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Course;
