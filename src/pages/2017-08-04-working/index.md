---
path: '/working-with-google-analytics'
date: '2017-08-04'
title: 'Is Google Analytics working with your React App? If not, make it work in just 4 easy steps.'
author: 'Akanksha Choudhary'
description: 'Single Page Applications are web apps that load with minimum entire page refreshes. They have the entire code loaded at the first page load itself and upon user interaction with the site, only the required data changes dynamically.'
---
<div style="text-align: center">
<img src="https://media.licdn.com/media/gcrc/dms/image/C5612AQGzam53NZ61kw/article-cover_image-shrink_720_1280/0?e=1553731200&v=beta&t=bOr_qS8xQqz8q9nj4H2U9PtEiVwym7gDGnBoqLISauM" />
</div>

Single Page Applications are web apps that load with minimum entire page refreshes. They have the entire code loaded at the first page load itself and upon user interaction with the site, only the required data changes dynamically. In traditional websites the entire code runs every time a page is loaded along with its tracking code. Whereas in React Apps, upon URL change the entire code is not loaded again and this saves a lot of load time, hence making your website faster. While SPA’s are of great advantage, they need a little effort in tracking page views. As the URL updates, your tracker data should be updated as well. Here are simple steps you can use to include Google Analytics to your React App.

1. Save React-GA module as a dependency in the package.json file using this command: 

        npm install react-ga —save  

2. After installing React-GA import the module into the required file.  

        import ReactGA from ‘react-ga’;

3. Initialise your Unique tracking number. This is needed only once, where you initialise your app.
    
        ReactGA.initialize('UA-XXXXXXXX');

4. Now in your React route file:

        export function fireTracking(nextState) {

            const { pathname } = nextState.location // this gives you the next URL

            ReactGA.pageview(pathname)

            }

    You can use onEnter method to fire a function that triggers on every page view.

        export const routes = (

            <Route>

                <Route path="/" onEnter={ fireTracking } component={ Home } />

            </Route>

        )


You see, after all it is not too much effort handling GA for React Apps. Just 4 simple steps to go. Happy Tracking…