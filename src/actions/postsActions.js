
function action(type, payload = {}) {
    return {type, ...payload}
}

export const postsActions = {
    newPost: description => action("new_post", {description}),
    getPosts: () => action("get_posts")
}