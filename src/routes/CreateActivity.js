import { useEffect } from "react";
import CreateAct from "../Components/CreateAct";

const CreateActivity = ({ setUser }) => {

    const nameTheUser = () => {
        setUser(localStorage.getItem('user'))
    };
    useEffect(() => nameTheUser(), [])
    return (
        <div>
            <CreateAct />
        </div>
    )
}

export default CreateActivity