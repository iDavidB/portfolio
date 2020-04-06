import React, { FC } from "react";

export const AbsoluteWrapper: FC = ({ children }) => (
  <div className="position-absolute">{children}</div>
);
