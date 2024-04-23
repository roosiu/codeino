import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage >
   
      <IonContent className='page' fullscreen>
  
        <div className="container">
      <div className='title'>Tab 1</div>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
