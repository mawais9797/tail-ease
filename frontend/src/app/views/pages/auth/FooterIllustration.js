// ** React Imports
import { Fragment } from "react";

// ** MUI Components
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";

// Styled Components
const MaskImg = styled("img")(() => ({
  bottom: 0,
  zIndex: -1,
  width: "100%",
  position: "absolute",
}));

const Tree1Img = styled("img")(() => ({
  left: 0,
  bottom: 0,
  position: "absolute",
}));

const Tree2Img = styled("img")(() => ({
  right: 0,
  bottom: 0,
  position: "absolute",
}));

const FooterIllustrationsV1 = (props) => {
  // ** Props
  const { image1, image2 } = props;

  // ** Hook
  const theme = useTheme();

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down("md"));
  if (!hidden) {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          zIndex: -1,
        }}
      >
        {image1 || <Tree1Img alt="tree" src="/images/pages/auth-v1-tree.png" />}
        <MaskImg
          alt="mask"
          src={`/images/pages/auth-v1-mask-${theme.palette.mode}.png`}
        />
        {image2 || (
          <Tree2Img alt="tree-2" src="/images/pages/auth-v1-tree-2.png" />
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default FooterIllustrationsV1;
