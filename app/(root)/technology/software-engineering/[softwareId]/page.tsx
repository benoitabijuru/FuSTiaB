export default function SoftwareEngineeringPost({
    params,
}:{
    params:{softwareId:string}
}){
    return <h1>Software engineering post{params.softwareId}</h1>
}