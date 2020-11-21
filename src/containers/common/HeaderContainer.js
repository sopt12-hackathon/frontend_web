import HeaderComponent from "../../components/common/HeaderComponent";
import { withRouter } from "react-router-dom";

const HeaderContainer = ({ history }) => {
    const onClickHome = () => {
        history.push("/");
    };

    return <HeaderComponent onClickHome={onClickHome} />;
};

export default withRouter(HeaderContainer);
