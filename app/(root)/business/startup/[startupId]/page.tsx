export default function StartupPost({
    params,
}:{
    params:{startupId:string};
}) {
    return <h1> grow your startup as fast as possible{params.startupId}</h1>
}