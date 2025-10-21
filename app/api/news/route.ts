

import { NextResponse } from "next/server";



export async function GET(){

    try{   
        const response = await fetch(" https://www.freetogame.com/api");
        const data = await response.json();
      return  NextResponse.json(data)
    
    }catch(error:any){
        console.error("There was some error to search the API: ", error)
        return NextResponse.json({error: "There was an error"}, {status: error.status})
        
    }
}