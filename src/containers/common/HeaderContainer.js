import HeaderComponent from "../../components/common/HeaderComponent";
import { withRouter } from "react-router-dom";

const HeaderContainer = ({ history }) => {
    const onClickHome = () => {
        history.push("/");
    };
    const onClickSignin = () => {
        history.push("/signin");
    };

    return <HeaderComponent onClickHome={onClickHome} onClickSignin={onClickSignin}/>;
};

export default withRouter(HeaderContainer);
