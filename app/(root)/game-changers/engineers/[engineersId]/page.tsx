export default function EngineersPost({
    params,
}:{
    params:{engineersId:string};
}) {
    return <h1> top rated engineers in this world{params.engineersId}</h1>
}