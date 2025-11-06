'use client';
export default function Hello({className}: {className?: string}) {
    console.log("Hello from the client")
    return(
        <div >
            <h1 className={className}>Hello from Hello Component</h1>
        </div>
    )
}