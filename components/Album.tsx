'use client'
// export default async function Album() {
//     const res=await fetch('https://jsonplaceholder.typicode.com/albums');
//     if(!res.ok) throw new Error('Error');

//     const datas=await res.json();

//     return(
//         <div>
//             {datas.map((data:{id:number,title:string})=>(
//                 <div key={data.id}>
//                     {data.title}
//                 </div>
//             ))}
//         </div>
//     )
// }

export default function Album(){
    
    const handle= async()=>{
        const res = await fetch('http://localhost:3000/api/books');
        const books = await res.json();
        return books
    }

    return(
        <div>
            <button onClick={handle}>
                Button
            </button>
            {books.map()}
        </div>
    )
}