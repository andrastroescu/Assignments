import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("To do list")
    }
    async getHtml () {
        return `
        <div class="todos custom-box">
        <h1> Add a new TO DO</h1>
        <div class="options-list">
        <div class="selected opt"> My Todos </div>
        <div class="opt"> My Incompleted Todos </div>\
        <div class="opt"> My Completed Todos </div>
        </div>
        <table class="table">
                    
            <tbody id="todolist">
                <tr>
                <td>TO DO Task
                <div class="completed"> completed </div>
                </td>
                <td>Due on 23/05/2020</td>
               
                </tr>
        </table>
        </div>
    `;
    }
}