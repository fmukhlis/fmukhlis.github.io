import '../assets/css/Footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="flex justify-center py-4 bg-slate-300 dark:bg-slate-900 gap-7 text-secondary">
            <a href='#'><FontAwesomeIcon icon={faTwitter} className="fs-lg"/></a>
            <a href='#'><FontAwesomeIcon icon={faFacebookSquare} className="fs-lg"/></a>
            <a href='#'><FontAwesomeIcon icon={faInstagram} className="fs-lg" /></a>
            <a href='#'><FontAwesomeIcon icon={faGithubSquare} className="fs-lg"/></a>
        </footer>
    )
}

export default Footer