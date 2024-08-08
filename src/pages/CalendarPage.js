// src/pages/CalendarPage.js
import React from 'react';
// Classe Js Composant
import Sidebar from '../components/Sidebar';

class CalendarPage extends React.Component {
constructor() {

super() 
this.state = {}

}
render() {
return (

<>

<Sidebar />
<div>
      <h1>CalendarPage</h1>
      <p>Bienvenue sur le calendar !</p>
    </div>
 </>
)
}
}
export default CalendarPage;