'use client'
import { getBaseUrl } from "@core/utils/getBaseUrl"
import { usePathname } from "next/navigation"
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"
import toast, { Toaster } from "react-hot-toast"

const ShareButtons = () => {
        const pathname = usePathname()
        const curentUrl =  `${getBaseUrl()}${pathname}`

        const handleCopyLink = () => {
            navigator.clipboard.writeText(curentUrl).then(() => {
                toast.custom(<div className="w-full max-w-xl rounded-lg shadow-lg flex justify-center py-2 bg-black text-white">Link berhasil disalin</div>, {
                    duration: 2000,
                    position: 'bottom-center'
                })
            })
        }
    return (
        <div>
            <div className="flex justify-start items-center gap-2">
                <div>
                    <p>Bagikan:</p>
                </div>
                <div className="flex gap-1 md:gap-2">
                    <WhatsappShareButton url={curentUrl}>
                        <WhatsappIcon size={25} round />
                    </WhatsappShareButton>
                    <FacebookShareButton url={curentUrl}>
                        <FacebookIcon size={25} round />
                    </FacebookShareButton>
                    <TelegramShareButton url={curentUrl}>
                        <TelegramIcon size={25} round />
                    </TelegramShareButton>
                    <TwitterShareButton url={curentUrl}>
                        <TwitterIcon size={25} round />
                    </TwitterShareButton>
                    
                </div>
                <div className="flex gap-1 md:gap-2">
                <a onClick={handleCopyLink} className="cursor-pointer">
                    <span className="iconify mingcute--copy-line w-8 h-8 flex items-center"></span>
                </a>
                <Toaster />
                </div>
            </div>
        </div>
    )
}
export default ShareButtons