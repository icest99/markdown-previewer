import React, { useState, useEffect } from "react";
import marked from "marked";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Button,
  Grid,
  Paper,
  makeStyles,
  Tooltip,
  Divider,
  TextareaAutosize,
  TextField,
  Box,
  Container,
} from "@material-ui/core";

marked.setOptions({
  breaks: true,
});

const initialText = `# Markdown syntax guide
  
## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images

![This is a alt text.](https://picsum.photos/200/300 "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

markdown syntax example from https://markdownlivepreview.com/`;

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(initialText);
  }, []);

  function Preview({ markdown }) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer }),
        }}
        id="preview"
      ></div>
    );
  }

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <CssBaseline />
      <Grid container direction="column" alignItems="center" spacing={5}>
        <Grid
          item
          xs={12}
          style={{
            textAlign: "center",
            maxHeight: "100vh",
          }}
        >
          <div>
            <h1>Markdown Previewer!</h1>
          </div>
          <TextareaAutosize
            onChange={(event) => setText(event.target.value)}
            rowsMax="20"
            rowsMin="10"
            style={{
              resize: "none",
              minWidth: "50vw",
              fontSize: "1rem",
            }}
          >
            {initialText}
          </TextareaAutosize>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            overflowX: "hidden",
            maxHeight: "100vh",
            marginBottom: "5rem",
            minWidth: "85%",
          }}
        >
          <Paper style={{ padding: "2rem" }}>
            <Preview markdown={text} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
