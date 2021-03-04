const buildQuasarComponents = (All) => {
    return Object.keys(All).reduce((object, key) => {
        const val = All[key];
        if (val && val.component && val.component.name != null) {
          object[key] = val;
        }
        return object;
    }, {});

}
const getMockResponse = () => {
    return {
        data: [ 
          { id:1, name:"game_name1" },
          { id:2, name:"game_name2" },
          { id:2, name:"game_name2" },
          { id:2, name:"game_name2" }
        ]
      }
}


export {
    buildQuasarComponents,
    getMockResponse,
    

}