import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 350px;
  min-height: 18.75rem;
  max-height: 43.75rem;

  background-color: var(--grey-0);
  border-radius: 10px;

  div {
    height: 100%;
  }

  .ContainerCart__Cards--empty {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    width: 100%;

    .Cards--empty {
      font-weight: bold;
    }

    .Cards--emptySubText {
      color: var(--grey-50);
      font-size: 0.9rem;
    }
  }

  .ContainerCardsProducts {
    min-height: 14.375rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ContainerCart__Cards--full {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 20px 10px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      height: 18.75rem;
      overflow-y: scroll;
    }

    .ContainerTotalCart {
      width: 100%;
      height: 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 2px solid var(--grey-20);
      padding: 10px;
    }

    .PriceTotalCart {
      color: var(--Color-primary);
    }

    .ButtonRemoveAll {
      width: 100%;
      height: 3.125rem;

      border-radius: 5px;
      background-color: var(--Color-primary);
      color: white;
      cursor: pointer;
    }

    .ButtonRemoveAll:hover {
      background-color: var(--Color-primary-50);
    }
  }
`;

export const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 4.375rem;

  border-radius: 10px 10px 0px 0px;
  background-color: var(--Color-primary);
  color: #ffffff;
`;
