import styled from "styled-components";

export const UserPostBlock = styled.div`
  .card {
    &:hover {
      box-shadow: 0px 0px 5px #e1e1e1;
      z-index: 1;
    }
  }

  .tag {
    width: 85px;
  }

  .title {
    display: flex;
    h3 {
      margin-left: 0.5rem;
    }
  }

  .location {
    margin-top: 0.8rem;
  }

  .nameAndTime {
    display: flex;
    position: absolute;
    bottom: 15px;
    right: 30px;
    color: gray;
    .time {
      margin-left: 0.5rem;
    }
  }
`;
