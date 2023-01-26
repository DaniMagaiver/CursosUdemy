import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PoButtonGroupItem, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'po-ui-training';

  @ViewChild("consulta", { static: true }) modal: PoModalComponent;
  @ViewChild("fiscal", {static: true}) fiscal:PoModalComponent;

  buttons: Array<PoButtonGroupItem> = [
    { label: 'Default', action: this.showModal.bind(this) },
    { label: '_xml', action: this.showModal.bind(this) },
    { label: '_pdf', action: this.showModal.bind(this) },
  ];

  showModal() {
    this.modal.open();
  }

  openFiscal(){
    this.modal.close();
    this.fiscal.open();
  }
}
