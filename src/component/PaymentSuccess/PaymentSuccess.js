import React from 'react';

const PaymentSuccess = () => {
  return (
    <div style={styles.container}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');
          
          body {
            margin: 0;
            padding: 0;
            font-family: 'Poppins', sans-serif;
          }

          /* Firecracker animation */
          @keyframes firecracker {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(0.5); }
          }

          .firecracker {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #ff0000;
            border-radius: 50%;
            animation: firecracker 1s ease-in-out infinite;
          }

          .firecracker:nth-child(1) { top: 20%; left: 50%; animation-delay: 0s; }
          .firecracker:nth-child(2) { top: 40%; left: 60%; animation-delay: 0.2s; }
          .firecracker:nth-child(3) { top: 50%; left: 40%; animation-delay: 0.4s; }
          .firecracker:nth-child(4) { top: 60%; left: 55%; animation-delay: 0.6s; }
          .firecracker:nth-child(5) { top: 70%; left: 45%; animation-delay: 0.8s; }
        `}
      </style>

      {/* Firecracker elements for celebratory animation */}
      <div className="firecracker"></div>
      <div className="firecracker"></div>
      <div className="firecracker"></div>
      <div className="firecracker"></div>
      <div className="firecracker"></div>

      {/* Green checkmark */}
      <div style={styles.iconContainer}>
        <span style={styles.checkmark}>✔️</span>
      </div>

      <h1 style={styles.successMessage}>Payment Successful!</h1>
      <p style={styles.description}>
        Thank you for your payment. Your transaction has been successfully processed.
      </p>
      <button style={styles.button}>Go to Home</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    position: 'relative',
    textAlign: 'center',
    backgroundColor: '#000', // Black background
    color: '#fff',
    padding: '0 20px',
    fontFamily: "'Poppins', sans-serif",
    overflow: 'hidden',
  },
  iconContainer: {
    fontSize: '100px',
    marginBottom: '20px',
  },
  checkmark: {
    fontSize: '120px',
    color: '#4CAF50', // Green checkmark
  },
  successMessage: {
    fontSize: '36px',
    fontWeight: '600',
    margin: '10px 0',
  },
  description: {
    fontSize: '18px',
    fontWeight: '300',
    maxWidth: '500px',
    margin: '10px 0',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

export default PaymentSuccess;
