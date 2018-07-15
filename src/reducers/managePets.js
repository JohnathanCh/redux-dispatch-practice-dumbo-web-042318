export let state;

export function managePets(state = {pets: []}, action){

    switch (action.type) {
        case "ADD_PET":

        return {pets: [...state.pets, action.pet]}
        case "REMOVE_PET":

        return {pets: state.pets.filter(pet => pet.id !== action.id)}
        default:
        return state
    }
}

// dispatch should pass an action to the reducer and use that return value to update the state, a globally accessible variable
export function dispatch(action){
    state = managePets(state, action)
    render()

}

export function render(){
    const contain = document.getElementById("container")

    state.pets.forEach(pet => {
        contain.innerHTML = `<ul><li>${pet.name}</li></ul>`   
    });

    
    

}
// Since our users want to see their pets on a webpage we want to have a render method that inserts a <ul> to the DOM with each pet's name wrapped in an <li>. The <ul> should be a child of an element with the id of container. There's no need to load jQuery into our app for such a small task. We can make use of built-in JavaScript methods like document.getElementById.



