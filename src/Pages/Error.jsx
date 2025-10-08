import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
    const error = useRouteError();
    return (
        <div>
          <div>{error.message}</div>;
        </div>
    );
};

export default Error;