import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react'

const CodeExplanation = ({explanation}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(explanation); //built-in browser API that copies text to the clipboard.
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="relative w-full max-w-4xl mt-6 bg-transparent p-6 rounded-2xl shadow-lg">
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 text-sm px-2 py-1 rounded bg-gray-600 text-white hover:bg-gray-500 cursor-pointer"
            >
                {copied ? "Copied!" : "📋 Copy"}
            </button>

            <h2 className="text-xl font-semibold mb-2">Explanation</h2>
            <Markdown remarkPlugins={[remarkGfm]}>{explanation}</Markdown>
        </div>
    )
}

export default CodeExplanation;