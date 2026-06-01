import Header from "./Header"
import CodeSplainForm from "./forms/CodeSplainForm"

const CodeEntry = () => {
    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            <Header />
            <CodeSplainForm />
        </div>
    )
}

export default CodeEntry