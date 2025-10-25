

import { NextResponse } from "next/server";



export async function GET(){
try{   

const url = `https://api.apitube.io/v1/news/everything?api_key=${process.env.APITUBE_KEY}&per_page=6&category.id=medtop:20000548&language.code=en `;
    const response = await fetch(url,{method:"GET"});

    if(!response.ok) throw new Error(`error on API menssage: , ${response.status}`);

    const data = await response.json();
    console.log("Data from API: ", data);
    return  NextResponse.json(data)

}catch(error:any){
      console.error("There was some error to search the API: ", error);
    return NextResponse.json(
      { error: "There was an error" },
      { status: 500 }
    );
}
}