import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Blockcta from '../../layouts/Blockcta';
// import App from '../../layouts/App';
import Recentlistings from './Recentlistings';
import Latestblog from '../home/Latestblog';
import Faqs from './Faqs';
import Whyus from '../homethree/Whyus';
import Toplistings from '../home/Toplistings';
import Agentsslider from '../home/Agentsslider';
import Testimonials from '../home/Testimonials';
import Bluecta from '../../layouts/Bluecta';
import Listings from '../hometwo/Listings';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Categories />
                <Listings/>
                <div className="section section-padding pt-0">
                    <Blockcta />
                </div>
                <div className="acr-footer footer-2">
                    {/* <App /> */}
                    <Whyus />
                </div>
                <Toplistings/>
                <Recentlistings/>
                <Latestblog/>
                <Faqs/>
                <Agentsslider/>
                <div className="section pt-0">
                    <Bluecta/>
                </div>
                <Testimonials/>
            </Fragment>
        );
    }
}

export default Content;