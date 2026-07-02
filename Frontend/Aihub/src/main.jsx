import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain="dev-tm4esu8zxy2axw3t.us.auth0.com"
      clientId="n554OWdgrU0BVdO1nNKfi5FGnQx7B9sz"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
)
