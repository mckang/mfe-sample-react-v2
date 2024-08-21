import { mount } from 'todolist_app/ListApp';

import React, { useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mount(ref.current);
    const listener = (event) => {
      console.log("user_input : " +event.detail.link)
      navigate(event.detail.link)
    }

    window.addEventListener('NAV_EVENT', listener)

    return () => {
      window.removeEventListener('NAV_EVENT', listener);
    }    
  });

  return <div ref={ref} />;
};
