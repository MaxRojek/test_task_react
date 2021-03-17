import React, { useState, useEffect } from "react";
import { PageWrapper, PageTitle, SearchInput, UsersListWrapper, ListWrapper } from "./MainPage.style";
import UserCard from "../components/UserCard/UserCard";

function MainPage() {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        console.log(json);
      })
      .catch((error) => {
        console.log("error" + error);
        setErrorMessage(true);
      });
  }, []);

  const displayUsersList = (userName, usersList) => {
    return userName.length > 0
      ? usersList
          .filter((user) => user.name.includes(userName))
          .map((user) => {
            return (
              <UserCard id={user.id} key={user.id} userId={user.id} userName={user.name} userNickname={user.username} />
            );
          })
      : usersList.map((user) => {
          return (
            <UserCard id={user.id} key={user.id} userId={user.id} userName={user.name} userNickname={user.username} />
          );
        });
  };

  return (
    <>
      <PageWrapper>
        <PageTitle>
          <h2>Users list</h2>
          <SearchInput
            placeholder="Search by user name..."
            type="text"
            onChange={(e) => setSearchUser(e.target.value)}
            required=""
            value={searchUser}
          />
        </PageTitle>
        <UsersListWrapper>
          <ListWrapper>{users.length > 0 ? displayUsersList(searchUser, users) : <>users not found</>}</ListWrapper>
        </UsersListWrapper>
      </PageWrapper>
    </>
  );
}
export default MainPage;
