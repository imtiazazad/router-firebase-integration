import React from 'react';
import useFireBase from '../../Hooks/useFireBase';

const Login = () => {
    const {signInWithGoogle} = useFireBase();
    return (
        <div>
            <h3> Please login</h3>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <br /><br />
            <form action="">
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" placeholder='password'/>
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;