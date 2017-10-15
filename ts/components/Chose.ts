import {Component, Input, ViewChild, ElementRef} from "@angular/core";
import {Chose} from "@NF/nf";

const htmlTemplate = `
    <div class="view">
        <input 	class			= "toggle"
                type			= "checkbox"
                name			= "fait"
                [ngModel]="nf.getFait()"
                (ngModelChange)="setFait($event)"
                />
        <label 	class="texte">{{nf.getTexte()}}</label>
        <button class="destroy" (click)="destroy()"></button>
    </div>
    <form>
        <input  #newTextInput
                name    = "newTextInput"
                class   = "edit"/>
    </form>
`;

@Component({
    selector: "item-chose",
    template: htmlTemplate
})
export class ItemChose {
    @Input("nf") private nf: Chose;
    @ViewChild("newTextInput") newTextInput: ElementRef;

    setFait(event) {
        if (event)
            this.nf.Fait(true)
        else
            this.nf.Fait(false);
    }

    destroy() {
        this.nf.dispose();
    }

}
