export default function feedReducer(state = { posts: [] }, action) {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost = {
                id: action.payload.id,    
                author: action.payload.author,
                content: action.payload.content,
                liked: false,
            };
            return { ...state, posts: [newPost, ...state.posts] };
        }                   
        case 'TOGGLE_LIKE': {
            return {
                ...state, 
                posts: state.posts.map(post =>
                    post.id === action.payload.id ? { ...post, liked: !post.liked } : post
                )
            };
        }   
        case 'DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.id)
            };
        }   
        default:
            return state;                       
    }
}   


