type Props = {
    handleClick : () => void
}

export default function SquareBtn({handleClick}: Props) {
    return (
        <button onClick={()=>handleClick()} className="border border-green-400 rounded size-8 p-1 m-2 float-right hover:bg-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                <path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
            </svg>
        </button>
    )
}