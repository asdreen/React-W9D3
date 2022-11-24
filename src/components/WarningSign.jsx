import Alert from "react-bootstrap/Alert";

const WarningSign = () => {
  return (
    <>
      {["danger"].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
};

export default WarningSign;
