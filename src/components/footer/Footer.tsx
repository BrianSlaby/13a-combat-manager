import React from "react"
import "./footer.css"

export default function Footer(): React.JSX.Element {

    return (
        <>
            <footer>
                <div className="footer-col">
                <p>This app uses trademarks and/or copyrights owned by Fire Opal Media, which are used under the Fire Opal Media, 13th Age Community Use Policy. We are expressly prohibited from charging you to use or access this content. This app is not published, endorsed, or specifically approved by Fire Opal Media. For more information about Fire Opal Media's 13th Age Community Use Policy, please visit <a href="http://www.fireopalmedia.com/13th-age-community-use" target="_blank">www.fireopalmedia.com/13th-age-community-use</a>. For more information about Fire Opal Media and 13th Age products, please visit <a href="http://www.fireopalmedia.com" target="_blank">www.fireopalmedia.com</a> and <a href="http://www.pelgranepress.com" target="_blank">www.pelgranepress.com</a>.</p>
                </div>

                <div className="footer-col">
                    <p>Source code available at <a href="https://github.com/BrianSlaby/13a-combat-manager" target="_blank" >https://github.com/BrianSlaby/13a-combat-manager</a>.</p>
                    <p className="last-updated-text">Updated 2024</p>
                </div>
            </footer>
        </>
    )
}