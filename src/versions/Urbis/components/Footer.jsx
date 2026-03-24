import Logo from '../../../components/Logo';

export default function UrbisFooter() {
  return (
    <footer className="urbis-footer">
      <div className="urbis-footer__container">
        
        {/* Top: Brand & Navigation */}
        <div className="urbis-footer__grid">
          
          <div className="urbis-footer__brand-side">
            <Logo className="urbis-footer__logo" forceColor="white" />
            <p className="urbis-footer__mission">
              Transforming preconstruction by eliminating risk <br />
              and ambiguity through architectural intelligence.
            </p>
            
            <div className="urbis-footer__newsletter">
              <label className="urbis-footer__news-label">SUBSCRIBE TO OUR NEWSLETTER</label>
              <form className="urbis-footer__news-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email Address" className="urbis-footer__news-input" />
                <button type="submit" className="urbis-footer__news-btn">→</button>
              </form>
            </div>
          </div>

          <div className="urbis-footer__links-side">
            <div className="urbis-footer__column">
              <h4 className="urbis-footer__column-title">Products</h4>
              <ul className="urbis-footer__list">
                <li><a href="#products">Wyre Scope</a></li>
                <li><a href="#products">Wyre Check</a></li>
              </ul>
            </div>
            <div className="urbis-footer__column">
              <h4 className="urbis-footer__column-title">Company</h4>
              <ul className="urbis-footer__list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#book-demo">Book Demo</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="urbis-footer__column urbis-footer__column--office">
              <h4 className="urbis-footer__column-title">Office</h4>
              <div className="urbis-footer__address">
                <p className="urbis-footer__hq-label">HEADQUARTERS</p>
                <p className="urbis-footer__hq-value">Washington D.C.</p>
                <div className="urbis-footer__spacer" />
                <p className="urbis-footer__addr-label">ADDRESS</p>
                <p className="urbis-footer__addr-value">
                  23710 Schooler Plz Suite 2070,<br />
                  Brambleton, VA 20148<br />
                  United States
                </p>
                <a href="mailto:sales@wyreai.io" className="urbis-footer__email">sales@wyreai.io</a>
              </div>
            </div>
          </div>

        </div>

        {/* Middle: Massive Watermark */}
        <div className="urbis-footer__watermark-wrap">
          <h2 className="urbis-footer__watermark">WYRE AI</h2>
        </div>

        {/* Bottom: Sub-Footer */}
        <div className="urbis-footer__bottom">
          <div className="urbis-footer__bottom-wrap">
            <p className="urbis-footer__copy">© 2026 WYRE | ALL RIGHTS RESERVED</p>
            <div className="urbis-footer__socials">
              <a href="#" className="urbis-footer__social">LinkedIn</a>
              <a href="#" className="urbis-footer__social">Twitter</a>
            </div>
          </div>
        </div>

      </div>

      {/* Architectural Background Grid */}
      <div className="urbis-footer__grid-bg" />
    </footer>
  );
}
