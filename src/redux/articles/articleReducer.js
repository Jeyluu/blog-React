const INITIAL_STATE = {
    articles: []
}

function articleReducer(state = INITIAL_STATE, action) {

    switch(action.type) {

        case "ADDARTICLE":
            //On reprend tout les éléments du tableau précédent.
            const newArr = [...state.articles];
            //On ajoute un nouvel article au début de notre nouveau tableau.
            newArr.unshift(action.payload)

            return {
                ...state,
                articles:newArr
            }


        case "LOADARTICLES": {
            return {
                ...state,
                articles: action.payload
            }
        }
    }return state;
    
    
}

export default articleReducer;

export const getArticles = () => dispatch  => {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type:"LOADARTICLES",
            payload: data
        })
    })
}