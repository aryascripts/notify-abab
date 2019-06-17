import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import * as firebase from "firebase/app";


const textStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none'
}

// const textContent = '';
// const content = firebase.database().ref('pages/001');
// content.on('value', snapshot => {
//
// });

export default class MarkdownEditor extends React.Component<any, {textContent: string}> {

  db: any;
  textContent: any;

  constructor(props: any) {
    super(props);
    this.state = {
      textContent: '#This is a header'
    }
    this.handleChange = this.handleChange.bind(this);
    this.db = firebase.firestore();
    this.textContent = this.db.collection('pages').doc('001');

  }

  componentDidMount() {
    // this.setState({ textContent: 'some content' })
    this.textContent
      .onSnapshot(doc => {
        this.setState({ textContent: doc.data().markdown })
        console.log(doc.data().markdown);
      })
  }

  handleChange(event) {
   this.setState({textContent: event.target.value});
   this.textContent.set({
     markdown: event.target.value
   }, {merge: true});
  }

  render() {
    return (
      <EditorContainer>
        <textarea style={textStyle}
          value={this.state.textContent}
          onChange={this.handleChange}>

        </textarea>
      </EditorContainer>
    )}
}

const EditorContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
`;
