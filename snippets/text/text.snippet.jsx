export const TEXT_TYPE_CLASSES = {
  title: "title",
  subtitle: 'subtitle'
  };
  
  const Text = ({ textType, children, className }) => {
    const classes = `${textType} ${
      textType === "header" && "header"
    } ${className}`;
  
    return (
      <p className={classes} data-text={children}>
        {children}
      </p>
    );
  };
  
  export default Text;
