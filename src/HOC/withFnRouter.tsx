import {FC} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export const withRouter =  <P extends object>(Component: FC<P>) => {
    return (props: P) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

}




