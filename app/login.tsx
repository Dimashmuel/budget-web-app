import "./App.css";

export default function Login() {
    return(
        <div>
            <h1 style={{color: 'green'}}>Login Page</h1>
            <label >Username:
                <input type="text"/>
            </label><br/>
            <label>Password:
                <input/>
            </label><br/>
            <button onClick={()=> {alert('You clicked the login button!')}}>Login</button>
            <p className='small'> if you don't have an account, SignUp<br /> Forget Password </p>
        </div>
        
    );
}