import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatMenuModule } from "@angular/material/menu";
import { LayoutModule } from "./layout/layout.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { HttpClientModule } from "@angular/common/http";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ReactiveFormsModule } from "@angular/forms";
import { HorarioModule } from "./horario/horario.module";
import { MatSelectModule } from "@angular/material/select";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { CalendarioComponent } from "./home/calendario/calendario.component";
import { HomeModule } from "./home/home.module";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AlertService } from "./shared/services/alert.service";
import { IMensagem } from "./shared/interfaces/IMensagem";
import { FirebaseModule } from "./firebase/firebase.module";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    UsuarioModule,
    HorarioModule,
    HttpClientModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatSelectModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HomeModule,
    MatSnackBarModule,
    FirebaseModule,
    MatSlideToggleModule,
  ],
  providers: [
    {
      provide: IMensagem,
      useClass: AlertService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
