import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import Grid from "../common/layout/gird";
import Input from "../common/form/input";
import If from "../common/operador/if";
import CoverteMoeda from "../common/form/NormalizePhone";

import "../common/template/custom.css";

class ItemList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert("billingCycleForm", this.props.field, index, item);
    }
  }

  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove("billingCycleForm", this.props.field, index);
    }
  }

  renderRows() {
    const list = this.props.list || [];

    const filtro = this.props.list.reduce(
      // (a, o) => (o.value ? a.concat(CoverteMoeda(`${o.value}`)) : a),
      (a, o) =>
        o.value
          ? a.concat({
              _id: o._id,
              name: o.name,
              value: CoverteMoeda(`${o.value}`)
            })
          : a,
      []
    );

    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`${this.props.field}[${index}].name`}
            component={Input}
            placeholder="Informe el nombre"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`${this.props.field}[${index}].value`}
            component={Input}
            placeholder="Informe el valor"
            readOnly={this.props.readOnly}
            normalize={this.props.normalize}
          />
        </td>

        <If test={this.props.showStatus}>
          <td>
            <Field
              className="form-control"
              name={`${this.props.field}[${index}].status`}
              component="select"
              readOnly={this.props.readOnly}
            >
              <option
                value="PAGO"
                {...(this.props.list[index].status === "PAGO"
                  ? "selected"
                  : "")}
              >
                PAGO
              </option>
              <option
                value="PENDENTE"
                {...(this.props.list[index].status !== "PAGO"
                  ? "selected"
                  : "")}
              >
                PENDENTE
              </option>
            </Field>
          </td>
        </If>

        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.add(index + 1)}
          >
            <i className="fa fa-plus"></i>
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.add(index + 1, item)}
          >
            <i className="fa fa-clone"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.remove(index)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Valor</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th className="table-actions">Acciones</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(ItemList);
