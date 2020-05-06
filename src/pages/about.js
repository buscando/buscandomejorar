import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Gleny from '../images/gleny.jpg'

const AboutPage = () => (
  
  <Layout pageTitle="Acerca de mi">    
    <img src={Gleny} style={{ maxWidth: '100%' }} alt="gleny" />
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <p></p>
    <p>Nací un hermoso día (porque nací yo jeje) en mi querido Peru, un día decidí emigrar, ahora vivo en Australia.</p>
    <p>Lo que intento en este blog es compartir mi búsqueda por mejorar,  me falta mucho camino por recorrer en mi aprendizaje, lo que creía ayer, ha cambiado hoy y se que seguirá cambiando.</p>
    <p>No intento decir lo que hago es lo correcto o no, solo trato de compartir, ya que todos estamos en esa misma búsqueda.</p>

    Gracias por estar aqui conmigo.
  </Layout>
)

export default AboutPage
