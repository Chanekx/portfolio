import { Stack } from "@mui/material";

type TechStackImageProps = {
  src: string;
  alt: string;
  style?: React.CSSProperties;
};

const TechStackImage = ({src, alt, style}: TechStackImageProps) => {
  return (
    <Stack>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          ...style
        }}
      />
    </Stack>
  );
};
export default TechStackImage;
