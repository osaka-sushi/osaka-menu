import { spinnerOverride, LoadingContainer } from "./styles"
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({position, loading}){

    return(
        <LoadingContainer position={position}>
            <ClipLoader color={"#fff"} loading={loading} size={150} css={spinnerOverride}/>
        </LoadingContainer>
    )
}