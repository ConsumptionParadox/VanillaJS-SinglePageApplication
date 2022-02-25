import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();                   //required for overwriting 
        this.setTitle("Settings");
    }


    async getHtml() {
        return `
            <h1>Settings Header</h1>
        `;
    }
}