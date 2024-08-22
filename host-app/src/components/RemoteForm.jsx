import { mount } from 'todoform_app/FormApp';

import React, { useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";


export default ({input_type="add", isSignedIn=false} ) => {
  console.log("type:", input_type)

  const ref = useRef(null);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    mount(ref.current, input_type, params.id);
    const listener = (event) => {
      console.log("user_input : " +event.detail.link)
      history.push(event.detail.link)
    }

    window.addEventListener('NAV_EVENT', listener)

    return () => {
      window.removeEventListener('NAV_EVENT', listener);
    }       
  });

  return <div ref={ref} />;
};
