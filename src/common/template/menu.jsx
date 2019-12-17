import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default props => (
  <ul className="sidebar-menu">
    <MenuItem path="/" label="Desahboard" icon="dashboard" />
    <MenuTree label="Cadastro" icon="edit">
      <MenuItem path="UserManager" label="Usuarios" icon="users" />
      <MenuItem path="billingCycles" label="Pedidos" icon="usd" />
    </MenuTree>
  </ul>
);
