import { colors } from 'constants/colors'
interface Props {
    style?: object
}

export const MapPinIcon = ({ style }: Props) => {
    return (
        <svg
            width="54"
            height="69"
            viewBox="0 0 54 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={style}
        >
            <path
                d="M52.5 28.583C52.5 49.2913 27 67.0413 27 67.0413C27 67.0413 1.5 49.2913 1.5 28.583C1.5 21.5216 4.1866 14.7494 8.96878 9.75629C13.751 4.76313 20.237 1.95801 27 1.95801C33.763 1.95801 40.249 4.76313 45.0312 9.75629C49.8134 14.7494 52.5 21.5216 52.5 28.583Z"
                fill={colors.primary.main}
                stroke={colors.primary.main}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.2082 10.3608C33.5859 10.4424 39.7697 14.3982 42.5 20.3423C44.9746 25.7297 44.368 32.4193 40.824 37.3297C37.6739 41.6943 32.3849 44.4575 26.9628 44.4399C21.629 44.4227 16.3765 41.7154 13.2112 37.3297C10.5774 33.6806 9.4713 28.9519 10.2389 24.5151C11.1784 19.0851 14.9241 14.2169 19.9825 11.8963C22.2416 10.8599 24.7452 10.337 27.2082 10.3608V10.3608ZM26.9177 16.0402C24.1074 16.0671 21.3262 17.2013 19.2719 19.1326C15.9158 22.2879 14.6922 27.5087 16.6034 31.8871C18.3603 35.9121 22.5792 38.76 27.0176 38.76C32.3932 38.76 37.5296 34.5 38.2719 28.8705C38.7233 25.4473 37.4805 21.8494 35.0325 19.394C32.9649 17.3202 30.1027 16.0784 27.1446 16.0404C27.069 16.0397 26.9933 16.0402 26.9177 16.0402V16.0402ZM27.2801 21.7241C29.6956 21.8434 31.9254 23.6517 32.5213 26.0148C32.9893 27.8707 32.4326 29.9538 31.0978 31.338C29.5375 32.9559 26.9915 33.5272 24.8693 32.6531C22.5355 31.6917 21.0157 29.0448 21.4103 26.5229C21.8138 23.9438 24.1703 21.8357 26.8428 21.7202H27.1923C27.2216 21.7214 27.2508 21.7228 27.2801 21.7241V21.7241Z"
                fill="white"
            />
        </svg>
    )
}
