
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CVComponent } from './cv/cv.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { TestComponent } from './test/test.component';
import { BuscadorComponent } from './componets/buscador/buscador.component';
import { RegistrotxtComponent } from './dashboard/registrotxt/registrotxt.component';
import { RegistrovozComponent } from './dashboard/registrovoz/registrovoz.component';
import { CrearvozComponent } from './dashboard/registrovoz/crearvoz/crearvoz.component';
import { RecuperarComponent } from './dashboard/recuperar/recuperar.component';
import { CodigovalComponent } from './dashboard/recuperar/codigoval/codigoval.component';
import { NuevaclaveComponent } from './dashboard/recuperar/nuevaclave/nuevaclave.component';
import { RePerfilComponent } from './dashboard/re-perfil/re-perfil.component';
import { TrabajoComponent } from './busqueda/trabajo/trabajo.component';
import { ExperienciaComponent } from './cv/experiencia/experiencia.component';
import { EncuestaComponent } from './cv/encuesta/encuesta.component';
import { PlantillaComponent } from './cv/plantilla/plantilla.component';
import { DescargarComponent } from './cv/descargar/descargar.component';
import { VistasComponent } from './notificaciones/vistas/vistas.component';
import { RechazadoComponent } from './notificaciones/rechazado/rechazado.component';
import { ProcesoComponent } from './notificaciones/proceso/proceso.component';
import { ConvocadoComponent } from './notificaciones/convocado/convocado.component';
import { PersonalidadComponent } from './test/personalidad/personalidad.component';
import { ResultadosComponent } from './test/resultados/resultados.component';
import { ModalunoComponent } from './documentos/modaluno/modaluno.component';


const routes: Routes = [

  {path:'', redirectTo:'perfil', pathMatch:'full'},
  {path:'perfil', component:PerfilComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'busqueda', component:BusquedaComponent},
  {path:'curriculum', component:CVComponent},
  {path:'documentos', component:DocumentosComponent},
  {path:'notificaciones', component:NotificacionesComponent},
  {path:'test', component:TestComponent},
  {path:'buscador',component:BuscadorComponent},
  {path:'registrotxt',component:RegistrotxtComponent},
  {path:'registrovoz',component:RegistrovozComponent},
  {path:'crearvoz',component:CrearvozComponent},
  {path:'recuperar',component:RecuperarComponent},
  {path:'codigoval',component:CodigovalComponent},
  {path:'nuevaclave',component:NuevaclaveComponent},
  {path:'re-perfil',component:RePerfilComponent},
  {path:'trabajo',component:TrabajoComponent},
  {path:'experiencia',component:ExperienciaComponent},
  {path:'encuesta',component:EncuestaComponent},
  {path:'plantilla',component:PlantillaComponent},
  {path:'descargar',component:DescargarComponent},
  {path:'vistas',component:VistasComponent},
  {path:'rechazado',component:RechazadoComponent},
  {path:'proceso',component:ProcesoComponent},
  {path:'convocado',component:ConvocadoComponent},
  {path:'personalidad',component:PersonalidadComponent},
  {path:'resultados',component:ResultadosComponent},
  {path:'mudulouno',component:ModalunoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
