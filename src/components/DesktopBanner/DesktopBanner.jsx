import "./DesktopBanner.css";
import qrcode from "/img/qr-wiki.png";
export function DesktopBanner() {
    return (
        <div className="desktop-only-banner">
            <div className="banner-content">
                <p>
                    Afin de profiter pleinement de l'expérience{" "}
                    <strong>Wiki Yum</strong>, veuillez scanner le QR code pour
                    utiliser la version mobile.
                    <br />
                    <strong>Bon appétit !</strong>
                </p>
                <img src={qrcode} alt="QR Code" className="qr-code-img" />
            </div>
        </div>
    );
}
