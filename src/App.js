import classes from './App.module.css';
import MainPage from "./pages/main/main";
import CanadianFlag from './assets/can.png';
import React, {useState} from "react";

function App() {
  const [lang, setSelectedLang] = useState('en');

  return (
     <div className={classes.appWrapper}>
         <header className={classes.header}>
             <span>Canadian Recalls and Safety Alerts</span>
             <div className={classes.langPannel}>
                 {lang === 'en' ? <button
                     onClick={() => setSelectedLang('fr')}
                     className={classes.langBtn}
                     title={`Changer la langue en EN`}
                 >FR</button> : null}
                 {lang === 'fr' ? <button
                     onClick={() => setSelectedLang('en')}
                     className={classes.langBtn}
                     title={`Change language to EN`}
                 >EN</button> : null}
               <img src={CanadianFlag} alt={'Canadian flag'} width={90} />
             </div>
         </header>
         <MainPage lang={lang}/>
     </div>
  );
}

export default App;
