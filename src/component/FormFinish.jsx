import { useState } from "react";

import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps
} from "@mui/material/CircularProgress";

function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800]
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#0b0909" : "#0b0909",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round"
          }
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}
const styles = {
  container: {
    width: '100%',
    overflow: 'hidden'
  },
  frameWrapper: {
    height: 0,
    paddingBottom: '75%',
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  },
  frame: {
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'block' // default display
  },
};

const FormFinish = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  }

  return (
    <div style={styles.container}>
      <div style={styles.frameWrapper}>
        {!isLoaded && (
          <div
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {/* <p>Loading...</p> */}
            <FacebookCircularProgress />
          </div>
        )}
        <iframe
          onLoad={handleLoad}
          allow="autoplay"
          allowFullScreen
          height="100%"
          src="https://giphy.com/embed/ATyFnIcP0iOJjDiOql/video"
          style={styles.frame}
          width="100%"
          title="sss"
        />
      </div>
    </div>
  );
};

export default FormFinish;
