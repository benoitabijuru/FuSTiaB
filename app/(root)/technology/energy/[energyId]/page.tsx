export default function EnergyPost({
    params,
}:{
    params:{energyId:string}
}
){
    return <h1> Energy list of post{params.energyId}</h1>
}