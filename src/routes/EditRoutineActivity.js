import { updateRoutineActivity } from '../Api.fetch'
import { Link } from 'react-router-dom';
import EditRoutineActCss from './css/EditRoutineAct.module.css'
import { useEffect } from 'react';

const EditRoutineActivity = ({ activityId, setUser, actName, setCount, setDur, count, dur }) => {
    const nameTheUser = () => {
        setUser(localStorage.getItem('user'))
    };
    // eslint-disable-next-line
    useEffect(() => { nameTheUser() }, []);
    return (<>
        <div className={EditRoutineActCss.title} >
            <h1>{actName}</h1>
        </div>

        <div className={EditRoutineActCss.container}>

            <form className={EditRoutineActCss.form}>

                <div className={EditRoutineActCss.cdInputs}>
                    <h3 className={EditRoutineActCss.title}>Count</h3>
                    <input
                        value={count}
                        placeholder={`${count}`}
                        onChange={event => setCount(event.target.value)}>
                    </input>
                </div>

                <div className={EditRoutineActCss.cdInputs}>
                    <h3 className={EditRoutineActCss.title}>Duration</h3>
                    <input
                        value={dur}
                        placeholder={`${dur}`}
                        onChange={event => setDur(event.target.value)}>
                    </input>
                </div>

                <div className={EditRoutineActCss.subDiv}>
                    <Link to='/routines-user'
                        className={EditRoutineActCss.submit}
                        onMouseDown={() => {
                            updateRoutineActivity(
                                activityId,
                                count,
                                dur
                            )
                        }}> Submit Changes</Link>
                </div>

            </form>

        </div>
    </>
    )

}

export default EditRoutineActivity