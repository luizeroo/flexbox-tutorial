import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox-tutorial',
  templateUrl: './flexbox-tutorial.component.html',
  styleUrls: ['./flexbox-tutorial.component.scss']
})
export class FlexboxTutorialComponent implements OnInit {

  links: any = [
    { name: 'Topo', id: 'intro' },
    { name: 'O que é FlexBox e quando utilizar? ', id: 'when-use-flexbox' },
    { name: 'Pera aí, então devo usar sempre FlexBox?', id: 'should-i-always-use0flexbox' },
    { name: 'Exemplos: FlexBox ', id: 'examples-flexbox' },
    { name: 'Exemplos: CSS Grid', id: 'examples-cssgrid' },
    { name: 'E framework, qual utilizar?', id: 'framework' },
    { name: 'Exemplos de Uso', id: 'examples' },
    { name: 'Como utilizar FlexBox ', id: 'how-to-use' },
    { name: 'Display ', id: 'display' },
    { name: 'Flex-direction ', id: 'flex-direction' },
    { name: 'Flex-wrap ', id: 'flex-wrap' },
    { name: 'Flex-flow ', id: 'flex-flow' },
    { name: 'Justify-content ', id: 'justify-content' },
    { name: 'Justify-content (Vertical) ', id: 'justify-content-vertical' },
    { name: 'Align-items  ', id: 'align-items' },
    { name: 'Trabalhar com elementos de forma individual ', id: 'work-with-elements' },
    { name: 'Flex-grow ', id: 'flex-grow' },
    { name: 'Flex-basis  ', id: 'flex-basis' },
    { name: 'Order', id: 'order' },
    { name: 'Align-self ', id: 'align-self' },
    { name: 'Referências e Recomendações de Leitura ', id: 'references' }
  ];

  showMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu ? this.showMenu = false : this.showMenu = true;
  }

  goToLink(id: string) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}
