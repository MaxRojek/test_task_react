import React from "react";
import { UserCardWrapper, UserCardInfo, UserCardName } from "./UserCard.style";

function UserCard(props) {
  return (
    <UserCardWrapper>
      <UserCardInfo>{props.userId}.</UserCardInfo>
      <UserCardName>{props.userName}</UserCardName>
      <UserCardInfo>@{props.userNickname}</UserCardInfo>
    </UserCardWrapper>
  );
}

export default UserCard;
