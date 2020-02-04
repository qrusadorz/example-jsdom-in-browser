import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const htmlText = `<!DOCTYPE html><body><div><p id='test1'>Hello world</p><p id='test2'>Hello world2</p><p id='test3'>Hello world3</p></div></body>`;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright c '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {

  function handleClick() {
    const dom = new JSDOM(htmlText);
    console.log("JSDOM:", dom.window.document.querySelector("#test1").parentElement.querySelector("#test2").textContent);

    const domparser = new DOMParser();
    const doc = domparser.parseFromString(htmlText, "text/html");
    const elements = doc.querySelectorAll("#test1");
    // console.log("doc:", doc);
    console.log("DOMParser:", Array.from(elements[0].parentElement.querySelectorAll("#test2")).map(v => v.outerText || v.textContent)[0]);
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <Typography variant="body1" component="h5" gutterBottom>
          {htmlText}
        </Typography>
        <Button variant="contained" color="primary" fullWidth onClick={handleClick}>
          try
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
