import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { MisTurnosComponent } from './componentes/mis-turnos/mis-turnos.component';
import { MiPerfilComponent } from './componentes/mi-perfil/mi-perfil.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    MisTurnosComponent,
    MiPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"clinicatp-8a82e","appId":"1:368483094980:web:5c7956033dd843571f5491","storageBucket":"clinicatp-8a82e.appspot.com","apiKey":"AIzaSyD6WtUwS881suMTUPxxxTiQHPmFmcs3wjE","authDomain":"clinicatp-8a82e.firebaseapp.com","messagingSenderId":"368483094980"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
