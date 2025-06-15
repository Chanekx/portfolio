import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  keyframes,
} from "@mui/material";
import { styled } from "@mui/system";

type ScrollCardProps = {
  src: string;
  title: string;
  text: string;
};

type ScrollCardsProps = {
  cards: ScrollCardProps[];
};

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 3 - 60px));
  }
`;

const ScrollContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  overflow: "hidden",
  position: "relative",
  background: theme.palette.background.default,
  borderRadius: "12px",
  padding: "20px 0",
}));

const ScrollTrack = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  animation: `${scrollAnimation} 20s linear infinite`,
  padding: "0 20px",
}));

const ScrollCard = styled(Card)(({ theme }) => ({
  flex: "0 0 250px",
  height: "300px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: theme.shadows[4],
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const CardContentStyled = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

const ScrollCards: React.FC<ScrollCardsProps> = ({ cards }) => {
  const duplicateCards = [...cards, ...cards]; // Duplicate for seamless scrolling

  return (
    <ScrollContainer>
      <ScrollTrack>
        {duplicateCards.map((card, index) => (
          <ScrollCard key={index}>
            <CardMedia
              component="img"
              image={card.src}
              alt={card.title}
              height="150"
            />
            <CardContentStyled>
              <Typography variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2">{card.text}</Typography>
            </CardContentStyled>
          </ScrollCard>
        ))}
      </ScrollTrack>
    </ScrollContainer>
  );
};

export default ScrollCards;
