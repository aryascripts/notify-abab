import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

const source = '# This is a header\n\nAnd this is a paragraph';

export default function MarkdownEditor() {

  return (
    <EditorContainer>
      <ReactMarkdown source={source} />
    </EditorContainer>
  )
}

const EditorContainer = styled.div`
  padding: 20px;
`;
