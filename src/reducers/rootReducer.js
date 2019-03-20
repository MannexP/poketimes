const initState = {
    posts: [
        {id:'1', title:'Squirtle laid an agg', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab distinctio assumenda modi illum ex voluptatum quis recusandae molestias unde consequuntur, at saepe eaque maxime repellendus molestiae deserunt porro quam vel.'},
        {id:'2', title:'Charmander fires up', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab distinctio assumenda modi illum ex voluptatum quis recusandae molestias unde consequuntur, at saepe eaque maxime repellendus molestiae deserunt porro quam vel.'},
        {id:'3', title:'Bulba bulba', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab distinctio assumenda modi illum ex voluptatum quis recusandae molestias unde consequuntur, at saepe eaque maxime repellendus molestiae deserunt porro quam vel.'}
    ]
}


const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer