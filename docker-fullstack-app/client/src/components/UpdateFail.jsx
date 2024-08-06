const UpdateFail = ({ message }) => {
    if(message === null) {
        return null
    }
    return (
        <div className='updateFail'>
            {message}
        </div>
    )
}

export default UpdateFail