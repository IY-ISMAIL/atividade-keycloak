import { BrowserRouter } from "react-router-dom";
import "./service/keycloak.js";
import Routes from "./routes";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { keycloak, providerConfig } from "./service/keycloak.js";

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={providerConfig}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;
