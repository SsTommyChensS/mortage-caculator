import { graphql, useStaticQuery } from "gatsby";

const useServiceData = () => {
    const service_info = useStaticQuery(graphql`
        query ServiceQuery {
            allContentfulIconIntroBlock {
            edges {
                node {
                description
                title
                icon {
                    file {
                    url
                    }
                }
                }
            }
            }
        }
    `);

    return service_info;
}

export default useServiceData;