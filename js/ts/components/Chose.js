System.register(["@angular/core", "@NF/nf"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, nf_1, htmlTemplate, ItemChose, _a;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
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
            ItemChose = class ItemChose {
                setFait(event) {
                    if (event)
                        this.nf.Fait(true);
                    else
                        this.nf.Fait(false);
                }
                destroy() {
                    this.nf.dispose();
                }
            };
            __decorate([
                core_1.Input("nf"),
                __metadata("design:type", nf_1.Chose)
            ], ItemChose.prototype, "nf", void 0);
            __decorate([
                core_1.ViewChild("newTextInput"),
                __metadata("design:type", typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object)
            ], ItemChose.prototype, "newTextInput", void 0);
            ItemChose = __decorate([
                core_1.Component({
                    selector: "item-chose",
                    template: htmlTemplate
                })
            ], ItemChose);
            exports_1("ItemChose", ItemChose);
        }
    };
});
//# sourceMappingURL=Chose.js.map