import React, { cloneElement } from "react";

const Breakfast = ({ overwrite, children }) => {
  const childrenArray = React.Children.toArray(children);

  const clonedChildren = childrenArray.map((child) => {
    return cloneElement(child, { foodName: overwrite });
  });

  return <div>{overwrite ? clonedChildren : children}</div>;
};

export default Breakfast;
