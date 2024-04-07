import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  lang:any
  constructor(
    private translate:TranslateService,
    private _route:Router
  ){
    this.lang=this.translate.currentLang
  }

  changelang(lang:string){
    this.translate.use(lang)
    localStorage.setItem('lang',lang)
    window.location.reload()
   /*   if (this.lang == 'en') {

       this.translate.use('ar')
      }else{
        localStorage.setItem('lang','en')
        this.translate.use('en')
     }
     window.location.reload()*/
  }
  logout(){
    this._route.navigate(['/login'])
    localStorage.removeItem('token')
  }
}
