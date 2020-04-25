import React, {useCallback, useMemo} from 'react';

import './InformationBox.scss';

const InformationBox = () => {
    const submitHandler = useCallback((ev) => {
        ev.preventDefault();
        let data = new FormData(ev.target);
        console.log('sending data...', data);
    }, [])
    const maxDate = useMemo(() => {
        return new Date().toISOString().split('T')[0];
    }, [])

    return (
        <form onSubmit={submitHandler} className="form-box">
            <h2 className="form-title">Fill Information</h2>
            <label htmlFor="name">Name</label>
            <input autoFocus required name="name" className="form-input" type="text" placeholder="Some name" />
            <label htmlFor="email">Email</label>
            <input required name="email" className="form-input" type="email" placeholder="test@test.com" />
            <label htmlFor="date">Date of birth</label>
            <input required name="date" className="form-input" type="date" max={maxDate} />
            <label htmlFor="color">Favourite color</label>
            <input required type="color" defaultValue="#0288D1" name="color" />
            <label htmlFor="salary">Salary</label>
            <div className="form-range">
                1
                <input
                    required
                    name="salary"
                    min="1"
                    max="100"
                    step="5"
                    defaultValue="10"
                    type="range"
                />
                100
            </div>
            <button type="submit" className="form-submit">
                Submit
            </button>
        </form>
    )
}

export default InformationBox