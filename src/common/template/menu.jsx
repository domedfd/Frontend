import React from "react";
import MenuItem from "./menuItem";
import MenuTree from "./menuTree";

export default props => (
  <ul className="sidebar-menu">
    <MenuItem path="/" label="Desahboard" icon="dashboard" />
    <MenuTree label="Cadastro" icon="edit">
      <MenuItem
        path="#billingCycles"
        label="Cliclos de Pagamentos"
        icon="usd"
      />
    </MenuTree>
  </ul>
);
