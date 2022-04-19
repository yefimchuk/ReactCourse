import React, { Suspense } from "react";
import Loading from "../common/Loading/Loading";

export const withSuspense = (Component: any) => {
  return (props: any) => {
    <Suspense fallback={<Loading />}>
      <Component {...props}/>
    </Suspense>;
  };
};
