import React, { useState } from "react";
import { Box, Card, CardMedia, keyframes } from "@mui/material";
import { styled } from "@mui/system";

type ScrollCardProps = {
  src: string;
  alt?: string;
  onClick?: () => void;
};

type ScrollCardsProps = {
  cards: ScrollCardProps[];
  speed?: number;
};

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 3 - 60px));
  }
`;

const ScrollContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "100%",
  minWidth: "100%",
  margin: "0 auto",
  overflow: "hidden",
  position: "relative",
  borderRadius: "12px",
  padding: "20px 0",
  display: "flex",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    width: "100px",
    height: "100%",
    zIndex: 2,
  },
  "&::before": {
    left: 0,
    background:
      "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
  },
  "&::after": {
    right: 0,
    background:
      "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
  },
}));

const ScrollTrack = styled(Box)<{ $isPaused: boolean; $speed: number }>(
  ({ $isPaused, $speed }) => ({
    display: "flex",
    gap: "20px",
    animation: `${scrollAnimation} ${$speed}s linear infinite`,
    animationPlayState: $isPaused ? "paused" : "running",
    padding: "0 20px",
    width: "100%",
    minWidth: "100%",
    willChange: "transform",
  })
);

const ScrollCard = styled(Card)({
  flex: "0 0 250px",
  height: "300px",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    transform: "translateY(-5px) scale(1.02)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  },
  "&:focus-visible": {
    outline: "2px solid #1976d2",
    outlineOffset: "2px",
  },
});

const CardMediaStyled = styled(CardMedia)(() => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const ScrollCards: React.FC<ScrollCardsProps> = ({ cards, speed = 20 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const duplicateCards = [...cards, ...cards];

  return (
    <ScrollContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <ScrollTrack $isPaused={isPaused} $speed={speed}>
        {duplicateCards.map((card, index) => (
          <ScrollCard
            key={index}
            onClick={card.onClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                card.onClick?.();
              }
            }}
          >
            <CardMediaStyled
              component="img"
              image={card.src}
              alt={card.alt || `Card ${index + 1}`}
              loading="lazy"
            />
          </ScrollCard>
        ))}
      </ScrollTrack>
    </ScrollContainer>
  );
};

export default ScrollCards;
