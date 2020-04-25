const getCarImages = (limit) => {
    return fetch(`/images?limit=${limit}`)
}

export {getCarImages}