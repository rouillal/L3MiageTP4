System.register(["protractor"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var protractor_1;
    return {
        setters: [
            function (protractor_1_1) {
                protractor_1 = protractor_1_1;
            }
        ],
        execute: function () {
            describe("Premiers tests", () => {
                let inputNewTodo;
                let toggleAll;
                let itemInputsCheck;
                let items;
                let SF_inputNew = protractor_1.element(protractor_1.by.css("#sansFramework > section > form > input"));
                let SF_items;
                let SF_InputChecks;
                let computeElements = () => {
                    protractor_1.browser.get('');
                    inputNewTodo = protractor_1.element(protractor_1.by.css("input.new-todo"));
                    toggleAll = protractor_1.element(protractor_1.by.css("section.main > input.toggle-all"));
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    items = protractor_1.element.all(protractor_1.by.css("item-chose"));
                    SF_items = protractor_1.element.all(protractor_1.by.css("#sansFramework > section > ul .chose"));
                    SF_InputChecks = protractor_1.element.all(protractor_1.by.css("#sansFramework > section > ul .chose > input[type=checkbox]"));
                };
                beforeEach(computeElements);
                it('should add 3 new item', () => __awaiter(this, void 0, void 0, function* () {
                    inputNewTodo.sendKeys("toto");
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                    inputNewTodo.sendKeys("titi");
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                    SF_inputNew.sendKeys("tata");
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    items = protractor_1.element.all(protractor_1.by.css("item-chose"));
                    expect(items.count()).toEqual(3);
                    itemInputsCheck.each(c => {
                        expect(c.isSelected()).toBe(false);
                    });
                    // MVP version
                    computeElements();
                    expect(SF_items.count()).toEqual(3);
                    SF_InputChecks.each(c => {
                        expect(c.isSelected()).toBe(false);
                    });
                }));
                it("toggleAll click=> all items are checked", () => {
                    toggleAll.click();
                    itemInputsCheck.each(c => {
                        expect(c.isSelected()).toBe(true);
                    });
                    SF_InputChecks.each(c => {
                        expect(c.isSelected()).toBe(true);
                    });
                });
                it("item 0 click => toggleAll becomes unchecked", () => {
                    itemInputsCheck.first().click();
                    expect(toggleAll.isSelected()).toBe(false);
                });
                it("toggleAll click=> all items are checked", () => {
                    toggleAll.click();
                    itemInputsCheck.each(c => {
                        expect(c.isSelected()).toBe(true);
                    });
                    SF_InputChecks.each(c => {
                        expect(c.isSelected()).toBe(true);
                    });
                });
                it(`The li root of checked items have the class "completed"`, () => {
                    let lis = protractor_1.element.all(protractor_1.by.css("ul.todo-list > li.completed"));
                    expect(lis.count()).toEqual(3);
                });
                it(`item 0 click => toggleAll becomes unchecked`, () => {
                    itemInputsCheck.first().click();
                    expect(toggleAll.isSelected()).toBe(false);
                });
                it(`item 0 click => toggleAll becomes checked`, () => {
                    itemInputsCheck.first().click();
                    expect(toggleAll.isSelected()).toBe(true);
                });
            });
            describe("Edition d'items", () => {
                let labelFirstItem;
                let inputNewTodo;
                let items;
                beforeEach(() => {
                    protractor_1.browser.get('');
                    labelFirstItem = protractor_1.element(protractor_1.by.css("item-chose .view label"));
                    inputNewTodo = protractor_1.element(protractor_1.by.css("input.new-todo"));
                    items = protractor_1.element.all(protractor_1.by.css("item-chose"));
                });
                it("click on label should make input appears and text should be kept.", () => {
                    let txtLabel = labelFirstItem.getText();
                    protractor_1.browser.actions().doubleClick(labelFirstItem).perform();
                    let input = protractor_1.element(protractor_1.by.css("item-chose form input"));
                    expect(input.getAttribute("value")).toEqual(txtLabel);
                    input.sendKeys(" Bob");
                    let strInput = input.getAttribute("value");
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                    labelFirstItem = protractor_1.element(protractor_1.by.css(`item-chose .view label`));
                    expect(labelFirstItem.getText()).toEqual(strInput);
                });
            });
            // Filters
            describe("Filters are OK", () => {
                let labelFirstItem;
                let inputNewTodo;
                let items;
                let itemInputsCheck;
                beforeEach(() => {
                    protractor_1.browser.get('');
                    labelFirstItem = protractor_1.element(protractor_1.by.css(`item-chose .view label`));
                    inputNewTodo = protractor_1.element(protractor_1.by.css("input.new-todo"));
                    items = protractor_1.element.all(protractor_1.by.css("item-chose"));
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                });
                it("check first element as done, so 1/3 are done", () => {
                    itemInputsCheck.first().click();
                    let nbDone = itemInputsCheck.reduce((acc, input) => acc + input.isSelected() ? 1 : 0, 0);
                    expect(nbDone).toBe(1);
                    expect(itemInputsCheck.count()).toBe(3);
                });
                it("Filter all is selected", () => {
                    let filterAll = protractor_1.element(protractor_1.by.css("ul.filters a.filterAll"));
                    expect(filterAll.getAttribute("class").then((strClass) => {
                        expect(strClass.split(" ").indexOf("selected") >= 0).toBe(true);
                    }));
                });
                it("Filter actives => 1 visible", () => {
                    let filterActives = protractor_1.element(protractor_1.by.css("ul.filters a.filterActives"));
                    filterActives.click();
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    expect(itemInputsCheck.count()).toBe(1);
                });
                it("Filter completed => 2 visibles", () => {
                    let filterCompleted = protractor_1.element(protractor_1.by.css("ul.filters a.filterCompleted"));
                    filterCompleted.click();
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    expect(itemInputsCheck.count()).toBe(2);
                });
                it("Select filter All and delete completed item => 1 remains", () => {
                    let filterAll = protractor_1.element(protractor_1.by.css("ul.filters a.filterAll"));
                    filterAll.click();
                    let clearCompleted = protractor_1.element(protractor_1.by.css("button.clear-completed"));
                    clearCompleted.click();
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    expect(itemInputsCheck.count()).toBe(1);
                });
            });
            // Suppress checked items...
        }
    };
});
//# sourceMappingURL=ListeChoses.e2e-spec.js.map