export default function AiPost({
    params,
}:{
    params:{aiId:string};
}) {
    return <h1> AI post 1 for google and OpenAI{params.aiId}</h1>
}