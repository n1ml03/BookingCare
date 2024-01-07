import React, {Component} from 'react';
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import ManageSchedule from '../containers/System/Doctor/ManageSchedule';
import ManagePatient from '../containers/System/Doctor/ManagePatient';
import Header from '../containers/Header/Header';
import ManageHistory from '../containers/System/Doctor/ManageHistory';

class Doctor extends Component {
    render() {


        const {isLoggedIn} = this.props;
        return (
            <>
                {this.props.isLoggedIn && <Header/>}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/doctor/manage-schedule" component={ManageSchedule}/>
                            <Route path="/doctor/manage-patient" component={ManagePatient}/>
                            <Route path="/doctor/manage-patient-history" component={ManageHistory}/>
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn

    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
