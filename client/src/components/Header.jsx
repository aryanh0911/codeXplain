const Header = () => {
    return (
        <header className="w-full max-w-4xl py-6 mb-8 flex justify-center items-center border-b border-white/10">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400 tracking-tight">
                    CodeXplainer
                </h1>
            </div>
        </header>
    )
}

export default Header
