import { Component, Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Backtop from "../Back-Top/Backtop";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
        <Backtop />
      </Fragment>
    );
  }
}

export default Layout;
