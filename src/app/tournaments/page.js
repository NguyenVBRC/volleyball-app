import Card from "@/components/Card";

const TournamentsPage = () => {
    const pageType = 'tournaments';
    const listOfTournaments = [
        {
            name: 'Love Rocks',
            date: '02-14-2022',
            image: 'Image Here'
        }, 
        {
            name: 'Lorem Ipsum',
            date: '02-14-2022',
            image: 'Image Here'
        }, 
        {
            name: 'Bublitz Cup',
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
            <h1>Upcoming</h1>
            { 
                listOfTournaments.map((obj, index) => {
                    const generatedSlug = slugify(obj.name);
                    return (
                        <Card key={index} slug={generatedSlug} title={obj.name} date={obj.date} format={pageType}/>
                    );
                })
            }
        </div>
    );
}

export default TournamentsPage;