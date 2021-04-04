import React, {ChangeEvent, useEffect, useState} from 'react'

type ProfileStatusType = {
    status: string
    updateStatus: (userId: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true} type="text"
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value = {status}
                    />
            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;