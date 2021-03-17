import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Add TO DO")
    }
    async getHtml () {
        return `
        <div class="custom-box">
        <h1> Add a new TO DO</h1>
        <form>
              <input type="text" id="myTodo" class="fadeIn second" name="todo" placeholder="My TO DO">
              <input type="date" id="duedate" class="fadeIn third" name="login" placeholder="Due Date">
              <input type="text" id="status" class="fadeIn third" name="login" placeholder="Status">
              
            <div class="btnSection">
            <button type="button"  id="addTodo" class="fadeIn fourth buttons"> Add TO DO </button>
            </div>
        </form>
        </div>
        `
    }
}


