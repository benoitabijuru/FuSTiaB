export default function InternetOfThingPost({
    params,
}:{
    params:{iotId:string}
}){
    return <h1>Internet of thing {params.iotId}</h1>
}