export interface SingleTs {
    name: string,
    region:string,
    subregion:string,
    capital:string,
    population:number,
    flags:{
        png:string
    },


    languages:[
       {
         name:string
       }
    ],
    borders:[
        string
    ],
    currencies:[
        {
          name:string
        }
     ],
     topLevelDomain: [
        string
    ],
}
