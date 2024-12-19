const styles = {
  appBar: {
    height: "100px",
    padding: "8px 0",
    background: 'transparent',
    backdropFilter: 'blur(7px)',
    WebkitBackdropFilter: 'blur(5px)',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    justifyContent: "center"
  },
  container: {
    margin: "0px auto !important",
    maxWidth: "1649px !important",
    "@media (max-width: 992px)": {
      maxWidth: "960px !important"
    },
    "@media (max-width: 768px)": {
      maxWidth: "720px !important"
    },
    "@media (max-width: 576px)": {
      maxWidth: "540px !important"
    }
  },
  menuButton: {
    padding: "16px",
    borderRadius: "8px",
    border: "1px solid white",
    borderColor: "hsla(0,0%,100%,.1)"
  },
  exchangeButton: {
    boxShadow: "0 0 10px rgba(0,0,0,.35)",
    padding: "12px 24px",
    backgroundColor: "#8671ffcc",
    borderRadius: "8px",
    "&.MuiButton-root:hover": { 
      backgroundColor: "#8671ff",
      borderColor: "#8671ff",
      boxShadow: "0 0 30px rgba(134,113,255,.35)"
    },
    "@media (max-width: 1200px)": {
      padding: "12px 24px !important",
    },
    "@media (max-width: 992px)": {
      padding: "12px 8px !important",
    }
  },
  navigationMenu: (isWideScreen: boolean) => ({
    backgroundColor: isWideScreen ? "none" : "#202029",
    position: isWideScreen ? "relative" : "absolute",
    top: isWideScreen ? "0px" : "100px",
    left: isWideScreen ? "0px" : "0px",
    width: isWideScreen ? "auto" : "100%",
    padding: isWideScreen ? "0 0" : "1rem 0",
    gap: isWideScreen ? 0 : "1rem",
    // transition: "all 0.3s ease-in-out"  
  }),
  headerItem: {
    padding: "8px 24px",
    textTransform: "none",
    background: "transparent",
    color: "white",
    transition: "color 0.3s",
    borderRadius: "4rem",
    "&.MuiButton-root:hover": { 
      background: "transparent",
      color: "#8671FF",
    }
  }
};

export default styles;