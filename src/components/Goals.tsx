import React, { useState } from "react";
import styled from "styled-components";

const GoalContainer = styled.div`
  padding: 8px;
  border: solid 1px;
  border-radius: 4px;
`;

const Goal = ({
  goal,
  isDone,
  setAsDone
}: {
  goal: string;
  isDone: boolean;
  setAsDone: (goal: string) => void;
}) => {
  return (
    <GoalContainer>
      <p>{goal}</p>
      {isDone ? (
        "Done!"
      ) : (
        <button
          onClick={() => {
            setAsDone(goal);
          }}
        >
          Set as done
        </button>
      )}
    </GoalContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  margin: auto;
  > div + div {
    margin-left: 8px;
  }
`;

const GOALS = ["Walk 10000 steps", "Read 30 mins", "Sleep 7-8 hours"];

export const Goals = () => {
  const [goalsReached, setGoalsReached] = useState<Array<string>>([]);

  const setAsDone = (newGoal: string) =>
    setGoalsReached((goalsAlreadyReached) => [...goalsAlreadyReached, newGoal]);

  return (
    <ListContainer>
      {GOALS.map((goal, index) => (
        <Goal
          goal={goal}
          isDone={!!goalsReached.find((goalReached) => goalReached === goal)}
          setAsDone={setAsDone}
          key={index}
        />
      ))}
    </ListContainer>
  );
};
