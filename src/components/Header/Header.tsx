import { IonHeader, IonToolbar, IonTitle, IonAvatar, IonChip, IonIcon, IonLabel, IonContent } from "@ionic/react";
import "./Header.css"

const Header = () =>(
<IonHeader>
<IonToolbar >
<IonChip slot="start" className="chip ion-margin-start" color={"primary"}>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src="/src/assets/icons/point_icon.svg" />
        </IonAvatar>
        <IonLabel>324</IonLabel>
       
      </IonChip>
<IonChip slot="end" className="chip ion-margin-end" color={"primary"}>
        <IonLabel>5</IonLabel>
        <IonAvatar>
          <img alt="Silhouette of a person's head" src="/src/assets/icons/energy_icon.svg" />
        </IonAvatar>
       
      </IonChip>

     
</IonToolbar>
<IonToolbar>
<IonChip style={{width: "90vw", justifyContent: "center"}} className="chip ion-margin-horizontal" color={"primary"}>
        <IonLabel>Full-Stack Developer Junior</IonLabel>
      </IonChip>
      </IonToolbar>
</IonHeader>
)

export default Header