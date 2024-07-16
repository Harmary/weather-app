import React, { PropsWithChildren } from "react";

type RequestStateRenderProps = {
  isLoading: boolean;
  error?: string;
  showMessages?: boolean;
};

export const RequestStateRender: React.FC<PropsWithChildren<RequestStateRenderProps>> = ({
  isLoading,
  error,
  showMessages = true,
  children,
}) => {
  if (isLoading) {
    return showMessages ? <p>Loading...</p> : null;
  }

  if (!isLoading && error) {
      return showMessages ? <p>{error}</p> : null;
  }

  return <>{children}</>;
};
