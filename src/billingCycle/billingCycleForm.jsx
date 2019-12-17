import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";
import CoverteMoeda, { CoverteNum } from "../common/form/NormalizePhone";

class BillinCycleForm extends Component {
  calculateSummary() {
    const sum = (t, v) => t + v;

    return {
      sumOfCredits: this.props.credits
        .map(c => +CoverteNum(c.value) || 0)
        .reduce(sum),
      sumOfDebts: this.props.debts
        .map(d => +CoverteNum(d.value) || 0)
        .reduce(sum)
    };
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;

    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={labelAndInput}
            label="Nombre"
            cols="12 4"
            placeholder="Informe el nombre"
            type="text"
            readOnly={readOnly}
          />
          <Field
            name="code"
            component={labelAndInput}
            label="Codigo"
            cols="12 4"
            placeholder="Informe el Codigo"
            type="number"
            readOnly={readOnly}
          />
          <Field
            name="date"
            component={labelAndInput}
            label="Fecha"
            cols="12 4"
            placeholder="Informe la fecha"
            type="date"
            readOnly={readOnly}
          />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList
            cols="12 6"
            list={credits}
            value="1"
            readOnly={readOnly}
            field="credits"
            legend="Creditos"
            normalize={CoverteMoeda}
          />
          <ItemList
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            field="debts"
            legend="Debitos"
            showStatus={true}
            normalize={CoverteMoeda}
          />
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

BillinCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillinCycleForm);
const selector = formValueSelector("billingCycleForm");
const mapStateToProps = state => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts")
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillinCycleForm);
