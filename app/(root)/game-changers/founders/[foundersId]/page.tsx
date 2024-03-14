export default function FounderPost({
    params,
}:{
    params:{foundersId:string};
}) {
    return <h1> founder of great companies nd empires{params.foundersId}</h1>
}