/* eslint-disable react/button-has-type */

export const BUTTON_TYPE_CLASSES = {
    waitlistBtn: 'waitlistBtn'
  };
  
  export default function Button({ button ,children, buttonType, ...otherProps}) {
    return(
      !button ? (
        <div
          className={`${buttonType}`}
        >
          {children}
        </div>
      ) :
        (
          <button
            className={`${buttonType}`}
            {...otherProps}>
            {children}
          </button>
        )
    );
  };