import React from 'react'

export default function ListRendering() {

//   let emplist=["mok","bharu","deep","sam"];

let emplist=[
        {

             name:"Mokshi",
             salary:50000,
             mobile:890998899
    },
    {

        name:"kowas",
        salary:50000,
        mobile:890998899
},
{

    name:"Muze",
    salary:50000,
    mobile:890998899
}

    
]


    return (
        <div>
            <h1>Happy new year list</h1>
            {/* {

            emplist.map(element =>
                <h1> {element}</h1>
            )
            } */}
        {

            emplist.map(
              empdata =>
              <>
              
              <p>{empdata.name}</p>
              <p> {empdata.salary}</p>
              <p>{empdata.mobile}</p>
              
              
              </>

            )
            }
        </div>
    )
}
