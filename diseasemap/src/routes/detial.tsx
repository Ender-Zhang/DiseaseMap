import { css } from '@emotion/css';
import { Form, useLoaderData } from "react-router-dom";

import { useParams } from 'react-router-dom';





export default function Detail({ props } : any) {

    
    function User() {
        const { id } = useParams();
        // userId is the value of the "userId" route parameter
        // ...
        console.log("State: "+id);
        return id;
      }
      User();
    const id = User();
  return (
    <div>
      <h1>This is Detail Page</h1>
      <h1>This page is belong to State ID: {id}</h1>
    </div>
  );
}
