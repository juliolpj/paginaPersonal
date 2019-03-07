import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.scss']
})
export class BitacoraComponent implements OnInit {
  public tarjetas: Array<Object>;
  constructor() {
    this.tarjetas = [
      {
        titulo: 'Publicar página bitácora (esta pagina)', 
        objetivo: 'Publicar la página en github aunque solo muestre "en costrucción"', 
        actividades: ['Repasar git / GitHub', 'Diseño de página principal con Angular y bootstrap', 
                     'Crear archivos para desplegar página con Angular CLI', 'Desplegar página en github pages'],
        nodone: ['No pude desplegar la página con el paquete github-pages. Tuve que crear un repositorio aparte para el despliegue'],
        footer: 'Página publicada, se puede visualizar la página principal'
      },
      {
        titulo: 'Crear rutas para las secciones de la página « bitacoara»', 
        objetivo: 'Crear rutas y por lo menos mostrar las actividades del primer día', 
        actividades: ['Buscar un logo', 'Crear componentes para cada sección (mostrar que el componente existe y es llamado)', 
                     'Crear las rutas para cada sección', 'Crear el componente PageNotFound',
                    'Trabajé creando ramas en git para características', 'Componente Bitacora, para mostrar la actividad diaria'],
        nodone: ['El componente bitacora actualmente es estatico. Quiero que cargue la información a partir de un objeto JSON'],
        footer: 'Muestra el componente bitacora'
      },
      {
        titulo: 'Corregir errores en eldespliegue de la página', 
        objetivo: 'Desplegar la página desde el mismo repositorio de la página', 
        actividades: ['Indicar base-href: juliolpj.github.io.paginaPersonal', 'En github pages indicar la opción rama master carpeta docs', 
                     'En las rutas de las imagenes indicar assets/img..'],
        nodone: ['Programé poco. Cargué el CV en 6 páginas de empleo'],
        footer: 'Uso de un solo repositorio para control deversión y despliegue'
      },
      {
        titulo: 'Cargar bitacora desde objeto JSON', 
        objetivo: 'Cargar bitacora desde objeto JSON', 
        actividades: ['Crear objeto JSON en el constructor de la clase', 'Usar la directiva ngFor de Angular par recorrer el objeto JSON', 
                     'Usar interpolación para mostrar los datos', 'Práctica de GIT - uso del comando stash',
                     'Eliminé la rama gh-pages del repositorio remoto'],
        nodone: [],
        footer: 'Mostrar bitacora desde objeto JSON'
      }
    ];
  }

  ngOnInit() {
  }

}
