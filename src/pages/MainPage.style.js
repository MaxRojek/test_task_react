import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const PageTitle = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 20px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #555;
`;

export const UsersListWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ListWrapper = styled.div`
  width: 350px;
  height: fit-content;
  display: flex;
  padding-left: 100px;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;
