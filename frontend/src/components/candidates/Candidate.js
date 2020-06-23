import React from "react";
import Position from "../position/Position";
import Picture from "../picture/Picture";
import Info from "../info/Info";
import Name from "../name/Name";
import Votes from "../votes/Votes";
import Percentage from "../percentage/Percentage";
import Popularity from "../popularity/Popularity";
import css from "./candidate.module.css";

export default function Candidate({
  candidate,
  position,
  previousVote,
  previousPercentage,
}) {
  const { id, name, votes, previousVotes, percentage, popularity } = candidate;
  const imageSource = `./img/${id}.jpg`;

  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name} />
      <Info>
        <Name>{name}</Name>

        <Votes value={votes} previous={previousVote} />

        <Percentage value={percentage} previous={previousPercentage}>
          {percentage}
        </Percentage>

        <Popularity value={popularity} />
      </Info>
    </div>
  );
}
