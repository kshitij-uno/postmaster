
import { Auth } from '@supabase/auth-ui-react'

import { ThemeSupa } from '@supabase/auth-ui-shared'
import supabase from '../supabase'



function Login() {

    
  return (
    <div className="login">
        <h1 className="loginTitle">Choose Your Login Method</h1>
        <div className="wrapper">
            
            <Auth
                supabaseClient={supabase}
                appearance={{ theme: ThemeSupa }}
                theme="dark"
                providers={["github"]}
            />
        </div>
    </div>
            )
}

export default Login