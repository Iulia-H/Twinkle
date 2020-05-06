export const getPhoto = photoId =>(
    $.ajax({
        url: `/api/photos/${photoId}`,
        method: `Get`,
        data: photoId
    })
);

export const createPhoto = photo => {
 
    return $.ajax({
        url: "/api/photos",
        method: "Post",
        data: photo,
        contentType: false,
        processData: false
    })
};

export const getPhotos = ()=>(
    $.ajax({
        url: "/api/photos",
        method: "Get"
    })
)