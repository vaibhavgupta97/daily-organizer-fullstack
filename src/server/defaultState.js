export const defaultState={
    users:[{
        id:"U1",
        name:"Vaibhav",
    },
{
    id:"U2",
    name:"Vaibhav gupta",
}],
groups:[{
    name:"To Do",
    id:"G1",
    owner:"U1"
},
{
    name:"Doing",
    id:"G2",
    owner:"U1"
},
{
    name:"Done",
    id:"G3",
    owner:"U1"
}],
tasks:[
    {name:"refector tasks",
        id:"T1",
        group:"G1",
        isComplete:false,
    },
    {name:"meet with cto",
    id:"T2",
    group:"G2",
    isComplete:true,
},
{name:"compile es6",
id:"T3",
group:"G1",
isComplete:false,
},
{name:"update component",
id:"T4",
group:"G3",
isComplete:true,
}
]
}