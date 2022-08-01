import styled from "styled-components";

const Li = styled.li`
  background-color: var(--grey-0);
  display: flex;
  justify-content: space-between;
  padding-right: 8px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    gap: 10px;

    img {
      width: 6.25rem;
      background-color: var(--grey-20);
      border-radius: 5px;
    }

    .ContainerCardCartInfo {
      display: flex;
      flex-direction: column;
      gap: 10px;

      h4 {
        text-align: start;
        width: 100%;
      }

      p {
        color: var(--grey-50);
        font-size: 0.9rem;
        text-align: start;
        width: 100%;
      }
    }
  }

  .ButtonRemoveCardCart {
    background-color: transparent;
    font-size: 1.5rem;
    color: var(--Color-primary);
    cursor: pointer;
  }
`;

export default Li;
