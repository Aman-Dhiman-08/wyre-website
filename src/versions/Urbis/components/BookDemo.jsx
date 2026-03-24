import { motion } from 'framer-motion';

export default function UrbisBookDemo() {
  return (
    <section id="book-demo" className="urbis-demo">
      <div className="urbis-demo__container">
        
        <div className="urbis-demo__grid">
          
          {/* Left: Content */}
          <div className="urbis-demo__info">
            <motion.p 
              className="urbis-demo__eyebrow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              SCHEDULE A DEMO
            </motion.p>
            <motion.h2 
              className="urbis-demo__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Ready to transform <br />
              <span className="urbis-demo__title-accent">your workflow?</span>
            </motion.h2>
            <motion.p 
              className="urbis-demo__desc"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Whether you're exploring our tools or ready to dive in, we’d love to show you how Wyre AI can work for your team.
            </motion.p>
            <motion.p 
              className="urbis-demo__sub-desc"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Schedule a personalized demo to see how we can save your team hours every week.
            </motion.p>
          </div>

          {/* Right: Form */}
          <motion.div 
            className="urbis-demo__form-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <form className="urbis-demo__form" onSubmit={(e) => e.preventDefault()}>
              <div className="urbis-demo__field-group">
                <div className="urbis-demo__field">
                  <label className="urbis-demo__label">NAME</label>
                  <input type="text" className="urbis-demo__input" placeholder="Full Name" />
                </div>
                <div className="urbis-demo__field">
                  <label className="urbis-demo__label">EMAIL</label>
                  <input type="email" className="urbis-demo__input" placeholder="Work Email" />
                </div>
              </div>

              <div className="urbis-demo__field">
                <label className="urbis-demo__label">COMPANY</label>
                <input type="text" className="urbis-demo__input" placeholder="Your Organization" />
              </div>

              <div className="urbis-demo__field">
                <label className="urbis-demo__label">MESSAGE</label>
                <textarea className="urbis-demo__input urbis-demo__input--textarea" placeholder="Tell us about your team..." rows={4} />
              </div>

              <button type="submit" className="urbis-demo__submit">
                Book My Demo
              </button>
            </form>

            {/* Corner Decorators */}
            <div className="urbis-corner urbis-corner--tl" />
            <div className="urbis-corner urbis-corner--br" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
