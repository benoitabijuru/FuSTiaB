export default function     InvestorsPost({
    params,
}:{
    params:{investorsId:string};
}) {
    return <h1> Investing in startup and change the future{params.investorsId}</h1>
}