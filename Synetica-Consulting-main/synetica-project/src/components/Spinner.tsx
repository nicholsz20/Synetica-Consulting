const Spinner = () => {
  return (
    <div style={spinnerWrapper}>
      <div style={spinner}></div>
    </div>
  );
};

const spinnerWrapper = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'transparent',
};

const spinner = {
  width: '50px',
  height: '50px',
  border: '6px solid #1d4ed8', // blue shade
  borderTop: '6px solid transparent',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
};

// Add keyframes in a style tag for simplicity
const styleSheet = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export const SpinnerStyle = () => (
  <style>
    {styleSheet}
  </style>
);

export default Spinner;
