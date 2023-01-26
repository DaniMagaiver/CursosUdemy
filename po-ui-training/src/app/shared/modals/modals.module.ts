import { MessageComponent } from './message/Message.component';
import { NgModule } from "@angular/core";
import { PoModule } from '@po-ui/ng-components';

@NgModule({
    declarations:[MessageComponent],
    imports:[PoModule],
    exports:[MessageComponent]
})
export class ModalsModule{

}