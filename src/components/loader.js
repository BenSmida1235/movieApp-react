import React from "react";
import Spinner from "./spinner";

const WithLoader = WrappedComponent => {
  const withLoader = props => {
    return props.loading ? <Spinner /> : <WrappedComponent {...props} />;
  };
  return withLoader;
};
export default WithLoader;
