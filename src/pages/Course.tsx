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
  IonThumbnail, useIonViewWillEnter,
} from "@ionic/react";

import "./Course.css";
import ProgressCircle from "../components/ProgressCircle/ProgressCircle";
import React, { useState } from "react";
import { GetFromDatabase } from "../services/GetFromDatabase";
import { getData } from "../services/LocalStorage";
import courseData from "../interfaces/courseData";

const Course: React.FC = () => {
  const fetchData = async () => {
    await GetFromDatabase("/roadmaps").then((data) => {
      if (data) {
        data.forEach((course: courseData) => {
          getData(course.title).then((data) => {
            course.progress = data.value || 0;
          });
        });
      }
      setTimeout(() => {
        setCourseArray(data || []);
      }, 500); //TODO check if this work in android
    });
  };
  const [courseArray, setCourseArray] = useState<courseData[]>([]);
useIonViewWillEnter(()=> {
  fetchData();
})


  return (
    <IonPage>
      <IonContent className="page" fullscreen>
        <div className="container">
          {courseArray.map((course: courseData) => (
            <IonCard color="light" key={course.id}>
              <IonCardHeader>
                <IonItem color="light">
                  <IonThumbnail slot="start">
                    <ProgressCircle progress={course.progress} />
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
