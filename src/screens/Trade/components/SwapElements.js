import React from "react";

const styles = {
    frame: {
        border: '1px none',
        height: '309px',
        overflow: 'hidden',
        position: 'relative',
        width: '617px'
    },
    overlap: {
        height: '329px',
        left: '-1px',
        position: 'relative',
        top: '7px',
        width: '564px'
    },
    overlapWrapper: {
        height: '134px',
        left: '0',
        position: 'absolute',
        top: '140px',
        width: '564px'
    },
    overlapGroup: {
        height: '123px',
        left: '1px',
        position: 'relative',
        width: '563px'
    },
    div: {
        height: '122px',
        left: '0',
        position: 'absolute',
        top: '1px',
        width: '563px'
    },
    rectangle: {
        backgroundColor: '#0c0e10',
        borderRadius: '25px',
        height: '58px',
        left: '0',
        position: 'absolute',
        top: '50px',
        width: '542px'
    },
    textWrapper: {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: '300',
        left: '489px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '42px',
        whiteSpace: 'nowrap',
        width: '74px'
    },
    textWrapper2: {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: '300',
        left: '416px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '104px'
    },
    textWrapper3: {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '20px',
        fontWeight: '500',
        left: '500px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '20px'
    },
    textWrapper4: {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: '300',
        left: '21px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '174px'
    },
    chevronDown: {
        height: '20px',
        left: '196px',
        position: 'absolute',
        top: '29px',
        width: '20px'
    },
    textWrapper5: {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '20px',
        fontWeight: '500',
        left: '480px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '249px',
        whiteSpace: 'nowrap',
        width: '74px'
    },
    overlapGroupWrapper: {
        height: '150px',
        left: '0',
        overflow: 'hidden',
        position: 'absolute',
        top: '0',
        width: '564px'
    },
    overlap2: {
        height: '122px',
        left: '2px',
        position: 'relative',
        width: '563px'
    },
    selectACurrency: {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: '300',
        left: '20px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '174px'
    },
    overlap3: {
        height: '122px',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '563px'
    },
    textWrapper6: {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Light", Helvetica',
        fontSize: '20px',
        fontWeight: '300',
        left: '415px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '104px'
    },
    textWrapper7: {
        color: '#848a92',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '20px',
        fontWeight: '500',
        left: '499px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
        width: '20px'
    },
    img: {
        height: '20px',
        left: '194px',
        position: 'absolute',
        top: '28px',
        width: '20px'
    },
    overlapWrapper2: {
        height: '55px',
        left: '238px',
        position: 'absolute',
        top: '122px',
        width: '56px'
    },
    arrowWrapper: {
        backgroundColor: '#0d0e10',
        borderRadius: '27.5px',
        height: '55px',
        left: '1px',
        position: 'relative',
        width: '55px'
    },
    arrow: {
        height: '26px',
        left: '16px',
        position: 'absolute',
        top: '15px',
        width: '22px'
    },
    textWrapper8: {
        color: '#3c61c0',
        fontFamily: '"TT Firs Neue-Medium", Helvetica',
        fontSize: '20px',
        fontWeight: '500',
        left: '21px',
        letterSpacing: '0',
        lineHeight: '72px',
        position: 'absolute',
        top: '247px',
        whiteSpace: 'nowrap',
        width: '190px'
    }
};

export const SwapElements = () => {
    return (
      <div style={styles.frame}>
        <div style={styles.overlap}>
          <div style={styles.overlapWrapper}>
            <div style={styles.overlapGroup}>
              <div style={styles.div}>
                <div style={styles.rectangle} />
                <div style={styles.textWrapper}>0.0</div>
                <div style={styles.textWrapper2}>Balance</div>
                <div style={styles.textWrapper3}>0</div>
              </div>
              <div style={styles.textWrapper4}>Select A Currency</div>
              <img
                style={styles.chevronDown}
                alt="Chevron down"
                src="https://generation-sessions.s3.amazonaws.com/b4e4aba181ec558fdad7709537d49e04/img/chevron-down-1.svg"
              />
            </div>
          </div>
          <div style={styles.textWrapper5}>0%</div>
          <div style={styles.overlapGroupWrapper}>
            <div style={styles.overlap2}>
              <div style={styles.selectACurrency}>Select A Currency</div>
              <div style={styles.overlap3}>
                <div style={styles.textWrapper6}>Balance</div>
                <div style={styles.rectangle} />
                <div style={styles.textWrapper}>0.0</div>
                <div style={styles.textWrapper7}>0</div>
              </div>
              <img
                style={styles.img}
                alt="Chevron down"
                src="https://generation-sessions.s3.amazonaws.com/b4e4aba181ec558fdad7709537d49e04/img/chevron-down-1.svg"
              />
            </div>
          </div>
          <div style={styles.overlapWrapper2}>
            <div style={styles.arrowWrapper}>
              <img
                style={styles.arrow}
                alt="Arrow"
                src="https://generation-sessions.s3.amazonaws.com/b4e4aba181ec558fdad7709537d49e04/img/arrow-1.svg"
              />
            </div>
          </div>
          <div style={styles.textWrapper8}>Slippage Tolerance</div>
        </div>
      </div>
    );
  };

export default SwapElements;