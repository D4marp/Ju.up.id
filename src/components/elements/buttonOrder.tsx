const ButtonOrder = () => {
    return (
        <div className="relative">
            <a 
                href="https://wa.me/+6289672081458" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
            >
                <div className="
                    relative
                    overflow-hidden
                    text-white 
                    font-bold
                    px-8 
                    py-3
                    text-lg
                    bg-gradient-to-r 
                    from-juup-orange 
                    to-juup-yellow
                    rounded-lg
                    transform
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-xl
                    hover:from-orange-600
                    hover:to-yellow-600
                    before:content-['']
                    before:absolute
                    before:top-0
                    before:left-0
                    before:w-full
                    before:h-full
                    before:bg-gradient-to-r
                    before:from-white/20
                    before:to-transparent
                    before:translate-x-[-100%]
                    hover:before:translate-x-[100%]
                    before:transition-transform
                    before:duration-700
                    "
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Pre-order Sekarang
                        <svg 
                            className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>
                </div>
            </a>
        </div>
    )
}

export default ButtonOrder