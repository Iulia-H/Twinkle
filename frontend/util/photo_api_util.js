export const getPhoto = photoId =>(
    $.ajax({
        url: `/api/photos/${photoId}`,
        method: `Get`,
        data: photoId
    })
);

export const createPhoto = photo =>(
    $.ajax({
        url: "/api/photos",
        method: "Post",
        data: {photo}
    })
);

export const getPhotos = ()=>(
    $.ajax({
        url: "/api/photos",
        method: "Get"
    })
)