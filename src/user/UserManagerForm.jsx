import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./UserManagerActions";
import Input from "../common/form/inputAuth";
import Select from "../common/form/Select";
import If from "../common/operador/if";

class UserManagerForm extends Component {
  render() {
    const { perfil } = this.props.user;
    const { handleSubmit, readOnly } = this.props;

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
            readOnly={readOnly}
          />
          <Field
            component={Input}
            type="email"
            name="email"
            placeholder="email"
            icon="envelope"
            readOnly={readOnly}
          />
          <Field
            component={Input}
            type="password"
            name="password"
            placeholder="Contrasena"
            icon="lock"
            readOnly={readOnly}
          />
          <Field
            component={Input}
            type="password"
            name="confirm_password"
            placeholder="Confirmar Contrasena"
            icon="lock"
            hide={loginMode}
            readOnly={readOnly}
          />
          <If test={perfil === "ADMINISTRADOR" ? true : false}>
            <Field
              component={Select}
              type="select"
              name="perfil"
              hide={loginMode}
              readOnly={readOnly}
            >
              <option key="vacio" value="" selected disabled hidden>
                Selecione el perfil de usuario
              </option>
              <option key="USUARIO" value="USUARIO">
                USUARIO
              </option>
              <option key="ADMINISTRADOR" value="ADMINISTRADOR">
                ADMINISTRADOR
              </option>
            </Field>
          </If>
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
  list: selector(state, "list"),
  user: state.auth.user
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserManagerForm);
