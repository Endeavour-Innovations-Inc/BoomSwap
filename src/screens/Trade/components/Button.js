import React from "react";

const styles = {
    button: {
      alignItems: 'flex-end',
      background: 'linear-gradient(180deg, rgb(247, 179, 50) 0%, rgb(252.88, 173.7, 20.02) 35.19%, rgb(213.56, 129.21, 2.67) 100%)',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      border: '0.25px none',
      borderRadius: '10px', // Rounded edges
      display: 'flex',
      gap: '6px',
      height: '56px',
      justifyContent: 'center',
      minWidth: '300px', // Adjusted minWidth for less width
      padding: '19px 30px',
      position: 'relative',
      width: '84%'  // Adjusted width to take 80% of the parent container's width
    },
    connectWallet: {
      height: '22.8px',
      marginBottom: '-5.4px',
      position: 'relative',
      width: '161.2px'
    }
  };

export const Button = () => {
  return (
    <div style={styles.button}>
      <img
        style={styles.connectWallet}
        alt="Connect wallet"
        src="https://generation-sessions.s3.amazonaws.com/b0527fd00773b5a521f77dc2ca521874/img/connect-wallet.png"
      />
    </div>
  );
};
