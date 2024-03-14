export default function ComputerSciencePost({
    params,
}:{
    params:{computerscienceId:string}
}){
    return <h1> computer science post {params.computerscienceId}</h1>
}