import './App.css';
import {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import { FaEdit, FaExpand, FaBookOpen } from 'react-icons/fa'

const PreviewArea = ({output}) =>{
  return (
  <div id="preview">      
      <ReactMarkdown>
        {output}
      </ReactMarkdown>
  </div>)
}

const Main = () =>{  
  const [userText, setText] = useState(placeholder);
  const [editorMaximize, setEditorView] = useState(false);
  const [previewMaximize, setPreviewView] = useState(false);
  const [textAreaRows, setRow] = useState("15");

  const changeEditorSize = () =>{
      if (editorMaximize) {
        setEditorView(false);
        setRow("15");
      }
      else {
        setEditorView(true)
        setRow("50");        
      }         
  }
  const changePreviewerSize = () =>{
    previewMaximize? setPreviewView(false) : setPreviewView(true)
  }
  
  return (
      <div id="text-area">
        <div id="editor-wrapper">
          {previewMaximize ? null : (
            <div>
                <div className="header">
                  <div>
                    <FaEdit /> 
                    <strong>Editor</strong>
                  </div> 
                  <FaExpand onClick={changeEditorSize} id="clickable" />
                </div>
                <div id="main-editor">
                  <form>
                    <label>
                      <textarea rows={textAreaRows} onChange={e => setText(e.target.value)}>{userText}</textarea>
                    </label>
                  </form>
                </div>
            </div>
                ) }
        </div>
        <div id="preview-wrapper">
          {editorMaximize ? null : (
            <div>
                <div className="header">
                  <div>
                    <FaBookOpen/> <strong>Preview</strong>
                  </div>
                  <FaExpand onClick={changePreviewerSize} id="clickable"/>
                </div>
                <div>
                  <PreviewArea output={userText}/>
                </div>
            </div>)}
        </div>
      </div>
  )
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.
npm
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  return (
    <div className="App">
      <div class="container">
        <div id="main-content"><Main /></div>
        <div id="creator">-JG</div>
      </div>
    </div>
  );
}

export default App;
