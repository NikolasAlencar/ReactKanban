import { CardProps } from "../../models/ICard";
import { StyledCard } from "./Card.style";

const Card = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
