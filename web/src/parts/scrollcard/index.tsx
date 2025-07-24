import React, { useState, useEffect, useRef } from "react";
import { Box, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

type ScrollCardProps = {
  src: string;
  alt?: string;
  title?: string;
};

type ScrollCardsProps = {
  cards: ScrollCardProps[];
  speed?: number;
};

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

const ScrollTrack = styled(Box)<{ 
  $isPaused: boolean; 
  $speed: number;
  $animationDistance: number;
}>(({ $isPaused, $speed, $animationDistance }) => ({
  display: "flex",
  gap: "20px",
  animation: `scroll-animation ${$speed}s linear infinite`,
  animationPlayState: $isPaused ? "paused" : "running",
  padding: "0 20px",
  width: "fit-content",
  minWidth: "100%",
  willChange: "transform",
  "@keyframes scroll-animation": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: `translateX(-${$animationDistance}px)`,
    },
  },
}));

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

const TextOverlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
  color: "white",
  padding: "20px 16px 16px",
  transform: "translateY(100%)",
  transition: "transform 0.3s ease",
  ".scroll-card:hover &": {
    transform: "translateY(0)",
  },
});

const CardTitle = styled("h3")({
  margin: "0 0 8px 0",
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "1.2",
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

const ScrollCards: React.FC<ScrollCardsProps> = ({ cards, speed = 40 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [animationDistance, setAnimationDistance] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current && cards.length > 0) {
     
      const cardWidth = 250;
      const gap = 20;
      const totalCardWidth = (cardWidth + gap) * cards.length;
      setAnimationDistance(totalCardWidth);
    }
  }, [cards]);

  
  const duplicateCards = [...cards, ...cards, ...cards];

  return (
    <ScrollContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <ScrollTrack 
        ref={trackRef}
        $isPaused={isPaused} 
        $speed={speed}
        $animationDistance={animationDistance}
      >
        {duplicateCards.map((card, index) => (
          <ScrollCard
            key={index}
            className="scroll-card"
            role="button"
            tabIndex={0}
          >
            <CardMediaStyled
              component="img"
              image={card.src}
              alt={card.alt || `Card ${index + 1}`}
              loading="lazy"
            />
            {(card.title) && (
              <TextOverlay>
                {card.title && <CardTitle>{card.title}</CardTitle>}
              </TextOverlay>
            )}
          </ScrollCard>
        ))}
      </ScrollTrack>
    </ScrollContainer>
  );
};

export default ScrollCards;