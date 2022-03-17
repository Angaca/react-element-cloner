import React, { cloneElement, useState } from "react";

const ToggleInputs = ({ children }) => {
  const [disabled, setDisabled] = useState(false);
  const childrenArray = React.Children.toArray(children);

  const clonedChildren = childrenArray.map((child) => {
    return cloneElement(child, { disabled });
  });

  console.log(clonedChildren, disabled);
  return (
    <div>
      <button onClick={() => setDisabled(!disabled)}>Disable inputs</button>
      {clonedChildren}
    </div>
  );
};

export default ToggleInputs;
