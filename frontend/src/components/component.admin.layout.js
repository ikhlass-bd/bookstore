import {Outlet} from "react-router-dom";

function AdminLayout (){

return (
    <>
<nav>
<ul>
<li>Accueil</li>
<li>Livres</li>
<li>Contact</li>
<li>Connexion</li>

</ul>
</nav>
<Outlet/> 
</>
)
}

export default AdminLayout