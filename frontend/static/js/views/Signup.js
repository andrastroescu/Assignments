import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Signup")
    }
    async getHtml () {
        return `
        <div class="custom-box">
        <h1> Register </h1>
        <p> Create your account </p> 
        
        <!-- Login Form -->
        <form>
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="Username">
          <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password">
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="Email">
          <input type="password" id="password" class="fadeIn third" name="login" placeholder="Re-type Password">
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="Website">
          <input type="password" id="password" class="fadeIn third" name="login" placeholder="Phone">
          
        <div class="btnSection">
        <button id="backBtn" class="fadeIn fourth buttons"> Back </button>
        <button id="createNew" class="fadeIn fourth buttons"> Create new Account </button>
        </div>
        </form>

        </div>
    `;
}
    }

// $('#backBtn').click(function(){
//     window.history.go(-1);
// })

    // var back = document.getElementById('backBtn');

    // back.addEventListener('click', () => {
    //     window.history.go(-1);
    // })