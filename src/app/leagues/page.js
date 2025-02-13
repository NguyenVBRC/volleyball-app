import Card from "@/components/Card";

const LeaguesPage = () => {
    const pageType = 'leagues';

    const listOfLeagues = [
        {
            name: 'Wednesday Quads',
            date: '02-14-2022',
            image: 'Image Here'
        }, 
        {
            name: 'Thursday Triples',
            date: '02-14-2022',
            image: 'Image Here'
        }, 
        {
            name: 'Revco',
            date: '02-14-2022',
            image: 'Image Here'
        }
    ]

    // Slugify
    const slugify = (text) => {
        return text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    }

    return (
        <div>
            <h1>Active Leagues</h1>
            { 
                listOfLeagues.map((obj, index) => {
                    const generatedSlug = slugify(obj.name);
                    return (
                        <Card key={index} slug={generatedSlug} title={obj.name} date={obj.date} format={pageType}/>
                    );
                })
            }
        </div>
    );
}

export default LeaguesPage;