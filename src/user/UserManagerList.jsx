import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete } from "./UserManagerActions";

import If from "../common/operador/if";

class UserManagerList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    const administrador =
      this.props.user.perfil === "ADMINISTRADOR" ? true : false;
    return list.map(bc => (
      <If
        test={
          administrador ? true : this.props.user.name === bc.name ? true : false
        }
      >
        <tr key={bc._id}>
          <td>{bc.name}</td>
          <td>{bc.email}</td>
          <td>{bc.perfil}</td>
          <td>
            {/*refactura los botones*/}
            <button
              className="btn btn-warning"
              onClick={() => this.props.showUpdate(bc)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <If test={administrador}>
              <button
                className="btn btn-danger"
                onClick={() => this.props.showDelete(bc)}
              >
                <i className="fa fa-trash-o"></i>
              </button>
            </If>
          </td>
        </tr>
      </If>
    ));
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Perfil</th>
              <th className="table-actions">Acciones</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.user.list,
  user: state.auth.user
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserManagerList);
