export const getUser = id =>(
    $.ajax({
        url: `/api/user/${id}`,
        method: `Get`,
        data: id
    })
);