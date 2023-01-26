import { NgModule } from "@angular/core";
import { ModalsModule } from "./modals/modals.module";

@NgModule({
    imports:[ModalsModule],
    exports:[ModalsModule]
})
export class SharedModule{

}