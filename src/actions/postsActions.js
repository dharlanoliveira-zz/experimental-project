
function action(type, payload = {}) {
    return {type, ...payload}
}

export const posts = {
    newPost: description => action("new_post", {description})
}