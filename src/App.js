import React, {useEffect, useReducer, useState, useCallback} from 'react';
import Header from 'components/Header';
import Modal from "components/Modal";
import FullSizeItem from "components/FullSizeItem";
import Gallery from 'components/Gallery';
import Thumbnail from 'components/Thumbnail';

import {getCarImages} from 'services/carImages';

const initialState = {
    list: [],
    activeItem: null
}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case "addToList": {
            return {...state, list: state.list.concat(payload)}
        }
        case "addActive": {
            return {...state, activeItem: payload}
        }
        case "removeActive": {
            return {...state, activeItem: null}
        }
        default:
            return state
    }
}

const App = () => {
    const [{activeItem, list}, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getCarImages(30)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                dispatch({
                    type: 'addToList',
                    payload: data
                });
            })
            .catch(error => {
                setLoading(false);
                console.error('Error:', error);
            });
    }, []);
    const addActive = useCallback((it) => {
        return () => dispatch({
            type: 'addActive',
            payload: it
        })
    }, []);
    const removeActive = useCallback(() => {
        return dispatch({ type: 'removeActive' })
    }, [])

    return (
        <>
            <Header />
            {activeItem && <Modal onClose={removeActive}>
                <FullSizeItem open={activeItem} data={activeItem} />
            </Modal>}
            <Gallery loading={loading}>
                {
                    list.map((img) => (
                        <Thumbnail expandCallBack={addActive(img)} key={img.id} img={img} />
                    ))
                }
            </Gallery>
        </>
    );
};

export default App;
