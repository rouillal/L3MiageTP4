System.register(["@angular/core", "@NF/service"], function (exports_1, context_1) {
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
    var core_1, service_1, htmlTemplate, ListeChoses;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>{{titre}}</h1>
			<form (ngSubmit)="appendNewItem(newTodoInput)">
				<input  #newTodoInput
				        name        = "newTodoInput"
				        class       = "new-todo"
				        placeholder = "Que faire?"
				        autofocus
				        />
			</form>
		</header>
		<section class="main">
			<input  class="toggle-all"
			        type="checkbox"
			        name="toggleAll"
			        />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
			    <li *ngFor="let chose of getChoses()" [class.completed]="chose.getFait()">
			        <item-chose [nf]="chose"></item-chose>
                </li>
            </ul>
		</section>
        <footer class="footer">
            <span class="todo-count"><strong></strong> restantes</span>
            <ul class="filters">
                <li>
                    <a class="filterAll">Tous</a>
                </li>
                <li>
                    <a class="filterActives">Actifs</a>
                </li>
                <li>
                    <a class="filterCompleted">Complétés</a>
                </li>
            </ul>
            <button class="clear-completed">Supprimer cochées</button>
        </footer>
	</section>
	<hr/>
	<section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
	</section>
`;
            ListeChoses = class ListeChoses {
                constructor(serviceListe) {
                    this.serviceListe = serviceListe;
                    this.choses = [];
                    console.log("serviceListe:", this.serviceListe);
                    console.log("currentFilter:", this.currentFilter);
                }
                ngOnInit() {
                    service_1.ListeChosesService.getData().then((nf) => {
                        this.nf = nf;
                        this.choses = nf.choses;
                    });
                }
                getChoses() {
                    return this.choses;
                }
                appendNewItem(newTodo) {
                    this.nf.Ajouter(newTodo.value);
                    newTodo.value = "";
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], ListeChoses.prototype, "titre", void 0);
            ListeChoses = __decorate([
                core_1.Component({
                    selector: "liste-choses",
                    template: htmlTemplate
                }),
                __metadata("design:paramtypes", [service_1.ListeChosesService])
            ], ListeChoses);
            exports_1("ListeChoses", ListeChoses);
        }
    };
});
//# sourceMappingURL=ListeChoses.js.map