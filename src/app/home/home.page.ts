import { Component, ViewChild } from '@angular/core';
import { AnimationController, Animation, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('blocks') blocks: any;
  public options: Array<any> = [
    {icon : 'person-add-outline', text : 'Indicar amigos'},
    {icon : 'phone-portrait-outline', text : 'Recarga de celular'},
    {icon : 'wallet-outline', text : 'Depositar'},
    {icon : 'options-outline', text : 'Ajustar limite'},
    {icon : 'help-circle-outline', text : 'Cartão virtual'},
    {icon : 'barcode-outline', text : 'Pagar'},
    {icon : 'lock-open-outline', text : 'Bloquear cartão'},
    {icon : 'card-outline', text : 'Cartão virtual'}
  ];

  public slidesOptions : any = { slidesPerView : 3, freeMode : true};

  public items: Array<any> = [
    {icon : 'help-circle-outline', text : 'Me ajuda'},
    {icon : 'person-outline', text : 'Perfil'},
    {icon : 'cash-outline', text : 'Configurar conta'},
    {icon : 'card-outline', text : 'configurar cartão'},
    {icon : 'phone-portrait-outline', text : 'Configurações do app'}
  ];

  public initialStep: number = 0;
  private maxTranslate: number;
  private animation: Animation;

  constructor(
    private animationCtrl: AnimationController,
    private platform: Platform) {
      this.maxTranslate = this.platform.height() - 200;
    }

    ngAfterViewInit(){
      this.createAnimation();
    }

    toggleBlocks(){
      this.initialStep === 0 ? this.maxTranslate : 0;

      this.animation.play();
    }

    createAnimation(){
      this.animation = this.animationCtrl.create()
      .addElement(this.blocks.nativeElement)
      .duration(300)
      .fromTo('transform', 'translateY(0)', `translateY${this.maxTranslate}px`)
    }
}
