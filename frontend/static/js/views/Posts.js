import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();                   //required for overwriting 
        this.setTitle("Posts");
    }


    async getHtml() {
        return `
            <h1>Post Header</h1>
        `;
    }
}