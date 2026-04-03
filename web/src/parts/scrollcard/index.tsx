import React, { useState, useLayoutEffect, useRef, useId } from "react";
import { Box, Card, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

const FADE = "rgba(26, 31, 40, 1)";
const FADE_END = "rgba(26, 31, 40, 0)";

type ScrollCardProps = {
  src: string;
  alt?: string;
  title?: string;
};

type ScrollCardsProps = {
  cards: ScrollCardProps[];
  speed?: number;
};

const GAP_PX = 16;

const ScrollContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  minWidth: "100%",
  margin: "0 auto",
  overflow: "hidden",
  position: "relative",
  borderRadius: "12px",
  padding: `${theme.spacing(2)} 0`,
  display: "flex",
  touchAction: "pan-y",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    width: "48px",
    height: "100%",
    zIndex: 2,
    pointerEvents: "none",
    [theme.breakpoints.up("sm")]: {
      width: "72px",
    },
  },
  "&::before": {
    left: 0,
    background: `linear-gradient(to right, ${FADE}, ${FADE_END})`,
  },
  "&::after": {
    right: 0,
    background: `linear-gradient(to left, ${FADE}, ${FADE_END})`,
  },
}));

const ScrollCard = styled(Card)(({ theme }) => ({
  flex: "0 0 140px",
  height: 180,
  borderRadius: "12px",
  overflow: "hidden",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    flex: "0 0 200px",
    height: 250,
  },
  [theme.breakpoints.up("md")]: {
    flex: "0 0 250px",
    height: 300,
  },
  "&:hover": {
    transform: "translateY(-5px) scale(1.02)",
    boxShadow: "0 8px 16px rgba(0,0,0,0.35)",
  },
  "&:focus-visible": {
    outline: "2px solid #00ff88",
    outlineOffset: "2px",
  },
}));

const TextOverlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
  color: "white",
  padding: "16px 12px 12px",
  transform: "translateY(100%)",
  transition: "transform 0.3s ease",
  ".scroll-card:hover &": {
    transform: "translateY(0)",
  },
});

const CardTitle = styled("h3")(({ theme }) => ({
  margin: "0 0 6px 0",
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: 1.2,
  [theme.breakpoints.up("sm")]: {
    fontSize: "17px",
  },
}));

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
  const instanceId = useId().replace(/:/g, "");
  const [isPaused, setIsPaused] = useState(false);
  const [animationDistance, setAnimationDistance] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeName = `techStackMarquee-${instanceId}`;

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el || cards.length === 0) return;

    const measure = () => {
      const nodes = el.querySelectorAll("[data-scroll-card]");
      if (nodes.length < cards.length) return;
      let widthSum = 0;
      for (let i = 0; i < cards.length; i++) {
        widthSum += (nodes[i] as HTMLElement).getBoundingClientRect().width;
      }
      const segment = widthSum + GAP_PX * (cards.length - 1);
      setAnimationDistance(segment);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [cards]);

  const duplicateCards = [...cards, ...cards, ...cards];

  return (
    <ScrollContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <Box
        ref={trackRef}
        sx={{
          display: "flex",
          gap: `${GAP_PX}px`,
          padding: `0 ${GAP_PX}px`,
          width: "fit-content",
          minWidth: "100%",
          willChange: "transform",
          [`@keyframes ${marqueeName}`]: {
            "0%": { transform: "translateX(0)" },
            "100%": {
              transform:
                animationDistance > 0
                  ? `translateX(-${animationDistance}px)`
                  : "translateX(0)",
            },
          },
          animation:
            animationDistance > 0
              ? `${marqueeName} ${speed}s linear infinite`
              : "none",
          animationPlayState: isPaused ? "paused" : "running",
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
      >
        {duplicateCards.map((card, index) => (
          <ScrollCard
            key={`${card.src}-${index}`}
            className="scroll-card"
            data-scroll-card
            tabIndex={0}
            component="article"
          >
            <CardMediaStyled
              component="img"
              image={card.src}
              alt={card.alt || card.title || `Tech stack ${index + 1}`}
              loading="lazy"
            />
            {card.title && (
              <TextOverlay>
                <CardTitle>{card.title}</CardTitle>
              </TextOverlay>
            )}
          </ScrollCard>
        ))}
      </Box>
    </ScrollContainer>
  );
};

export default ScrollCards;
