//SURGE SİTESİ BİZE ÜCRETSİZ YAYIN HAKKI VERİYOR. BU İŞLEMLER YAPMAK İÇİN İLK OLARAK SURGE PAKETİNİ KURDUK. DAHA SORNA YENİ REACT DOSYASI KURDUK
// VE DAHA SONRA NPM RUN BUİLD DEDİK BUİLD DOSYASI OLUŞTURDU. DAHA SONRA BUİLD KLASÖRÜNE GİDİP SURGE DEDİK VE İÇERİSİNDE KURULUM GERÇEKLEŞTİRDİK YANİ SİTE ADI VS
// DAHA SONRA HER ŞEYE OKEYLEYİNCE YAYINA ALDIK. BUNUN GİTHUPLA BAĞLANTISI YOK FAKAT NETFLİYIN VAR BUNU. NETFLYI GÜNCELLEMEK İÇİN GİT REPOSUNDAKİ VERİMİZİ GÜNCELEMEMEMİZ
// YETERLİ. AMA SURGE İÇİN BU KURULUMLARU TEKRAR YAPMAMIZ GEREKLİ.
http://meli.akkas.surge.sh/

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          naber
        </a>
      </header>
    </div>
  );
}

export default App;


.App {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: aliceblue;
  height: 100vh;
  flex-direction: column;
}
