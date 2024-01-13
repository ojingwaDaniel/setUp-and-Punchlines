export default function Jokes({setUp,punchlines}) {
    return (
        <div>
            {setUp && <span> SetUp : {setUp }</span>}
            <h3>Punchline :{punchlines}</h3>
            <hr />
        </div>
    )
}