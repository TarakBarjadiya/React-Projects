import { useState } from "react";

export default function PlayerMain({
  initialName,
  playerSymbol,
  isActive,
  onNameChange,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleEdit() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(playerSymbol, playerName);
    }
  }

  let playerNameDynamic = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerNameDynamic = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameDynamic}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEdit}>{btnCaption}</button>
    </li>
  );
}
