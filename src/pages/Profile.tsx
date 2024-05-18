import {IonButton, IonContent, IonPage, useIonViewWillEnter} from "@ionic/react";
import {setData, getData, getAllData} from "../services/LocalStorage";
import "./Profile.css";
import React, {useState} from "react";
import profileProps from "../interfaces/profileProps";
const Profile: React.FC = () => {
const [profile, setProfile] = useState<profileProps>({
    activeCourse: "", activeSteps: 0, energy: 0, name: "", points: 0
})
  useIonViewWillEnter(()=>{
      getAllData().then((r) => setProfile(r))
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