import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BestDGridComponent } from './componets/best-d-grid/best-d-grid.component';

import { MatSidenavModule} from '@angular/material/sidenav';
import { SedenavComponent } from './componets/sedenav/sedenav.component';
import { BodyComponent } from './body/body.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CVComponent } from './cv/cv.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { TestComponent } from './test/test.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BuscadorComponent } from './componets/buscador/buscador.component';
import { RegistrotxtComponent } from './dashboard/registrotxt/registrotxt.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegistrovozComponent } from './dashboard/registrovoz/registrovoz.component';
import { CrearvozComponent } from './dashboard/registrovoz/crearvoz/crearvoz.component';
import { RecuperarComponent } from './dashboard/recuperar/recuperar.component';
import { CodigovalComponent } from './dashboard/recuperar/codigoval/codigoval.component';
import { NuevaclaveComponent } from './dashboard/recuperar/nuevaclave/nuevaclave.component';
import { RePerfilComponent } from './dashboard/re-perfil/re-perfil.component';
import { TrabajoComponent } from './busqueda/trabajo/trabajo.component';
import { EncuestaComponent } from './cv/encuesta/encuesta.component';
import { ExperienciaComponent } from './cv/experiencia/experiencia.component';
import { PlantillaComponent } from './cv/plantilla/plantilla.component';
import { DescargarComponent } from './cv/descargar/descargar.component';
import { VistasComponent } from './notificaciones/vistas/vistas.component';
import { ProcesoComponent } from './notificaciones/proceso/proceso.component';
import { ConvocadoComponent } from './notificaciones/convocado/convocado.component';
import { RechazadoComponent } from './notificaciones/rechazado/rechazado.component';
import { PersonalidadComponent } from './test/personalidad/personalidad.component';
import { ResultadosComponent } from './test/resultados/resultados.component';
import { ModalunoComponent } from './documentos/modaluno/modaluno.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BestDGridComponent,
    SedenavComponent,
    BodyComponent,
    PerfilComponent,
    BusquedaComponent,
    CVComponent,
    DocumentosComponent,
    NotificacionesComponent,
    TestComponent,
    BuscadorComponent,
    RegistrotxtComponent,
    RegistrovozComponent,
    CrearvozComponent,
    RecuperarComponent,
    CodigovalComponent,
    NuevaclaveComponent,
    RePerfilComponent,
    TrabajoComponent,
    EncuestaComponent,
    ExperienciaComponent,
    PlantillaComponent,
    DescargarComponent,
    VistasComponent,
    ProcesoComponent,
    ConvocadoComponent,
    RechazadoComponent,
    PersonalidadComponent,
    ResultadosComponent,
    ModalunoComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    ScrollingModule,
    MatFormFieldModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
