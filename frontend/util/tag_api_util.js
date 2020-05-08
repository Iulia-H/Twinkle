export const getTag = tagId => (
    $.ajax({
        url: `/api/tags/${tagId}`,
        method: `Get`,
        data: tagId
    })
);

export const createTag = tag => {
    return $.ajax({
        url: "/api/tags",
        method: "Post",
        data: {tag}
    });
};

export const getTags = (photoId) => {
    // debugger
    return $.ajax({
        url: `/api/photos/${photoId}/tags`,
        method: "Get"
    });
};

export const updateTag = tag =>(
    $.ajax({
        url: `/api/tags/${tag.id}`,
        method: "Patch",
        data: {tag}
    })
);

export const deleteTag = tagId =>(
    $.ajax({
        url: `/api/tags/${tagId}`,
        method: "Delete",
    })
);