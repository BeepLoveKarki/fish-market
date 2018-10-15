import Rebase from 're-base';
import firebase from 'firebase';

const config={
  apiKey:'AIzaSyDRlg_6fxrEUAcn1TNjwrjbWMNRU12UZtM',
  authDomain:'catch-of-the-day-93dd5.firebaseapp.com',
  databaseURL:'https://catch-of-the-day-93dd5.firebaseio.com'
};

const app=firebase.initializeApp(config);
const base=Rebase.createClass(app.database());

export default base;