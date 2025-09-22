import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock() {
  const code = `import { Runware } from "@runware/sdk-js";

const runware = new Runware({ apiKey: "your-api-key" });

const images = await runware.requestImages({
  positivePrompt: "A beautiful landscape",
  model: "runware:101@1",
  width: 512,
  height: 512,
});

const videos = await runware.requestVideoInference({
  positivePrompt: "A flowing river",
  model: "runware:501@1",
  width: 512,
  height: 512,
  frames: 16,
});
`;

  return (
    <div className="bg-base-100 rounded-md p-6">
      <h3 className="text-xl font-bold text-accent mb-4">The Code</h3>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: '8px',
          fontSize: '14px',
          background: '#1e1e1e',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
