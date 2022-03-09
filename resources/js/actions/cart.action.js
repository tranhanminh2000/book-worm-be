import DialogSuccess from "../component/DialogSuccess/DialogSuccess";
import * as types from "../constants";
import AxiosService from "../services/AxiosService";
import * as actions from "../actions";
import delayAsync from "../common/delay";

export const actPostOrders = (orderDetail, navigate) => {
    return async (dispatch) => {
        const res = await AxiosService.post("/orders", orderDetail);

        if (res.status === 200) {
            dispatch(actions.showModal());
            dispatch(actions.changeModalTitle("Status Order"));
            dispatch(
                actions.changeModalContent(
                    <DialogSuccess
                        message="Successfully"
                        action={() => {
                            navigate("/home");
                            dispatch(actions.hideModal());
                            clearTimeout(navigateTimeout);
                        }}
                    />
                )
            );
            let navigateTimeout = setTimeout(() => {
                navigate("/home");
                dispatch(actions.hideModal());
            }, 10000);
        }
    };
};
