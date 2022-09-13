import { BackLink } from "components/BackLink/BackLink";
import {  useLocation } from "react-router-dom";

export const MovieDetails = () => {
    // const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    return (
        <main>
            <div>
                <BackLink to={backLinkHref}>
                    Back to gallery
                </BackLink>
            </div>
        </main>
    )
}