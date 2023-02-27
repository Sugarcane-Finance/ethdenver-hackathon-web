import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Modal from "../../../components/modal/Modal";

interface Props {
  title: string;
  youtubeVideoId: string;
}
const AssetClassSection: React.FC<Props> = ({ title, youtubeVideoId }) => {
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <>
      <Box mb={8}>
        <Box
          mb={1}
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textDecoration: "underline dotted",
              cursor: "pointer",
              fontWeight: 500,
            }}
            onClick={() => setShowVideo(true)}
          >
            Learn More
          </Typography>
        </Box>
        <Divider />
      </Box>
      <Modal open={showVideo} setOpen={setShowVideo}>
        <Box>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </>
  );
};

export default AssetClassSection;
