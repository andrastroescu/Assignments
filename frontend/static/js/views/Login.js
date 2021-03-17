import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("Login")
    }
    async getHtml () {
        return `
            <div class="custom-box">
            <h1> Welcome </h1>
            <p> Log into your existing account </p> 
            <!-- Login Form -->
            <form>
              <input type="text" id="login" class="fadeIn second" name="login" placeholder="Username">
              <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password">
              <div id="rememberPass">
            <input type="checkbox" id="remember" >
            <span id="memmo"> Remember me </span>
            </div>
            <div class="btnSection">
            <button id="registerBtn" class="fadeIn fourth buttons"> Register </button>
            <input type="submit" class="fadeIn fourth" value="Log In">
            </div>
            </form>
            
            <!-- Remind Passowrd -->
            <div id="formFooter">
              <a class="underlineHover" href="#">Forgot Password?</a>
            </div>
            </div>
        `;
    }
}