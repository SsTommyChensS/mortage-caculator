import { graphql, useStaticQuery } from "gatsby";

const useServiceData = () => {
    const service_info = useStaticQuery(graphql`
        query ServiceQuery {
            allContentfulIconIntroBlock {
                nodes {
                    title
                    description
                    icon {
                    url
                    }
                }
            }
        }
    `);

    return service_info;
}

export default useServiceData;