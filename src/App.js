import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const htmlText = `<!DOCTYPE html><p>Hello world</p>`;

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
    console.log(dom.window.document.querySelector("p").textContent);
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
