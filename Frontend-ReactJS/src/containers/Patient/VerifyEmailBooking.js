import React, {Component} from 'react';
import {connect} from 'react-redux';
import {verifyBookingAppointment} from '../../services/userService'
import HeaderHomePage from '../HomePage/HeaderHomePage'
import './VerifyEmailBooking.scss'


class VerifyEmailBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 0
        }
    }

    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            let urlParams = new URLSearchParams(this.props.location.search)
            let token = urlParams.get('token')
            let doctorId = urlParams.get('doctorId')
            let res = await verifyBookingAppointment({
                token: token,
                doctorId: doctorId
            })
            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        let {statusVerify, errCode} = this.state
        return (
            <>
                <HeaderHomePage/>
                <div className='verify-email-container'>
                    {statusVerify === false ?
                        <div> Loading Data ...</div>
                        :
                        <div>
                            {errCode === 0 ?
                                <div className='info-booking'>Xác nhận lịch hẹn thành công</div>
                                :
                                <div className='info-booking'>Lịch hẹn không tồn tại hoặc đã đặt rồi</div>
                            }
                        </div>
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailBooking);
