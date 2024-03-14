export default function CloudComputingId({
    params,
}:{
        params:{cloudId:string};
    })
    {
    return <h1>Cloud computing{params.cloudId}</h1>;
}