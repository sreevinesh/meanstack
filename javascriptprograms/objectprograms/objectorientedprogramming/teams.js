var isl=[

    {team:"atk",played:17,won:11,draw:4,lose:2,pts:34},
    {team:"goa",played:16,won:12,draw:3,lose:3,pts:25},
    {team:"mumbai",played:17,won:10,draw:4,lose:3,pts:36}
]
// isl.map(obj=>obj.team.toUpperCase()).forEach(o=>console.log(o))

// var teams=isl.reduce((t1,t2)=>t1.pts>t2.pts?t1:t2)
// console.log(teams);

// var teams=isl.reduce((t1,t2)=>t1.pts>t2.pts?t2:t1)
// console.log(teams);

// isl.filter(t1=>t1.pts>=32?t1["status"]="qualified":t1["status"]="not quali").forEach(o=>console.log(o))

isl.sort((t1,t2)=>t1.played>t2.played?t1:t2).forEach(o=>console.log(o))