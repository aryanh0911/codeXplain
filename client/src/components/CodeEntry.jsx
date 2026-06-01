import Header from "./Header"
import CodeSplainForm from "./forms/CodeSplainForm"

const CodeEntry = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center px-4 py-8 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10 mix-blend-screen"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl -z-10 mix-blend-screen"></div>
            
            <Header />
            <CodeSplainForm />
        </div>
    )
}

export default CodeEntry
