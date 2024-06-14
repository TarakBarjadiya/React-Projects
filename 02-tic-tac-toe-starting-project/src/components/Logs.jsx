export default function Logs({ turnLog }) {

    return (
        <ol id="log">
            {turnLog.map(turn => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.playerSym} selected {turn.square.row+1},{turn.square.col+1}
                </li>
            ))}
        </ol>
    )
}