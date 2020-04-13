import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Button, Input, Typography } from '@material-ui/core';

function Search ({ handleInput, search }){
    return(
        <Input onChange={handleInput}
        onKeyPress={search}
         className="text-center searchbox"
          align="center"
          placeholder="Enter Your Movie here.."
         autoFocus={true}
         color="secondary"> </Input>

    )
}

export default Search;