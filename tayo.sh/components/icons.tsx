type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    logo: (props: IconProps) => (
        <svg
            xmlns=""
            viewBox="0 0 24 24"
            fill ="none"
            stroke ="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
        </svg>
    ),
    github: (props: IconProps) => (
        <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            {...props}
        >
            <path 
                d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" 
            />
        </svg>
    ),
    linkedIn: (props: IconProps) => (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 76 76"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            baseProfile="full"
            enableBackground="new 0 0 76.00 76.00"
            xmlSpace="preserve"
            {...props}
        >
            <path
                fill="#000000"
                fillOpacity={1}
                strokeWidth={0.2}
                strokeLinejoin="round"
                d="M 17.4167,30.0833L 26.9167,30.0833L 26.9167,58.5833L 17.4167,58.5833L 17.4167,30.0833 Z M 31.6667,30.0833L 41.1667,30.0833L 41.1667,33.5574C 44.1836,31.7521 47.7589,30.0833 50.6667,30.0833C 57,30.0833 58.5833,36.4167 58.5833,36.4167L 58.5833,58.5833L 49.0833,58.5833L 49.0833,39.5833C 47.8558,35.9009 44.7251,36.0249 41.1667,39.2176L 41.1667,58.5833L 31.6667,58.5833L 31.6667,30.0833 Z M 22.1667,17.4167C 24.79,17.4167 26.9167,19.5433 26.9167,22.1667C 26.9167,24.79 24.79,26.9167 22.1667,26.9167C 19.5433,26.9167 17.4167,24.79 17.4167,22.1667C 17.4167,19.5433 19.5433,17.4167 22.1667,17.4167 Z "
            />
        </svg>
    )
}