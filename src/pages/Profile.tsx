import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Profile.css";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="container">profile</div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
