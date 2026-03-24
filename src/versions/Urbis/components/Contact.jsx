import { motion } from 'framer-motion';

export default function UrbisContact() {
  return (
    <section id="contact" className="urbis-contact">
      <div className="urbis-contact__container">
        
        {/* Main CTA Block */}
        <div className="urbis-contact__box">
          
          <motion.div 
            className="urbis-contact__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="urbis-contact__eyebrow">READY TO TRANSFORM YOUR WORKFLOW?</p>
            <h2 className="urbis-contact__title">
              Because time, accuracy and <br />
              <span className="urbis-contact__title-accent">margins matter.</span>
            </h2>
            <p className="urbis-contact__tagline">
              Let's build something great together!
            </p>
            
            <motion.a 
              href="mailto:sales@wyreai.io"
              className="urbis-contact__button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch with us
            </motion.a>
          </motion.div>

          {/* Architectural Background Decorators */}
          <div className="urbis-contact__grid" />
          <div className="urbis-contact__corner urbis-contact__corner--tl" />
          <div className="urbis-contact__corner urbis-contact__corner--br" />
          
        </div>



      </div>
    </section>
  );
}
