import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./UserManagerActions";
import Input from "../common/form/inputAuth";

class UserManagerForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;

    const loginMode = false;

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            component={Input}
            type="input"
            name="name"
            placeholder="Nombre"
            icon="user"
            hide={loginMode}
          />
          <Field
            component={Input}
            type="email"
            name="email"
            placeholder="email"
            icon="envelope"
          />
          <Field
            component={Input}
            type="password"
            name="password"
            placeholder="Contrasena"
            icon="lock"
          />
          <Field
            component={Input}
            type="password"
            name="confirm_password"
            placeholder="Confirmar Contrasena"
            icon="lock"
            hide={loginMode}
          />
          <Field className="form-control" name="perfil" component="select">
            <option value="ADMINISTRADOR">ADMINISTRADOR</option>
            <option value="USUARIO">USUARIO</option>
          </Field>
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel || "Submit"}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

UserManagerForm = reduxForm({
  form: "UserManagerForm",
  destroyOnUnmount: false
})(UserManagerForm);
const selector = formValueSelector("UserManagerForm");
const mapStateToProps = state => ({
  list: selector(state, "list")
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserManagerForm);
