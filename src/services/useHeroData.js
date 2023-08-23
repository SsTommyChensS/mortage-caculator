import { graphql, useStaticQuery } from "gatsby";

const useHerotData = () => {
    const hero_info = useStaticQuery(graphql`
        query HeroContentQuery {
        contentfulHero(title: {eq: "Financial Advisor For Next Level Happy Life!"}) {
            id
            title
            description {
            description
            }
            image {
            file {
                url
            }
            }
            button
        }
        }
    `);

    return hero_info;
}

export default useHerotData;