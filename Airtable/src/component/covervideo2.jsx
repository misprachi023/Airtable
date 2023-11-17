import { Box } from "@chakra-ui/react";
export default function Video() {
  return (
    <Box display={'flex'} justifyContent={'center'}  marginTop={"5rem"} textAlign={"center"} position={"relative"}>
      <video
        style={{ borderRadius: "2rem" }}
        borderRadius={"5rem"}
        objectFit={"cover"}
        width={"90%"}
        ratio={1}
        margin={"auto"}
        autoPlay
        loop
        mute
        controls={false}
        title=""
        src="https://videos.ctfassets.net/wl95ljfippl8/VFd3XWmGbDVEucDUVZYbR/ecf76f3bc346bfaf092787c9bb819a4f/equinox_compressed.mp4#t=0.5"
      ></video>
    </Box>
  );
}
