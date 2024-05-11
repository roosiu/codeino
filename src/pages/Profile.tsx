import {IonButton, IonContent, IonPage, useIonViewWillEnter} from "@ionic/react";
import { setData, getData } from "../services/LocalStorage";
import "./Profile.css";
import React, {useState} from "react";
import profileProps from "../interfaces/profileProps";
const Profile: React.FC = () => {
const [profile, setProfile] = useState<profileProps>({
    activeCourse: "", activeSteps: 0, energy: 0, name: "", points: 0
})
  useIonViewWillEnter(()=>{
      getData("name").then((r) => setProfile({...profile, name: r.value})) //TODO get every data from local storage
      getData("points").then((r) => setProfile({...profile, points: r.value || 0}))
})
  return (
    <IonPage>
      <IonContent className="page" fullscreen>
        <div className="container">
          <h2>Profile</h2>
            <div className="label title">{ profile.name }</div>
            <div className="label">{ profile.points }</div>
          <IonButton shape="round" onClick={() => setData("points", 23)}>
            Edit!
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Profile;
