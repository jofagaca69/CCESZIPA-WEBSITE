import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby'

interface seoDTO {
    title: string;
    description: string;
    children?: any;
}

const Seo = ({ title, description, children }: seoDTO) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <title>{title} | {data.site.siteMetadata.title}</title>
            <meta name="keywords" content="Colegio, Zipaquirá, Mejores, Bilingüe, Sabana Centro, Francés, Inglés, Docentes Nativos, Educación de Calidad en Zipaquirá, Colegio Campestre Exploradores del Saber, Programas Académicos Innovadores, Aprendizaje Personalizado, Instalaciones Educativas Modernas, Inscripciones Abiertas 2024, Comunidad Educativa Comprometida, Desarrollo Integral de Estudiantes, Excelencia Académica en Zipaquirá"/>
            <meta name="description" content={description} />
            {/*<meta name="image" content={image} />*/}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            {/*<meta name="twitter:url" content={url} />*/}
            <meta name="twitter:description" content={description} />
            {/*<meta name="twitter:image" content={image} />*/}
            {/*<meta name="twitter:creator" content={twitterUsername} />*/}
            {/*<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />*/}
            <meta name="robots" content="index, follow" />

            {children}

        </>
    )
}

export default Seo