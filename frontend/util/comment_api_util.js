export const getComment = commentId => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: `Get`,
        data: {comment}
    })
);

export const createComment = comment => {
    return $.ajax({
        url: "/api/comments",
        method: "Post",
        data: {comment}
    });
};

export const getComments = (photoId) => {
    // debugger
    return $.ajax({
        url: `/api/photos/${photoId}/comments`,
        method: "Get"
    });
};

export const updateComment = comment =>(
    $.ajax({
        url: `/api/comments/${comment.id}`,
        method: "Patch",
        data: {comment}
    })
);

export const deleteComment = commentId =>(
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: "Delete",
    })
);