import { mount } from 'todolist_app/ListApp';

import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default ({isSignedIn=false}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    console.log("isSignedIn:", isSignedIn)

    mount(ref.current, isSignedIn);
    const listener = (event) => {
      console.log("user_input : " +event.detail.link)
      history.push(event.detail.link)
    }

    window.addEventListener('NAV_EVENT', listener)

    return () => {
      window.removeEventListener('NAV_EVENT', listener);
    }    
  },[]);

  return <div ref={ref} />;
};
