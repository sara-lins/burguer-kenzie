import styled from "styled-components";

const Li = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 15.625rem;
  height: 19.375rem;
  gap: 10px;

  background-color: white;
  border-radius: 8px;
  border: 2px solid var(--grey-20);

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 9.375rem;

    background-color: var(--grey-0);

    img {
      width: 60%;
      height: 9.375rem;
      object-fit: cover;
    }
  }

  h3,
  p,
  button {
    padding: 0px 15px;
  }

  .TitleProduct {
    margin-top: 10px;
  }

  .CategoryProduct {
    font-size: 1rem;
    color: var(--grey-50);
  }

  .PriceProduct {
    font-size: 1rem;
    color: var(--Color-primary);
  }

  button {
    width: 6.25rem;
    height: 1.875rem;
    margin-left: 15px;

    color: white;
    background-color: var(--Color-primary);
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 1px 2px 2px var(--grey-20);
  }

  button:hover {
    background-color: var(--Color-primary-50);
  }
`;

export default Li;
