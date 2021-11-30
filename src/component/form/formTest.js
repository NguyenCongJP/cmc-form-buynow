import React, { Component } from "react";
import cmcicon from "../../assest/img/favicon_cmc.png"
import logoheader from "../../assest/img/Logo_CMC-scan_3_1024px.png"
import '../../assest/css/style.css';


class FormTest extends Component {
    render() {
        return (
            <div>
                {/* <Fragment> */}
                    <a href="/"><img src="tokamak-model.png" /></a>
                    <form>
                        <fieldset>
                            <legend>Authentication</legend>
                            <table>
                                <tr>
                                    <td>Username</td>
                                    {/* <Field /> */}
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    {/* <Field /> */}
                                </tr>
                            </table>
                            <button type="submit" className="btn btn-primary">Submit</button>

                        </fieldset>
                    </form>
                {/* </Fragment> */}
            </div>

        );
    }
}

export default FormTest;