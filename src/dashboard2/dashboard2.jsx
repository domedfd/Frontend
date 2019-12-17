import React, { Component } from "react";
import axios from "axios";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";
import consts from "../consts";

export default class Dashboard2 extends Component {
  constructor(props) {
    super(props);
    this.state = { credit: 0, debt: 0 };
  }

  componentDidMount() {
    axios
      .get(`${consts.API_URL}/billingCycles/summary`)
      .then(resp => this.setState(resp.data));
  }

  render() {
    const { credit, debt, list } = this.state;
    return (
      <div>
        <ContentHeader title="Dashboard" small="Version 2.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              money={true}
              value={credit}
              text="Total de Creditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              money={true}
              value={debt}
              text="Total de Debitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              money={true}
              value={credit - debt}
              text="Valor consolidado"
            />
            <ValueBox
              cols="12 2"
              color="yellow"
              icon="list"
              value={list}
              text="Pedidos"
            />
          </Row>
        </Content>
      </div>
    );
  }
}
