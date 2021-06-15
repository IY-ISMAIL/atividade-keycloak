import { useKeycloak } from "@react-keycloak/web";

function Dashboard() {
  const { keycloak } = useKeycloak();
  console.log(keycloak);
  const handleLogout = () => keycloak.logout();
  return (
    <div>
      <h1>dashboard</h1>
      <button type="button" onClick={handleLogout}>
        sair
      </button>
    </div>
  );
}
export default Dashboard;
