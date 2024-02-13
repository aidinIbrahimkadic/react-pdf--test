import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import HeaderPhoto from "./photos/HEADER.png";

import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body:{
    paddingTop: 0,
    paddingBottom: 220,
    paddingHorizontal: 35,
  },
  
footer:{
  position: "absolute",
  fontSize:12,
  bottom:30,
  left:0,
  right:0,
  textAlign: "center",
  color:"grey"
},
text:{
  margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
}
})

function App (){
 return(
  <div className='App'>
    <PDFViewer>
       <Document>
          <Page size="A4" style={styles.body}>
              <Image style={styles.header} src={HeaderPhoto} fixed />
              <Text style={styles.text} >Mirjana Marinković Lepić pozvala je, također, na konkretne mjere koje će u budućnosti dovesti do osjećaja sigurnosti.

"Sigurnosti sistem u TK zakazao i sigurnosna situacija u TK na najnižem niovu. Ubistvo u Gradačcu, pucnjava u Lukavcu i sada ubistvo u Tuzli. Sve su ovo događaji koji zahtijevaju reakciju što prije, ovo su samo najbrutalniji oblici nasilja. Pitanje je gdje to sistem zakazuje i sada treba strateški da se radi na poboljšanju sigurnosti. Nadležni ne samo da nisu uradili ništa po pitanju sigurnosti već su je direktno ugrozili. To su direktni propusti MUP-a TK-a", kaže Marinković Lepić.

"Vjeroučitelj ne može biti ministar MUP-a, a već je u drugom mandatu. Zašto se čekalo i pokazalo tek nakon ovih brutalnih ubistava. Pored ostavki potrebno je provesti opsežnu istragu ko je sve odgovoran, ko se sve može smatrati odgovornim i samim time se treba sankcionisati", zaključuje ona.

Potom se obratio i Dragan Mioković, zastupnik Naše stranke u Parlamentu Federacije Bosne i Hercegovine i član komisije za sigurnost federalnog parlamenta.

"Narušena sigurnost u FBiH, a ja u funkciji predsjednika komisije za sigurnost sam u redovnom kontaktu sa ministrom unutrašnjih poslova FBiH Ramom Isakom", kaže Mioković te se potom nadovezao na izjavu Mehanovića da se u MUP-u TK-a ne provode ljekarski pregledi.Mirjana Marinković Lepić pozvala je, također, na konkretne mjere koje će u budućnosti dovesti do osjećaja sigurnosti.

"Sigurnosti sistem u TK zakazao i sigurnosna situacija u TK na najnižem niovu. Ubistvo u Gradačcu, pucnjava u Lukavcu i sada ubistvo u Tuzli. Sve su ovo događaji koji zahtijevaju reakciju što prije, ovo su samo najbrutalniji oblici nasilja. Pitanje je gdje to sistem zakazuje i sada treba strateški da se radi na poboljšanju sigurnosti. Nadležni ne samo da nisu uradili ništa po pitanju sigurnosti već su je direktno ugrozili. To su direktni propusti MUP-a TK-a", kaže Marinković Lepić.

"Vjeroučitelj ne može biti ministar MUP-a, a već je u drugom mandatu. Zašto se čekalo i pokazalo tek nakon ovih brutalnih ubistava. Pored ostavki potrebno je provesti opsežnu istragu ko je sve odgovoran, ko se sve može smatrati odgovornim i samim time se treba sankcionisati", zaključuje ona.

"Sigurnosti sistem u TK zakazao i sigurnosna situacija u TK na najnižem niovu. Ubistvo u Gradačcu, pucnjava u Lukavcu i sada ubistvo u Tuzli. Sve su ovo događaji koji zahtijevaju reakciju što prije, ovo su samo najbrutalniji oblici nasilja. Pitanje je gdje to sistem zakazuje i sada treba strateški da se radi na poboljšanju sigurnosti. Nadležni ne samo da nisu uradili ništa po pitanju sigurnosti već su je direktno ugrozili. To su direktni propusti MUP-a TK-a", kaže Marinković Lepić.

"Vjeroučitelj ne može biti ministar MUP-a, a već je u drugom mandatu. Zašto se čekalo i pokazalo tek nakon ovih brutalnih ubistava. Pored ostavki potrebno je provesti opsežnu istragu ko je sve odgovoran, ko se sve može smatrati odgovornim i samim time se treba sankcionisati", zaključuje ona.

Potom se obratio i Dragan Mioković, zastupnik Naše stranke u Parlamentu Federacije Bosne i Hercegovine i član komisije za sigurnost federalnog parlamenta.

"Narušena sigurnost u FBiH, a ja u funkciji predsjednika komisije za sigurnost sam u redovnom kontaktu sa ministrom unutrašnjih poslova FBiH Ramom Isakom", kaže Mioković te se potom nadovezao na izjavu Mehanovića da se u MUP-u TK-a ne provode ljekarski pregledi.</Text>
              <Image style={styles.footer} src={HeaderPhoto} fixed />
          </Page>
       </Document>
    </PDFViewer>
  </div>
 )
};

export default App;