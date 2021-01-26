import './HomePage.css';

function HomePage(){

    return (
        <div className='homepagebody'>
            <div className='header'>Medium - Analytics</div>
            <div className='header'>Highlighted Article
                <div>Image goes here</div>
                <div>Title of highlighted article goes here</div>
                <div>Blurb-quick description</div>
            </div>
            <div>Article Feed</div>
            {/* probably map with separate divs for each article to be displayed
            need div for title, blurb, (image?), (date?)
            */}

        </div>
    )
}

export default HomePage;
