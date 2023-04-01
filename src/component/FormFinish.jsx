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
    },
  };
  
  
  
  const FormFinish = () => {
    return (
      <div style={styles.container}>
        <div style={styles.frameWrapper}>
          <iframe
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
  