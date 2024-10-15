import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";


export function SiteFooter() {
    return(<footer>
        <div className="w-full mb-6 mt-14 flex flex-col items-center">
            <div className = "mb-3 flex space-x-4">
                <a target="_blank" rel="noreferrer" href="mailto:tayo@tayo.sh">
                    <span className="sr-only">Mail</span>
                    <Mail className="h-6 w-6" />
                </a>
                <a target="_blank" rel="noreferrer" href={siteConfig.links.linkedIn}>
                    <span className="sr-only">LinkedIn</span>
                    <Icons.linkedIn className="h-6 w-6" />
                </a>
                <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
                    <span className="sr-only">GitHub</span>
                    <Icons.github className="h-6 w-6" />
                </a>
            </div>
        </div>
    </footer>);
}