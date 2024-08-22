import { mount } from 'auth_app/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn : doSignIn }) => {
  console.log("path")
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    console.log("path", history.location.pathname)
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: ()=>{
        doSignIn()
        history.push("/")
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
