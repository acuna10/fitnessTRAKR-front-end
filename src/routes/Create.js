import { useEffect } from "react";
import CreateRoutine from "../Components/CreateRoutine"

const Create = ({ setUser }) => {

    const nameTheUser = () => {
        setUser(localStorage.getItem('user'))
    };
    useEffect(() => nameTheUser(), [])
    return (
        <div>
            <CreateRoutine />
        </div>
    )
}

export default Create