import { Sandpack } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';
import './Sandbox.css';

import { appCode, indexCode, counterCode } from './sandboxCode';

const SandboxComp = () => {
  return (
    <Sandpack
      template='react'
      theme='sandpack-dark'
      files={{
        '/index.js': indexCode,
        '/App.js': appCode,
        '/counter-context.js': counterCode,
      }}
      customSetup={{
        entry: '/index.js',
      }}
      options={{
        editorHeight: 450,
        editorWidthPercentage: 50,
        showInlineErrors: true,
        classes: {
          'sp-wrapper': 'custom-wrapper',
          'sp-layout': 'custom-layout',
          'sp-tab-button': 'custom-tab',
          'sp-stack': 'custom-stack',
        },
      }}
    />
  );
};

export default SandboxComp;
