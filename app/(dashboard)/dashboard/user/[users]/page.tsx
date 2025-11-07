
import Album from "@/components/Album";

export default async function UserDetails({params}:{params:Promise<{users:string}>}){
    
    const {users} = await params;
    console.log("UserDetails params:",users);
    return(
        <div className="flex flex-col">
            {/* <Album/> */}
            User id:{users||'Not Found'}
            
        </div>
    )
}

