import {useCallback, useEffect} from 'react';

const useClickOutside = (ref, callback) => {
    const handleClick = useCallback(e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }, [ref, callback]);
    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick]);
};

const useHandleImageError = (fullBackImage) => {
    const handleError = useCallback((ev) => {
        ev.target.src = fullBackImage;
    }, [fullBackImage]);

    return handleError;
}

export {useClickOutside, useHandleImageError}